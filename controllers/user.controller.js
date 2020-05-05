const User = require("../models/user.model");
const md5 = require("md5");



module.exports.index = (req,res)=>
{
	res.render("user/index");
}

// module.exports.pondManager = (req,res)=>
// {

// }

// module.exports.warningManager = (req,res)=>
// {

//}