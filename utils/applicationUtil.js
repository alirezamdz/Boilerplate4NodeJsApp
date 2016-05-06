var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var stylus = require('stylus');

var routes = require('../routes/routes');
var users = require('../routes/users');
var viewHelper = require('../helper/viewHelper');

function createApp(rootPath, port){

  var app = express();

  configureAppSetting(app, port, rootPath);
  configureAppMiddlewares(app, rootPath);
  configureRouter(app);
  configureViewHelpers(app);


  // catch 404 and forward to error handler
  app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
  });


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
  };

  // production error handler
  // no stacktraces leaked to user
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: {}
    });
  });

  return app
};

function configureAppSetting(app, port, rootPath){
  app.set('port', port);
  app.set('view engine', 'jade');
  app.set('views', path.join(rootPath, 'views'));
  app.set('view cache', false);
  app.set('title', 'Boilerplate')
};

function configureAppMiddlewares(app, rootPath){
  //app.use(favicon(path.join(rootPath, 'public', 'favicon.ico')));
  app.use(logger('dev'));
  app.use(bodyParser.json());
  app.use(cookieParser());
  app.use(stylus.middleware(path.join(rootPath, 'public')));
  app.use(express.static(path.join(rootPath, 'public')));

};

function configureRouter(app){
  app.use(routes);
}

function configureViewHelpers(app){
  app.locals.greet = viewHelper.greet;
}

module.exports = createApp;