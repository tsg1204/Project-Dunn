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
	.text("Stuff")
	.attr("text-anchor", "middle")
	.attr("text-decoration", "overline")

  	update_colors(d3.keys(data[0])[2]);

 // click label to activate coloring
	pc0.svg.selectAll(".dimension")
	    .on("click", update_colors)
	    .selectAll(".label")
	    	.style("font-size", "14px"); // change font sizes of selected lable

//add hover event
	d3.select("#parcoords svg")
		.on("mousemove", function() {
		    var mousePosition = d3.mouse(this);			    
		    highlightLineOnClick(mousePosition, true); //true will also add tooltip
		})
		.on("mouseout", function(){
			cleanTooltip();
			graph.unhighlight();
		});

	function update_colors(dimension) { 
	// change the fonts to bold
	pc0.svg.selectAll(".dimension")
		.style("font-weight", "normal")
		.filter(function(d) { return d == dimension; })
			.style("font-weight", "bold");

	// change color of lines
	// set domain of color scale
	var values = pc0.data().map(function(d){return parseFloat(d[dimension])}); 
	color_set.domain([d3.min(values), d3.max(values)]);
	
	// change colors for each line
	pc0.color(function(d){return color_set([d[dimension]])}).render();
};		


// Add highlight for every line on click
function getCentroids(data){
	// this function returns centroid points for data. I had to change the source
	// for parallelcoordinates and make compute_centroids public.
	// I assume this should be already somewhere in graph and I don't need to recalculate it
	// but I couldn't find it so I just wrote this for now
	var margins = graph.margin();
	var graphCentPts = [];
	
	data.forEach(function(d){
		
		var initCenPts = graph.compute_centroids(d).filter(function(d, i){return i%2==0;});
		
		// move points based on margins
		var cenPts = initCenPts.map(function(d){
			return [d[0] + margins["left"], d[1]+ margins["top"]]; 
		});

		graphCentPts.push(cenPts);
	});

	return graphCentPts;
}
	
});

  // pc1 = d3.parcoords()("#parcoords")
  //   .data(stateData)
  //   .bundlingStrength(0) 
  //   .smoothness(0)
  //   .showControlPoints(false)
  //   .hideAxis(["name"])
  //   .render()
  //   .brushMode("1D-axes")
  //   .reorderable()
  //   .interactive();

   