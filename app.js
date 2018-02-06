
var express = require('express');
var app = express();
var path = require('path');
var mongoose = require('mongoose');
var mongoDB = 'mongodb://35.192.216.63:27017';

mongoose.Promise = global.Promise; 
mongoose.connect(mongoDB);
var db = mongoose.connection;

function getHomePage(req, res) {
    //res.sendFile(path.join(__dirname +'/index.html'));
    //res.send('<h1>This is homepage na ja.</h1>');
 
}

function getAboutPage(req, res) {
    res.send('<h1>This is about page.</h1>');
}

function getNewPage(req,res) {
    //res.send('<h1>This is new page.</h1>');
    ac.find({}, callback);
	res.json(callback);
}


app.get('/', getHomePage);
app.get('/about', getAboutPage);
app.get('/new',  getNewPage);

var server = app.listen(5555, function() {
    console.log('Express is running on port 5555.');
});