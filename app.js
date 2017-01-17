'use strict';
const serverUtil = require('./utils/serverUtil');
const errorHandler = require('./handlers/errorHandler');
const port = serverUtil.port;
const debug = require('debug')();

serverUtil.createServer(server => {
  
  server.listen(port);
  
  server.on('error', errorHandler.onError);
  
  server.on('listening', () => {
    var addr = server.address();
    var bind = typeof addr === 'string'
      ? `pipe ${addr}`
      : `port ${addr.port}`
    debug(`Listening on ${bind}`);
    console.log(`Application is running on port: ${port}`);
  });
  
});