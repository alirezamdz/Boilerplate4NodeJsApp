var express = require('express');
var router = express.Router();
var requestsHandler = require('../handlers/requestsHandler')

var homeUrl = '/';
var testUrl = '/test';


router.get(homeUrl, requestsHandler.handelHomeReq);

router.post(homeUrl, requestsHandler.handelHomePostReq);

router.get(testUrl, requestsHandler.handelTestReq);


module.exports = router;
