var express = require('express'),
  app = express(),
  port = process.env.PORT || 8080 ;
var cors = require('cors')
  mongoose = require('mongoose'), 
  db = require('./db'), //created model loading here
  bodyParser = require('body-parser');
  urls = '35.196.123.192'  //mongo router
  url = '35.227.94.29'
  mongoose.Promise = global.Promise;
  mongoose.connect('mongodb://'+url+':27017/Demo'); 
  app.use(cors()); 
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json());
var routes = require('./route'); //importing route
  routes(app);    



app.listen(port);
console.log('API server started on: localhost:'+port);
console.log('Mongodb server started on: ' +urls+':27017');
//    
