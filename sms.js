const accountSid = 'AC59c0df042c18112df3a218b70ef88bfa';
const authToken = '4077fe59c42e5c28ce6408f4b6d4b618';



//require the Twilio module and create a REST client
const client = require('twilio')(accountSid, authToken);
let body = "This" + " is a test message";

exports.send = function(message, callback){
	console.log(message)
	client.messages.create({
	    to: "+13174472968",
	    from: "+13173336853 ",
	    body: message.text,
	}, function(err, message) {
	   callback(err)
	});
}