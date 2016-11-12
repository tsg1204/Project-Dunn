var model   = require('../models')['statistics'];
var express = require('express');
var router  = express.Router();



router.get('/data', function (req, res) {
	model.findAll().then(function (data) {
		var classScores = [],
			stateScores = [],
			classData,
			stateData;
		
		for (var i=0; i<data.length; i++) {
			if (i<30) {
				classScores.push(data[i].pass_rate);
			} else {
				stateScores.push(data[i].pass_rate);
			}
		}
		
		classData = makeData(classScores);
		stateData = makeData(stateScores);

		res.send({classData: classData, stateData: stateData});	
	});
});	

function makeData (data) {
	var sum = 0;
	
	for (var i=0; i<data.length; i++) {
		sum += data[i];
	}
	var max = data.sort(function(a,b){return b-a;})[0],
	    min = data.sort(function(a,b){return a-b;})[0],
	    range = max - min,
	    median = findMedian(data);
	
    return {
		min: min,
		max: max,
		avg: Math.round(sum/data.length),
		range: range,
		median: median
	}	
};

function findMedian(data) {
	var m = data.map(function(i) {
        return i;
    }).sort(function(a, b) {
        return a - b;
    });

    var middle = Math.floor((m.length - 1) / 2); 
    if (m.length % 2) {
        return m[middle];
    } else {
        return (m[middle] + m[middle + 1]) / 2.0;
    }
};

module.exports = router;
