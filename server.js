var express = require('express'),
  app = express(),
  port = process.env.PORT || 8080 ;
  mongoose = require('mongoose'), 
  db = require('./db'), //created model loading here
  bodyParser = require('body-parser');
  urls = '35.196.53.77'
  mongoose.Promise = global.Promise;
  mongoose.connect('mongodb://'+urls+':27017/test'); 

  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json());
  
  var routes = require('./route'); //importing route
  routes(app);    



app.listen(port);

console.log('API server started on: ' +urls+':'+port);
