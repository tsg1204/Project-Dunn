d3.json("api/parallel", function (err, response) {
	console.log(response);
var classData = response.orgClassData;

var margin = {top: 30, right: 10, bottom: 10, left: 10},
    width = 960 - margin.left - margin.right,
    height = 500 - margin.top - margin.bottom;

  var x = d3.scale.ordinal().rangePoints([0, width], 1),
      y = {};

  var line = d3.svg.line(),
      axis = d3.svg.axis().orient("left"),
      background,
      foreground;

  var pc0;
  
  pc0 = d3.parcoords()("#example")
    .data(classData)
    .bundlingStrength(0) 
    .smoothness(0)
    .showControlPoints(false)
    .hideAxis(["name"])
    .render()
    .brushMode("1D-axes")
    .reorderable()
    .interactive();

});    