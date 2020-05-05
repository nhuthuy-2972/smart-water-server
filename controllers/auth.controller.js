const User = require("../models/user.model");
const md5 = require("md5");

module.exports.loginPage = (req,res)=>{res.render('auth/login');}

module.exports.logout = (req,res)=>
{
	res.clearCookie('userId');
	res.redirect('/');
}

module.exports.checkLogin = async (req,res)  =>{

	var _user = await User.findOne({user_name : req.body.username });

	if(!_user) {
		res.render("auth/login",{errors : ["User is not exits"]});
		return;}

	var pw = md5(req.body.password);

	if(pw !== _user.password)
	{
		res.render("auth/login",{errors : ["Wrong password"]});
		return;
	}

	res.cookie('userId',_user._id,{signed : true});
	res.redirect("/user");
}