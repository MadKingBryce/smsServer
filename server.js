var express = require('express');   //Adding express to the project
var http = require('http');	//Add transfer protocol 
var bodyParser = require('body-parser');
var app = express();
var router = require('./router');
var cors = require('cors')
app.use(bodyParser.json({type: '*/*'}))

router(app); 
app.use(cors())

var corsOptions = {
  origin: 'http://localhost:4200',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204 
}



var port = process.env.PORT || 3000 
var server = http.createServer(app)
server.listen(port);
console.log('Server listening on ' + port)