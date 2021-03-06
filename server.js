var express             = require('express'),
    bodyParser          = require('body-parser'),
    methodOverride      = require('method-override'),
    exphbs              = require('express-handlebars'),
    app                 = express(),
    models              = require('./models'),
	classRouter         = require('./controllers/class-controller.js'),
	studentRouter       = require('./controllers/student-controller.js'),
	classroomRouter     = require('./controllers/classroom-controller.js'),
	d3Router            = require('./controllers/d3-controller.js'),
	stormpath           = require('express-stormpath'),
	sequelizeConnection = models.sequelize;

app.use(express.static(process.cwd() + '/public'));
app.use(methodOverride('_method'));
app.use(bodyParser.urlencoded({
	extended: false
}));

app.use(classRouter);
app.use(studentRouter);
app.use(classroomRouter);
app.use(d3Router);
app.use(stormpath.init(app, {
  website: true
}));

app.engine('handlebars', exphbs({
    defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');

sequelizeConnection.query('SET FOREIGN_KEY_CHECKS = 0')
.then(function(){
	return sequelizeConnection.sync({force:false})
});

app.on('stormpath.ready', function() {
  console.log("ready");
  app.listen(process.env.PORT || 3000);
});
