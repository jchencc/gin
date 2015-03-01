var express = require('express'),
    path = require('path'),
    bodyParser = require('body-parser');

var app = express();

// view engine setup
app.set('view engine', 'jade');

// static resource router
app.use(express.static(path.join(__dirname, 'public')));

// app.use(bodyParser.urlencoded({extended: false}));
// app.use(bodyParser.json());

// custom routers
app.use('/', require('./routes/index'));
app.use('/admin', require('./routes/admin'));

// custom 404 page
app.use('/', function(request, response) {
    response.status(404);
    response.render('error/404');
});

module.exports = app;
