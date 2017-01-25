'use strict';
const express = require('express');
const appRoot = require('app-root-path').path;
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const stylus = require('stylus');
const config = require('config');
const loadContentData = require('./loadContentData');

const contentRoutes = require('../middlewares/handleRoutesByContentData');
const routes = require('../routes/routes');
const users = require('../routes/users');
const viewHelper = require('../helper/viewHelper');

const app = express();

const createApplication = (port) => {
  
  configureAppSetting(port);
  loadContentData.cacheData();
  configureAppMiddlewares();
  configureRouter();
  configureViewHelpers();
  configureErrorHandlers();

  return app
};

const configureAppSetting = port => {
  app.set('port', port);
  app.set('view engine', 'jade');
  app.set('views', path.join(appRoot, 'views'));
  app.set('view cache', false);
  app.set('title', config.get('application').title);
};

const configureAppMiddlewares = () => {
  //app.use(favicon(path.join(appRoot, 'public', 'favicon.ico')));
  app.use(logger('dev'));
  app.use(bodyParser.json());
  app.use(cookieParser());
  app.use(stylus.middleware(path.join(appRoot, 'public')));
  app.use(express.static(path.join(appRoot, 'public')));
};

const configureRouter = () => {
  app.use(contentRoutes);
  app.use("/", routes);
  app.use("/users", users);
};

const configureErrorHandlers = () => {
  app.use(catch404);
  app.use(errorHandler);
};

const configureViewHelpers = () => {
  for (const helper in viewHelper) {
    app.locals[helper] = viewHelper[helper];
  }
};

const catch404 = (req, res, next) => {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
};

const errorHandler = (err, req, res, next) => {
  if (app.get('env') === 'development') {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  } else {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: {status: err.status}
    });
  }
};

module.exports = createApplication;