const express =require("express");
const port = process.env.PORT || 3000;
const app = express();
const bodyParser = require('body-parser');
var readed = [];

app.engine('pug',require("pug").__express);
app.set('view engine','pug');
app.set('views','./views');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : true}));

app.get('/',(req,res)=>{
	res.render('index.pug');
})


app.get('/send',(req,res)=>{
	res.render('sendform.pug');
});

app.get('/display/log',(req,res)=>{
	res.render('display/log',{sensors: readed});
});

app.post('/display',(req,res,next)=>{

	var sensor = req.body;
	console.log(sensor)
	readed.push(sensor);
	console.log(readed);
	res.render('display/log',{
		sensors : readed
	});
	res.json(sensor);
	res.send("ok");
});

app.listen(port,()=>{console.log("Server is started")});