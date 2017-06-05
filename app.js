var express = require('express');
var app = express();
var router = express.Router();
var path = __dirname + '/views/';
var PORT = 9000;

var server = app.listen(PORT, listening);

function listening(){
	console.log("Server started, listening on port 9000... \n");
}

router.use(function (req,res,next) {
  console.log("/" + req.method);
  next();
});

router.get("/",function(req,res){
  res.sendFile(path + "index.html");
});

router.get("/about",function(req,res){
  res.sendFile(path + "about.html");
});

router.get("/contact",function(req,res){
  res.sendFile(path + "contact.html");
});

app.use("/",router);