var rootPath = __dirname;
var serverUtil = require('./utils/serverUtil');
var errorHandler = require('./handlers/errorHandler');
var port = serverUtil.port;
var debug = require('debug')();

serverUtil.createServer(rootPath, function(server){

  server.listen(port);
  server.on('error', errorHandler.onError);
  server.on('listening', function(){
  	var addr = server.address();
	  var bind = typeof addr === 'string'
	    ? `pipe ${addr}`
	    : `port ${addr.port}`
	  debug(`Listening on ${bind}`);
  	console.log(`Application is running on port: ${serverUtil.port}`);
	});

});