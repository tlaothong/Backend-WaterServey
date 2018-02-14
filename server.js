var express = require('express'),
  app = express(),
  port = process.env.PORT || 5555;
  mongoose = require('mongoose'),
  Account = require('./db'), //created model loading here
  bodyParser = require('body-parser');

  mongoose.Promise = global.Promise;
  mongoose.connect('mongodb://104.198.131.85:27017/test'); 

  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json());
  
  var routes = require('./route'); //importing route
  routes(app);    



app.listen(port);

console.log('todo list RESTful API server started on: ' + port);
