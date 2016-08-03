var express = require('express');
var app = express();
var router = express.Router();
var dotenv = require('dotenv').config();
var morgan = require('body-parser');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var multer = require('multer');


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

//



//routes
//create your route
//access the data from the request body
// console.log the data
//send back a different piece of data (create another object literal and jsonify it)
app.post('/endpoint', function(req, res){

	// console.log('body: ' + JSON.stringify(req.body));

	//call watson logic here
	var params = {
		images_file: fs.createReadStream('./public/images/' + req.body.image)	
	};


	visual_recognition.classify(params, function(err, response) {
		if (err)
			console.log(err);
		else 
			console.log(response)
			var success = JSON.stringify(response, null, 2);
			res.send(success);
 
	});


	
});


//uploading images
var upload = multer({
	dest: __dirname + '../public/images',
})

app.post('/upload', upload.single('image'), function(req,res){
	
	console.log(req.file.destination)
	/** When using the "single"
      data come in "req.file" regardless of the attribute "name". **/
    var tmp_path = req.file.path;

  /** The original name of the uploaded file
      stored in the variable "originalname". **/
    var target_path = './public/images/' + req.file.originalname;
    var json_image_name = JSON.stringify(req.file.originalname)

  /** A better way to copy the uploaded file. **/
    var src = fs.createReadStream(tmp_path);
    var dest = fs.createWriteStream(target_path);
    src.pipe(dest);
    src.on('end', function() { console.log('complete'); res.send(json_image_name) });
    src.on('error', function(err) { console.log('error'); });
})

//second iteration
// send that data through to watson params and visual recognition
// if success through watson, send that data in response body back to the front


//listen
app.listen(8080);
console.log("App listening on port 8080")