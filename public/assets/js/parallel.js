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
  // var data = [[80,80,0,20],[80,75,5,20],[80,76,4,20],[80,80,0,20],[80,75,5,20],[80,76,4,20],[91,82,9,9],[81,81,0,19],[83,81,2,17],[91,82,9,9],[81,81,0,19],[83,81,2,17],[86,81,5,14],[80,78,2,20],[82,79,3,18],[86,81,5,14],[80,78,2,20],[82,79,3,18],[73,73,0,27],[74,68,5,26],[61,61,0,39],[64,59,5,36],[87,87,0,13],[85,85,0,15],[40,40,0,60],[77,77,0,23],[73,73,0,27],[82,82,0,18],[80,78,2,20],[36,36,0,64]];

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