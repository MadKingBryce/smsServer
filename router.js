var sms = require('./sms')
var cors = require('cors')
var corsOptions = {
  origin: 'http://localhost:4200',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204 
}

module.exports = function(app){ //sets routes
	console.log("Exports?")
	app.get('/',  function(req, res){ //Adding the requireAuth means that we need a token in order for shit to work. 
		res.send("Hello")
	}) 
	app.post('/sms', cors(corsOptions), function(req, res){
		console.log(req)
		sms.send(req.body, function(err){
			if(err){
				res.send(err)
			} else {
				res.send("Success!!!")
			} 

		})

	})
}