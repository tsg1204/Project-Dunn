var express           = require('express'),
  bodyParser          = require('body-parser'),
  methodOverride      = require('method-override'),
  exphbs              = require('express-handlebars'),
  app                 = express(),
  models              = require('./models'),
	classRouter         = require('./controllers/class-controller.js'),
	studentRouter       = require('./controllers/student-controller.js'),
	classroomRouter     = require('./controllers/classroom-controller.js'),
	d3Router            = require('./controllers/d3-controller.js'),
	stormpath           = require('stormpath'),
	sequelizeConnection = models.sequelize;

app.use(express.static(process.cwd() + '/public'));
app.use(methodOverride('_method'));
app.use(bodyParser.urlencoded({
	extended: false
}));
app.use(studentRouter);
app.use(classRouter);
app.use(classroomRouter);
app.use(d3Router);

app.engine('handlebars', exphbs({
    defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');

sequelizeConnection.query('SET FOREIGN_KEY_CHECKS = 0')
.then(function(){
	return sequelizeConnection.sync({force:false})
});

var PORT = process.env.PORT || 3000;
app.listen(PORT);
