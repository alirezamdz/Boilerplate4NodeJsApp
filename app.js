var rootPath = __dirname;
var serverUtil = require('./utils/serverUtil');

serverUtil.createServer(rootPath, function(server){

  server.listen(serverUtil.port);
  console.log(`Application is running on port: ${serverUtil.port}`);

});