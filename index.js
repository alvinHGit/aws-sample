var express = require('express');
var app = express();

var server = app.listen(9000, listening);

function listening(){
	console.log("Server started, listening on port 9000... \n");
}

app.get('/', homePageRequest);

function homePageRequest(req, resp){
	resp.send("Hello World!");
}
