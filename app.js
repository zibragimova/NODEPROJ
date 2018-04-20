/**
 * Module dependencies.
 * This is the main file for Node.js
 */
//This is my express framework
var express = require('express');

//this is to handle the http request
var  http = require('http');

//This is to deal with path
var  path = require('path');
var bodyParser = require('body-parser');
//instantiating the express framework
var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
//To take input from the client
//app.use(express.bodyParser());
//#######################
//This means your data can come from client  in the request body as html form data
app.use(bodyParser.urlencoded({extended: false}));
//to read json data from request body 
app.use(express.json());

//ProObject -- >> holding just definition
// ./ ->>> in current directory
var ProfileDef=require('./model/profile'); //important  - >>>do not give extension
app.get("/profiles",function(req,res) {
		var pofile1=new ProfileDef("Nagendra kumar","test12","nagen@gmail.com","Male","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvlRriLVd11QaMe0suGWewi2AjP4X9tI55All09seJrBQqcKTEig");
		var pofile2=new ProfileDef("Ameya kumar","tes6t12","ameya@gmail.com","Male","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvlRriLVd11QaMe0suGWewi2AjP4X9tI55All09seJrBQqcKTEig");
		var pofile3=new ProfileDef("Rocker","te345st12","rocker@gmail.com","Male","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRU1gJrTqXMz_DO0hDOyo2cMMJ76hmIfrTMA5mCalphghLhxkTj");
		var pofile4=new ProfileDef("Jacker","te5st12","jacker@gmail.com","Male","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvlRriLVd11QaMe0suGWewi2AjP4X9tI55All09seJrBQqcKTEig");
		var pofile5=new ProfileDef("Reeta","tes67t12","reeta@gmail.com","Female","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMqFbOPufHnWG7kvWHZysmcqJR3PJHgmYPioMlMJaJd9mjQB8J");
		 //
		 var profiles=[];
		 profiles.push(pofile1);
		 profiles.push(pofile2);
		 profiles.push(pofile3);
		 profiles.push(pofile4);
		 profiles.push(pofile5);
		 res.json(profiles);
});

app.get("/fact",function(req,res) {
	var num = req.query.num;
	//req.getParameter("num");
	var sum=1;
	for(var x=2;x<=num;x++){
		sum=sum*x;
	}
	res.json({status:"success",result:"Factorial of "+num+" is "+sum});
});

app.get("/frog",function(req,res) {
    //creating JavaScript object in literal way
	var frog={name:"jacker",color:"green",price:34,location:"Fremont"};
	res.json(frog);  //res.json(frog);	 ->> first of all frog JavaScript is converted into JSON format and finally it is written into the response	
});

app.get("/greeting",function(req,res) {
	res.send("Hey!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
});

app.get("/cool",function(req,res) {
	console.log("path ="+__dirname);
	//here we are forwarding 
	res.sendFile(__dirname+'/public/index.htm');
});


///#####################
//__dirname
app.use(express.static(path.join(__dirname, 'public')));

//Creating http server on port number 3000
http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
  console.log("_@_@_@_@_Yeap my server is ready to handle to http request !!!!!!!!!!!!!!!!!!!!!!!");
  console.log("_@_@_@_@_Yeap my server is ready to handle to http request !!!!!!!!!!!!!!!!!!!!!!!");
  console.log("_@_@_@_@_Yeap my server is ready to handle to http request !!!!!!!!!!!!!!!!!!!!!!!");
});
