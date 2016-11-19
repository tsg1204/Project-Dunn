d3.json("/api/bar", function (error, response) {
  var dataSet   = response,
      classData = dataSet.classData,
      stateData = dataSet.stateData;

  var svgHeight  = 300;
  var svgWidth   = 300;
  var maxScore   = 100; 
  var barSpacing = 1; 
  
  var padding = {
      left: 20, right: 0,
      top: 20, bottom: 40
  };

  function animateClass() {
    var maxWidth  = svgWidth - padding.left - padding.right;
    var maxHeight = svgHeight - padding.top - padding.bottom;

    var convert = {    
      x: d3.scale.ordinal(),
      y: d3.scale.linear()
    };

    var axis = {
      x: d3.svg.axis().orient('bottom'),
      y: d3.svg.axis().orient('left')
    };
      
    axis.x.scale(convert.x);
    axis.y.scale(convert.y);

    convert.y.range([maxHeight, 0]);
    convert.x.rangeRoundBands([0, maxWidth]);
      
    convert.x.domain(classData.map(function (d) {
        return d.name;
      })
    );
    convert.y.domain([0, maxScore]);

    var svg = d3.select('.class-chart')
      .attr({
          width: svgWidth,
          height: svgHeight
      });
    
    var chart = svg.append('g')
      .attr({
          transform: function (d, i) {
            return 'translate(' + padding.left + ',' + padding.top + ')';
          }
        });
      
    chart.append('g') 
      .attr({
        class: 'x axis',
        transform: 'translate(0,' + maxHeight + ')'
      })
      .call(axis.x); 

    chart.append('g') 
      .attr({
        class: 'y axis',
        height: maxHeight
      })
      .call(axis.y);

    var bars = chart
      .selectAll('g.bar-group')
      .data(classData)
      .enter()
      .append('g')
      .attr({
        transform: function (d, i) {
          return 'translate(' + convert.x(d.name) + ', 0)';
        },
        class: 'bar-group'
      });
    
    bars.append('rect')
          .attr({
          y: maxHeight,
          height: 0,
          width: function(d) {return convert.x.rangeBand(d) - 1;},
          class: 'bar'
      })
      .transition()
      .duration(2000)
      .attr({
        y: function (d, i) {
          return convert.y(d.value);
        },
        height: function (d, i) {
          return maxHeight - convert.y(d.value);
        }
      });
    
    bars.append("text")
     .attr("class", "bar-value")
     .attr("transform", "translate(25,318)")
     .text(function(d) { return d.value; })
     .style("fill", "white")
     .style("font-size", "1.75em"); 

    return chart;
  }

  function animateState() {

    var maxWidth = svgWidth - padding.left - padding.right;
    var maxHeight = svgHeight - padding.top - padding.bottom;
    
    var convert = {    
      x: d3.scale.ordinal(),
      y: d3.scale.linear()
    };

    var axis = {
      x: d3.svg.axis().orient('bottom'),
      y: d3.svg.axis().orient('left')
    };

    axis.x.scale(convert.x);
    axis.y.scale(convert.y);

    convert.y.range([maxHeight, 0]);
    convert.x.rangeRoundBands([0, maxWidth]);
      
    convert.x.domain(stateData.map(function (d) {
        return d.name;
      })
    );
    convert.y.domain([0, maxScore]);

    var svg = d3.select('.state-chart')
      .attr({
          width: svgWidth,
          height: svgHeight
      });
    
    var chart = svg.append('g')
      .attr({
          transform: function (d, i) {
            return 'translate(' + padding.left + ',' + padding.top + ')';
          }
        });
      
    chart.append('g') 
      .attr({
        class: 'x axis',
        transform: 'translate(0,' + maxHeight + ')',
      })
      .call(axis.x); 

    chart.append('g') 
      .attr({
        class: 'y axis',
        height: maxHeight
      })
      .call(axis.y); 

    var bars = chart
      .selectAll('g.bar-group')
      .data(stateData)
      .enter()
      .append('g') 
      .attr({
        transform: function (d, i) {
          return 'translate(' + convert.x(d.name) + ', 0)';
        },
        class: 'bar-group'
      });

    bars.append('rect')
          .attr({
          y: maxHeight,
          height: 0,
          width: function(d) {return convert.x.rangeBand(d) - 1;},
          class: 'bar'
      })
      .transition()
      .duration(2000)
      .attr({
        y: function (d, i) {
          return convert.y(d.value);
        },
        height: function (d, i) {
          return maxHeight - convert.y(d.value);
        }
      });

    bars.append("text")
     .attr("class", "bar-value")
     .attr("transform", "translate(22,318)")
     .text(function(d) { return d.value; })
     .style("fill", "white")
     .style("font-size", "1.75em");

    return chart;
  }

  animateClass(); 
  animateState();
});
