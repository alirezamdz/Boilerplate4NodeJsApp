var db = require('../db/db');

function handelHomeReq(req, res, next){
	res.render('index', {
		title: 'home',
		items: db
	});
}

function handelHomePostReq(req, res, next){
	res.send("this is post response");
}

function handelTestReq(req, res, next){
	res.send("A response from test handler!");
}

module.exports = {
	handelHomeReq: handelHomeReq,
	handelHomePostReq: handelHomePostReq,
	handelTestReq: handelTestReq
}