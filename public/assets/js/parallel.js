d3.json("api/parallel", function (err, response) {
	
	var classData = response.orgClassData,
		stateData = response.orgStateData;

	var margin = {top: 30, right: 10, bottom: 10, left: 10},
	    width = 1200 - margin.left - margin.right,
	    height = 300 - margin.top - margin.bottom;

	  var x = d3.scale.ordinal().rangePoints([0, width], 1),
	      y = {};


	  var color_set = d3.scale.linear()
		.range(["#3182bd", "#f33"]);

	  var line = d3.svg.line(),
	      axis = d3.svg.axis().orient("left"),
	      background,
	      foreground;

	  var pc0, pc1;
	  
	  pc0 = d3.parcoords()("#parcoords")
	    .data(classData)
	    .data(stateData)
	    .bundlingStrength(0) 
	    .smoothness(0)
	    .showControlPoints(false)
	    .hideAxis(["name"])
	    .render()
	    .brushMode("1D-axes")
	    .reorderable()
	    .interactive();

	   

		d3.select("#parcoords svg").append("text")
	.text("")
	.attr("text-anchor", "middle")
	.attr("text-decoration", "overline")
	.attr("transform", "translate(" + pc0.width()/2 + "," + (pc0.height()+5) + ")");
	  	update_colors(d3.keys(classData[0])[2]);

		pc0.svg.selectAll(".dimension")
		    .on("click", update_colors)
		    .selectAll(".label")
		    	.style("font-size", "14px"); 

		d3.select("#parcoords svg")
			.on("mousemove", function() {
			    var mousePosition = d3.mouse(this);			    
			    highlightLineOnClick(mousePosition, true); 
			})
			.on("mouseout", function(){
				cleanTooltip();
				pc0.unhighlight();
			});

	function update_colors(dimension) { 
		pc0.svg.selectAll(".dimension")
			.style("font-weight", "normal")
			.filter(function(d) { return d == dimension; })
				.style("font-weight", "bold");

		var values = pc0.data().map(function(d){return parseFloat(d[dimension])}); 
		color_set.domain([d3.min(values), d3.max(values)]);
		
		pc0.color(function(d){return color_set([d[dimension]])}).render();
	};
   
	function highlightLineOnClick(mouseClick, drawTooltip){
	
		var clicked = [];
	    var clickedCenPts = [];
		
		clickedData = getClickedLines(mouseClick);

		if (clickedData && clickedData[0].length!=0){

			clicked = clickedData[0];
	    	clickedCenPts = clickedData[1];

		    // highlight clicked line
		    pc0.highlight(clicked);
			
			if (drawTooltip){
				// clean if anything is there
				cleanTooltip();
		    	// add tooltip
		    	addTooltip(clicked, clickedCenPts);
			}

		}
	};

	function addTooltip(clicked, clickedCenPts){
	
	    var clickedDataSet = [];
	    var margins = pc0.margin()

	    for (var i=0; i<clicked.length; i++){
	    	for (var j=0; j<clickedCenPts[i].length; j++){
	    		var text = d3.values(clicked[i])[j];
	  			var x = clickedCenPts[i][j][0] - margins.left;
	  			var y = clickedCenPts[i][j][1] - margins.top;
	  			clickedDataSet.push([x, y, text]);
			}
		}
	}	

	function getClickedLines(mouseClick){
	    var clicked = [];
	    var clickedCenPts = [];

		// find which data is activated right now
		var activeData = getActiveData();

		// find centriod points
		var graphCentPts = getCentroids(activeData);

	    if (graphCentPts.length==0) return false;

		// find between which axes the point is
	    var axeNum = findAxes(mouseClick, graphCentPts[0]);
	    if (!axeNum) return false;
	    
	    graphCentPts.forEach(function(d, i){
		    if (isOnLine(d[axeNum-1], d[axeNum], mouseClick, 2)){
		    	clicked.push(activeData[i]);
		    	clickedCenPts.push(graphCentPts[i]); // for tooltip
		    }
		});
		
		return [clicked, clickedCenPts]
	};

	function cleanTooltip(){
		pc0.svg.selectAll("#tooltip")
	    	.remove();
	}

	function getActiveData(){
		if (pc0.brushed()!=false) return pc0.brushed();
		return pc0.data();
	}

	function isOnLine(startPt, endPt, testPt, tol){
		var x0 = testPt[0];
		var	y0 = testPt[1];
		var x1 = startPt[0];
		var	y1 = startPt[1];
		var x2 = endPt[0];
		var	y2 = endPt[1];
		var Dx = x2 - x1;
		var Dy = y2 - y1;
		var delta = Math.abs(Dy*x0 - Dx*y0 - x1*y2+x2*y1)/Math.sqrt(Math.pow(Dx, 2) + Math.pow(Dy, 2)); 
		if (delta <= tol) return true;
		return false;
	}

	function findAxes(testPt, cenPts){
		var x = testPt[0];
		var y = testPt[1];

		if (cenPts[0][0] > x) return false;
		if (cenPts[cenPts.length-1][0] < x) return false;

		for (var i=0; i<cenPts.length; i++){
			if (cenPts[i][0] > x) return i;
		}
	};

	function getCentroids(data){
		var margins = pc0.margin();
		var graphCentPts = [];
		
		data.forEach(function(d){
			var initCenPts = pc0.compute_real_centroids(d).filter(function(d, i){return i%2==0;});
			var cenPts = initCenPts.map(function(d){
				return [d[0] + margins["left"], d[1]+ margins["top"]]; 
			});

			graphCentPts.push(cenPts);
		});

		return graphCentPts;
	};

});



   