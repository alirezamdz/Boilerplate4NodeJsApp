var express = require('express');
var router = express.Router();
var usersRequestsHandler = require('../handlers/usersRequestsHandler')

var usersUrl = '/users';
var usersTestUrl = '/users/test';

router.get(usersUrl, usersRequestsHandler.handelUserReq);

router.post(usersUrl, usersRequestsHandler.handelUserPostReq);

router.get(usersTestUrl, usersRequestsHandler.handelUserTestReq);

module.exports = router;
