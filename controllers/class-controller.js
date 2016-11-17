var express = require('express');
var router = express.Router();
var models = require('../models');

router.get('/', function (req, res) {
    models.ClassInfo.findAll().then(function (classInfo) {
        var hbsObject = { classInfo: classInfo };
        res.render('index', hbsObject);
    })
});

router.post('/create', function (req, res) {
    models.ClassInfo.create({
        school_name: req.body.schoolName,
        class_name: req.body.className,
        teacher_name: req.body.teacherName,
        grade: req.body.grade
    })
    res.redirect('/students');
})

router.put('/update', function (req, res) {
    models.ClassInfo.update(
        {
         //devoured:true
        },
        {
            //where:{id:req.body.xxx},
        }
        );
    res.render('./')
})
module.exports = router;
