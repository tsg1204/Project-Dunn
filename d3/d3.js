var model = require('../models')['statistics'];
var express = require('express');
var router = express.Router();

model.sync();

model.findAll().then(function (res) {
	res.forEach(function(entry) {
		console.log(entry.id);
	});
})