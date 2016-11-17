var express = require('express');
var router = express.Router();
var models = require('../models');

// router.get('/classroom', function (req, res) {
//   models.StudentInfo.findAll({
//     include: [ models.ClassInfo ]
//   })
//   // connect the findAll to this .then
//   .then(function(studentInfo) {
//     res.render('/classroom', {
//       class_name: req.params.class_name,
//       studentInfo: studentInfo
//     })
//   })
// });

var hbsObject, hbsObject2;

router.get('/classroom', function (req, res) {
    var studentInfoPromise = models.StudentInfo.findAll();
    var classInfoPromise = models.ClassInfo.findAll();

    Promise.all([studentInfoPromise, classInfoPromise]).then(values => {
      var hbsObject1 = { studentInfo: values[0], ClassInfos: values[1] };
      res.render('classroom', hbsObject1);
    });
});

// router.get('/classroom', function (req, res) {
//     models.ClassInfo.findAll().then(function (classInfo) {
//         var hbsObject2 = { classInfo: classInfo };
//         console.log('\nhandlebars hbsObject2\n', hbsObject2);
//         res.render('classroom', hbsObject2);
//     })
// });

router.put('/classroom/update/:id', function(req,res) {
  models.StudentInfo.update(
  {
    student_grade: req.body.grade
  },
  {
    where: { id : req.params.id }
  })
  // connect it to this .then.
  .then(function (result) {
    res.redirect('/classroom');
  })
});


module.exports = router;

