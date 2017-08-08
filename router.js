var sms = require('./sms')

module.exports = function(app){ //sets routes
	console.log("Exports?")
	app.get('/',  function(req, res){ //Adding the requireAuth means that we need a token in order for shit to work. 
		res.send("Hello")
	}) 
	app.post('/sms', function(req, res){
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