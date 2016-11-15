var express = require('express');
var router = express.Router();
var models = require('../models');

router.get('/', function (req, res) {
    models.ClassInfo.findAll().then(function (classInfo) {
        var hbsObject = { classInfo: classInfo };
        //console.log('\nhandlebars hbsObject\n', hbsObject);
        res.render('index', hbsObject);
    })
});

router.post('/create', function (req, res) {
    console.log("req: ", req.body.schoolName);
    // models.ClassInfo.create({
    //     school_name: req.body.schoolName,
    //     class_name: req.body.className,
    //     teacher_name: req.body.teacherName,
    //     grade: req.body.grade
    // })
    res.redirect('/students');
})

router.put('/update', function (req, res) {
    //console.log(req.body.id);
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
