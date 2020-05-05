require("dotenv").config();
console.log(process.env.COOKIE_SECRECT);
const express =require("express");
const port = process.env.PORT || 3000;
const app = express();

const md5 = require('md5');

const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost/Smart-aquaculture");


const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const userRoute = require('./routes/user.route');
const authRoute = require('./routes/auth.route');


const authMiddleware = require('./middlewares/auth.middleware');

app.engine('pug',require("pug").__express);
app.set('view engine','pug');
app.set('views','./views');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : true}));
app.use(cookieParser(process.env.COOKIE_SECRECT));



app.get('/',(req,res)=>{
	res.render('auth/login.pug');
})




app.post('/display',(req,res,next)=>{

	var sensor = req.body;
	console.log(sensor)

	readed.push(sensor);
	console.log(readed);
	// res.render('display/log',{
	// 	sensors : readed
	// });
	//res.json(sensor);
	res.send("ok");
});


app.use('/user',authMiddleware.checkCookie,userRoute);
app.use('/auth',authRoute);
app.listen(port,()=>{console.log("Server is started on port" + port)});