var model   = require('../models')['statistics'];
var express = require('express');
var router  = express.Router();

router.get('/api/bar', function (req, res) {
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

		classData = makeBarData(classScores);
		stateData = makeBarData(stateScores);

		res.json({classData: classData, stateData: stateData});
	});
});

router.get('/api/parallel', function (req, res) {
	model.findAll().then(function (data) {
		var organizedClassData = [],
			organizedStateData = [];

		for (var i=0; i<data.length; i++) {
			if (i<30) {
				organizedClassData.push([data[i].pass_rate, data[i].pass_prof_rate, data[i].pass_adv_rate, data[i].fail_rate]);
			} else {
				organizedStateData.push([data[i].pass_rate, data[i].pass_prof_rate, data[i].pass_adv_rate, data[i].fail_rate]);
			}
		}

		res.json({orgClassData: organizedClassData, orgStateData: organizedStateData});
	});
});

function makeBarData (data) {
	var sum = 0;

	for (var i=0; i<data.length; i++) {
		sum += data[i];
	}
	var max    = data.sort(function(a,b){return b-a;})[0],
	    min    = data.sort(function(a,b){return a-b;})[0],
	    range  = max - min,
	    median = findMedian(data);

    return [
		{name: "min", value: min},
		{name: "max", value: max},
		{name: "avg", value: Math.round(sum/data.length)},
		{name: "range", value: range},
		{name: "median", value: median}
	]
};

function organizeRawData (data) {

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
