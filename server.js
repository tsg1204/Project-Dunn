var express = require('express');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var app = express();

// This says that if we do root or /, we mean to look in the public folder.
app.use(express.static(process.cwd() + '/public'));

app.use(bodyParser.urlencoded({
	extended: false
}));
// override with POST having ?_method=DELETE
app.use(methodOverride('_method'));
var exphbs = require('express-handlebars');
app.engine('handlebars', exphbs({
    defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');

// and we bring in our models folder. This brings in the model's object, as defined in index.js
var models  = require('./models');

// extract our sequelize connection from the models object, to avoid confusion
var sequelizeConnection = models.sequelize;

// We run this query so that we can drop our tables even though they have foreign keys
sequelizeConnection.query('SET FOREIGN_KEY_CHECKS = 0')

// reach into our models object, and create each table based on the associated model.
// note: force:true drops the table if it already exists

// make our tables
// note: force:true drops the table if it already exists
.then(function(){
	return sequelizeConnection.sync({force:true})
})

var router = require('./controllers/class_controller.js');
app.use('/', router);

var PORT = process.env.PORT || 3000;
app.listen(PORT);