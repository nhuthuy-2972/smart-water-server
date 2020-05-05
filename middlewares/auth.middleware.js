
const User = require('../models/user.model');

module.exports.checkCookie = async (req,res,next)=>
{
	var cookie = req.signedCookies;
	console.log(cookie);
	if(!cookie.userId)
	{
		res.redirect('/auth/login');
		return;
	}

	var user = await User.find({_id:cookie.userId});
	if(!user)
	{
		res.redirect('/auth/login');
		return;	
	}
	res.locals.currentuser = user;
	next();
};