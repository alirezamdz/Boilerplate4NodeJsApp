'use strict';
const http = require('http');
const app = require('./applicationUtil');
const serverConf = require('config').get('server');

const normalizePort = val => {
  let port = parseInt(val, 10);
  
  if (isNaN(port)) {
    // named pipe
    return val
  }
  
  if (port >= 0) {
    // port number
    return port
  }
  console.log(port)
  
  return false
};

const port = normalizePort(process.env.PORT || serverConf.port);

const createServer = callback => {
  let server = http.createServer(app(port));
  callback(server);
};

module.exports = {
  createServer,
  port
};