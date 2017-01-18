'use strict';

const db = require('../db/db');

const handleHomeReq = (req, res, next) => {
  res.render('index', {
    title: 'home',
    items: db
  });
};

const handleHomePostReq = (req, res, next) => {
  res.send("this is post response");
};

const handleTestReq = (req, res, next) => {
  res.send("A response from test handler!");
};

const handleLoginPage = (req, res, next) => {
  res.render('auth/login');
};

module.exports = {
  handleHomeReq,
  handleHomePostReq,
  handleTestReq,
  handleLoginPage
};