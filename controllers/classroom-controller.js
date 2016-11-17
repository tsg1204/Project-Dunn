var express = require('express');
var router = express.Router();
var models = require('../models');

router.get('/classroom', function (req, res) {
    var studentInfoPromise = models.StudentInfo.findAll();
    var classInfoPromise = models.ClassInfo.findAll();

    Promise.all([studentInfoPromise, classInfoPromise]).then(values => {
      var hbsObject1 = { studentInfo: values[0], ClassInfos: values[1] };
      res.render('classroom', hbsObject1);
    });
});

module.exports = router;
