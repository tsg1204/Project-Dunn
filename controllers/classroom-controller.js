var express = require('express');
var router = express.Router();
var models = require('../models');

router.get('/classroom', function (req, res) {
    models.StudentInfo.findAll().then(function (studentInfo) {
        var hbsObject = { studentInfo: studentInfo };
        //console.log('\nhandlebars hbsObject\n', hbsObject);
        res.render('studentInfo', hbsObject);
    })
});

module.exports = router;