'use strict';
const express = require('express');
const router = express.Router();
const requestsHandler = require('../handlers/requestsHandler');

let homeUrl = '/';
let testUrl = '/test';

router.get(homeUrl, requestsHandler.handelHomeReq);

router.post(homeUrl, requestsHandler.handelHomePostReq);

router.get(testUrl, requestsHandler.handelTestReq);

module.exports = router;
