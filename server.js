var express = require('express'),
  app = express(),
  port = process.env.PORT || 8080;
var cors = require('cors')
mongoose = require('mongoose'),
  db = require('./models/db'), //created model loading here
  bodyParser = require('body-parser');
urls = '35.196.123.192'  //mongo router
url = '35.227.94.29'
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://' + url + ':27017/Demo');
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
    var model = mongoose.model(obj.model);
    var mydata = new model(obj.data);
    mydata.save(function (err, data) {
      if (err)
        console.log(err)
      console.log(data)
    });
  } else if (obj.method == 'post') {
    var model = mongoose.model(obj.model);
    var q = obj.query;
    delete q.__v ;
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


app.listen(port);
console.log('API server started on: localhost:' + port);
console.log('Mongodb server started on: ' + urls + ':27017');
//    
