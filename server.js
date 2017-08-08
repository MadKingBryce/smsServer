var express = require('express');   //Adding express to the project
var http = require('http');	//Add transfer protocol 
var bodyParser = require('body-parser');
var app = express();
var router = require('./router');

app.use(bodyParser.json({type: '*/*'}))
router(app); 

var port = process.env.PORT || 3000 
var server = http.createServer(app)
server.listen(port);
console.log('Server listening on ' + port)