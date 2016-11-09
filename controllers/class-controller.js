var express = require('express');
var router = express.Router();
var models = require('../models');

router.get('/', function (req, res) {
    models.class.findAll().then(function (xxx) {
        var hbsObject = { xxxs: xxxs};
        //console.log('\nhandlebars hbsObject\n', hbsObject);
        res.render('index', hbsObject);
    })
});

router.post('/create', function (req, res) {
    models.class.create({
        class_name: req.body.class_name,
        devouted: false
    })
    res.redirect('./');
})

router.put('/update', function (req, res) {
    //console.log(req.body.id);
    models.class.update(
        {
         devoured:true
        },
        {
            where:{id:req.body.xxx},
        }
        );
    res.redirect('./')
})
module.exports = router;

