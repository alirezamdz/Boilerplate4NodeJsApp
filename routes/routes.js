'use strict';
const express = require('express');
const router = express.Router();
const requestsHandler = require('../handlers/requestsHandler');

const homeUrl = '/';
const loginUrl = /^\/login$/;
const testUrl = '/test';

router.get(homeUrl, requestsHandler.handleHomeReq);

router.post(homeUrl, requestsHandler.handleHomePostReq);

router.get(testUrl, requestsHandler.handleTestReq);

router.get(loginUrl, requestsHandler.handleLoginPage);

module.exports = router;
