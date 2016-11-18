var express = require('express');
var router = express.Router();
var models = require('../models');

router.get('/students', function (req, res) {
    models.StudentInfo.findAll().then(function (studentInfo) {
        var hbsObject = { studentInfo: studentInfo };
        console.log('\nhandlebars hbsObject\n', hbsObject);
        res.render('studentInfo', hbsObject);
    })
});

router.post('/students/create', function (req, res) {
    models.StudentInfo.create({
        student_name: req.body.studentName
    })
    .then(function() {
    	res.redirect('/students');
	})
})


module.exports = router;
