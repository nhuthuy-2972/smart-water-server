
module.exports.postLogin = (req,res,next)=>{
	var errors = [];
	if(!req.body.username)
	{
		errors.push('User name is required');
	}

	if(!req.body.password)
	{
		errors.push('Password is required');	
	}

	if(errors.length)
	{
		res.render("auth/login",{errors:errors,username : req.body.username});
		return;
	}

	next();
};
	