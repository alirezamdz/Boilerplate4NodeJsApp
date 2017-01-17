'use strict';

const db = require('../db/db');

const handelHomeReq = (req, res, next) => {
  res.render('index', {
    title: 'home',
    items: db
  });
};

const handelHomePostReq = (req, res, next) => {
  res.send("this is post response");
};

const handelTestReq = (req, res, next) => {
  res.send("A response from test handler!");
};

module.exports = {
  handelHomeReq,
  handelHomePostReq,
  handelTestReq
};