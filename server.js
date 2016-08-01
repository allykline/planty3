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



//routes

//listen
app.listen(8080);
console.log("App listening on port 8080")