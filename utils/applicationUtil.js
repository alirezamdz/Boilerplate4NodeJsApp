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

var app = express();

function createApplication(rootPath, port){

	configureAppSetting(port, rootPath);
	configureAppMiddlewares(rootPath);
	configureRouter();
	configureViewHelpers();
	configureErrorHandlers();

	return app
};

function configureAppSetting(port, rootPath){
	app.set('port', port);
	app.set('view engine', 'jade');
	app.set('views', path.join(rootPath, 'views'));
	app.set('view cache', false);
	app.set('title', 'Boilerplate');
};

function configureAppMiddlewares(rootPath){
	//app.use(favicon(path.join(rootPath, 'public', 'favicon.ico')));
	app.use(logger('dev'));
	app.use(bodyParser.json());
	app.use(cookieParser());
	app.use(stylus.middleware(path.join(rootPath, 'public')));
	app.use(express.static(path.join(rootPath, 'public')));

};

function configureRouter(){
	app.use(routes);
	app.use(users);
}

function configureErrorHandlers(){
	app.use(catch404);
	app.use(errorHandler);
}

function configureViewHelpers(){
	app.locals.greet = viewHelper.greet;
}

function catch404(req, res, next) {
		var err = new Error('Not Found');
		err.status = 404;
		next(err);
}

function errorHandler(err, req, res, next) {
	if (app.get('env') === 'development'){
		res.status(err.status || 500);
		res.render('error', {
			message: err.message,
			error: err
		});
	}else{
		res.status(err.status || 500);
		res.render('error', {
			message: err.message,
			error: {}
		});
	}
}

module.exports = createApplication;