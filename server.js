var express = require('express');
var app = express();
var dotenv = require('dotenv').config();
var morgan = require('body-parser');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');


//node modules
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({'extended': 'true'}))
app.use(bodyParser.json());
app.use(bodyParser.json({type: 'application/vnd.api+json'}))
app.use(methodOverride());
app.use(express.static(__dirname + '/public')); //sending all files to the front

//watson
var watson = require('watson-developer-cloud');
var fs = require('fs');

var visual_recognition = watson.visual_recognition({
	api_key: process.env.API_KEY,
	version: 'v3',
	version_date: '2016-05-19'
});

var params = {
	images_file: fs.createReadStream('./public/images/lily.jpg')
};

visual_recognition.classify(params, function(err, res) {
	if (err)
		console.log(err);
	else 
		console.log(JSON.stringify(res, null, 2));
});


//routes

//listen
app.listen(8080);
console.log("App listening on port 8080")