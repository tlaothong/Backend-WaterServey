var express = require('express'),
  app = express(),
port = process.env.PORT || 8080 
var cors = require('cors')
mongoose = require('mongoose'),
  db = require('./models/db') //created model loading here
var bodyParser = require('body-parser')  
bodyParser = require('body-parser');
var fs = require('fs')
urls = 'nso-db'
url = '10.142.0.2'
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://' + url + ':27017/Demo');
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({limit: '50mb'}));
var routes = require('./route'); //importing route
routes(app);

var kafka = require('kafka-node');

app.listen(port);
console.log('API server started on: localhost:' + port);
console.log('Mongodb server started on: ' + urls + ':27017');
