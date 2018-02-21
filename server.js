var express = require('express'),
  app = express(),
  port = process.env.PORT || 8080 ;
  mongoose = require('mongoose'), 
  db = require('./db'), //created model loading here
  bodyParser = require('body-parser');

  mongoose.Promise = global.Promise;
  mongoose.connect('mongodb://35.196.46.242:27017/test'); 

  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json());
  
  var routes = require('./route'); //importing route
  routes(app);    



app.listen(port);

console.log('API server started on: ' + port);
