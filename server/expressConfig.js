var express = require('express'),
    logger = require('morgan'),
    bodyParser = require('body-parser'),
    cookieParser = require('cookie-parser'),
    passport = require('passport'),
    session = require('express-session'),
    path = require('path');

var rootPath = path.normalize(__dirname + '/../');

module.exports = function(app) {
  app.use(logger('dev'));
  app.use(cookieParser());
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(session({
    secret: 'multi vision unicorns', 
    resave:false,
    saveUninitialized: true
  }));
  app.use(passport.initialize());
  app.use(passport.session());
  
  app.use(express.static(rootPath + '/dist/aot'));
  app.use('/node_modules', express.static(rootPath + '/node_modules'));
  app.use('/vendor', express.static(rootPath + '/public/vendor'));
  app.use('/toastr', express.static(rootPath + '/public/toastr'));
  app.use('/styles.css', express.static(rootPath + '/public/styles.css'));
}