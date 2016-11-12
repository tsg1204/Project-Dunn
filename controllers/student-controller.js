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
    res.redirect('/students');
})


// router.put('/update', function (req, res) {
//     //console.log(req.body.id);
//     models.StudentInfo.update(
//         {
//          //devoured:true
//         },
//         {
//             //where:{id:req.body.xxx},
//         }
//         );
//     res.redirect('/students')
// })

module.exports = router;

