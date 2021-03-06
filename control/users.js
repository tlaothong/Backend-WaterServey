var kafka = require('kafka-node');
var Producer = kafka.Producer
var client = new kafka.KafkaClient({ kafkaHost: "instance-1:9092", requestTimeout: 2000 });
//kafka-1:9092,kafka-2:9092,kafka-3:9092,kafka-4:9092,
var producer = new Producer(client)
var mongoose = require('mongoose'),
  user = mongoose.model('User');

//user
exports.read_all_user = function (req, res) {
  user.find({}, {}, function (err, data) {
    if (err)
      res.send(err);
    res.json(data);
  });
};

exports.create_a_user = function (req, res) {
    da = { "method": "put", "model": "User", "data": req.body }
    j = JSON.stringify(da);
    payloads = [{ topic: 'post-topic', messages: [j], partition: 0 }]
    delays(function(){
      console.log('wait')
    });
    producer.send(payloads, function (err, data) {
      if (err)
        res.send(err);
      res.json(data);
    });
    console.log(req.body.FIRSTNAME)
};

function delays(callback){
  setTimeout(callback  ,1000);
}

exports.read_a_user = function (req, res) {
  user.find({ _id: req.params.id }, function (err, data) {
    if (err)
      res.send(err);
    res.json(data);
  });
};

exports.update_a_user = function (req, res) {
  da = { "method": "post", "model": "User", "query": { USERID: req.body.USERID }, "data": req.body }
  j = JSON.stringify(da);
  payloads = [{ topic: 'post-topic', messages: [j], partition: 0 }]
  producer.send(payloads, function (err, data) {
    if (err)
      res.send(err);
    console.log(err)
    res.json(data);
  });
};

exports.delete_a_user = function (req, res) {
  da = { "method": "del", "model": "User", "query": { USERID: req.query.USERID }, "data": req.body }
  j = JSON.stringify(da);
  payloads = [{ topic: 'post-topic', messages: [j], partition: 0 }]
  producer.send(payloads, function (err, data) {
    if (err)
      res.send(err);
    console.log(err)
    res.json(data);
  });
};

exports.getUserLowerRole = function (req, res) {
  user.find({ TID: { $gt: req.query.TID } }, function (err, data) {
    if (err)
      res.send(err);
    res.json(data);
  });
};

exports.getUserByArea = function (req, res) {
  user.find({ CWT: req.query.CWT }, function (err, data) {
    if (err)
      res.send(err);
    res.json(data);
  });
};

exports.getUserLowerRoleArea = function (req, res) {
  user.find({ CWT: req.query.CWT, TID: { $gt: req.query.TID } }, function (err, data) {
    if (err)
      res.send(err);
    res.json(data);
  });
};

exports.getUserRoleArea = function (req, res) {
  user.find({ CWT: req.query.CWT, TID: req.query.TID }, function (err, data) {
    if (err)
      res.send(err);
    res.json(data);
  });
};

exports.getUserByIDPWD = function (req, res) {
  user.find({ USERID: req.body.USERID, PASSWORD: req.body.PASSWORD ,STATUS:true  }, function (err, data) {
    if (err)
      res.send(err);
    res.json(data);
  });
};

exports.getUserByID = function (req, res) {
  user.find(req.body, function (err, data) {
    if (err)
      res.send(err);
    res.json(data);
  });
};


producer.on('ready', function () {
  kafkaConnected = true;
  producer.on('error', function (err) { });
});
