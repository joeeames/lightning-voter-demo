var express = require('express'),
    logger = require('morgan'),
    bodyParser = require('body-parser'),
    cookieParser = require('cookie-parser'),
    path = require('path');

var rootPath = path.normalize(__dirname + '/../');

module.exports = function(app) {

  app.set('views', rootPath + '/server/views');
  app.set('view engine', 'ejs');
  app.use(logger('dev'));
  app.use(cookieParser());
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(express.static(rootPath + '/public'));
}