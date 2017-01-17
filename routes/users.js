const express = require('express');
const router = express.Router();
const usersRequestsHandler = require('../handlers/usersRequestsHandler');

const usersUrl = '/';
const usersTestUrl = '/test';

router.get(usersUrl, usersRequestsHandler.handelUserReq);

router.post(usersUrl, usersRequestsHandler.handelUserPostReq);

router.get(usersTestUrl, usersRequestsHandler.handelUserTestReq);

module.exports = router;
