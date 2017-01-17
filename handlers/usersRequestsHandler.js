'use strict';

const handelUserReq = (req, res, next) => {
  res.render('users', {
    title: 'Users',
    name: 'John Doe',
    email: 'john.doe@example.com'

  });
};

const handelUserPostReq = (req, res, next) => {
  res.send(`This is a text response to the ${req.method} request on url: /users${req.url}`);
};

const handelUserTestReq = (req, res, next) => {
  res.send(`This is a text response to the ${req.method} request on url: /users${req.url}`);
};

module.exports = {
  handelUserReq,
  handelUserPostReq,
  handelUserTestReq
};