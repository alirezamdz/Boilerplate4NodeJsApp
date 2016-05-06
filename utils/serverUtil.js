var http = require('http');
var app = require('./applicationUtil');

var port = normalizePort(process.env.PORT || '4001');

function createServer(rootPath, callback){
	
	var server = http.createServer(app(rootPath, port));
  
	callback(server);

}

function normalizePort(val) {
  var port = parseInt(val, 10);

  if (isNaN(port)) {
    // named pipe
    return val;
  }

  if (port >= 0) {
    // port number
    return port;
  }

  return false;
}

module.exports = {
	createServer: createServer,
	port: port
}


