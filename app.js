var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
//var xlsjs = require('xlsjs');
///var routes = require('./routes/index');
//var users = require('./routes/users');
//var students = require('./routes/students');
var staffs = require('./routes/staffs');
var cons = require('consolidate');
var app = express();

// Retrieve
var MongoClient = require('mongodb').MongoClient;

// Connect to the db
MongoClient.connect("mongodb://localhost:27017/exampleDb", function(err, db) {
  if(!err) {
    console.log("We are connected");
  }
});

app.get('/', function(request, response) {
    response.sendFile(__dirname + '/views/html/login.html');
});
app.get('/home', function(request, response) {
    response.sendFile(__dirname + '/views/html/home.html');
});
app.get('/admin', function(request, response) {
    response.sendFile(__dirname + '/public/admin.html');
});
app.get('/student/add', function(request, response) {
    response.sendFile(__dirname + '/public/home.html');
});
app.get('/student/modify', function(request, response) {
    response.sendFile(__dirname + '/public/home.html');
});app.get('/admin', function(request, response) {
    response.sendFile(__dirname + '/public/home.html');
});
app.get('/student/delete', function(request, response) {
    response.sendFile(__dirname + '/public/home.html');
});
app.get('/student/exports', function(request, response) {
    response.sendFile(__dirname + '/public/home.html');
});
// view engine setup
//app.engine('html', cons.swig)
//app.set('views', path.join(__dirname, 'views'));
//app.set('view engine', 'html');

// view engine setup
//app.set('views', path.join(__dirname, 'views'));
//app.engine('html', require('ejs').renderFile);
//app.set('view engine', 'html');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//app.use('/', routes);
//app.use('/users', users);
//app.use('/students', students);
//app.use('/staffs', staffs);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
