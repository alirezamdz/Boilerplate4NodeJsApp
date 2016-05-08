function handelUserReq(req, res, next){
	res.render('users', {
		title: 'Users',
		name: 'John Doe',
		email: 'john.doe@example.com'

	});
}

function handelUserPostReq(req, res, next){
	res.send(`This is a text response to the ${req.method} request on url: ${req.url}`);
}

function handelUserTestReq(req, res, next){
	res.send(`This is a text response to the ${req.method} request on url: ${req.url}`);
}

module.exports = {
	handelUserReq: handelUserReq,
	handelUserPostReq: handelUserPostReq,
	handelUserTestReq: handelUserTestReq
}