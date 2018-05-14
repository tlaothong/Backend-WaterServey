var express = require('express'),
  app = express(),
  port = process.env.PORT || 8080;
var cors = require('cors')
mongoose = require('mongoose'),
db = require('./models/db')
const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
const url = 'mongodb://35.227.94.29:27017';
const dbName = 'Demo';


bodyParser = require('body-parser');
urls = '35.196.123.192'  //mongo router
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
var routes = require('./route'); //importing route
routes(app);

var kafka = require('kafka-node');
var ConsumerGroup = kafka.ConsumerGroup;
var options = {
	kafkaHost:"kafka-1:9092,kafka-2:9092,kafka-3:9092,kafka-4:9092",
	groupId: 'ExampleTestGroup',
  	autoCommit:false,
	sessionTimeout: 15000,
  	protocol: ['roundrobin'],
  	asyncPush: false,
  	id: 'consumer1',
   fromOffset: 'latest'
}

var consumerGroup = new ConsumerGroup(options, 'post-topic');

consumerGroup.on('message', function (message) {
  obj = JSON.parse(message.value)
  console.log(obj.method)
  if (obj.method == 'put') {
    //var model = mongoose.model(obj.model);
    //var mydata = new model(obj.data);
    db.collection(obj.model).save(obj.data ,function (err, data) {
      if (err)
        console.log(err)
      console.log(data)
    });
  } else if (obj.method == 'post') {
    var model = mongoose.model(obj.model);
    var q = obj.query;
    delete obj.data.__v ;
    model.findOneAndUpdate(q, obj.data, { upsert: true, new: true }, function (err, data) {
      if (err)
        console.log(err)
      console.log(data)
    });
  } else if (obj.method == 'del') {
    var model = mongoose.model(obj.model);
    var q = obj.query;
    model.deleteOne(q, function (err, data) {
      if (err)
        console.log(err)
      console.log(data)
    });
  }
});

MongoClient.connect(url, function(err, client) {
  assert.equal(null, err);
  console.log("Connected successfully to server");

  const db = client.db(dbName);
  app.listen(port);
  console.log('API server started on: localhost:' + port);
  console.log('Mongodb server started on: ' + urls + ':27017');
  client.close();
});


//    
