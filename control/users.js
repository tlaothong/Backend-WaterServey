var kafka = require('kafka-node');
var Producer = kafka.Producer
var client = new kafka.KafkaClient({ kafkaHost: "kafka-1:9092,kafka-2:9092,kafka-3:9092,kafka-4:9092", requestTimeout: 2000 });
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
  user.find({ CWT: req.body.CWT, TID:req.body.TID}, function (err, data) {
    console.log(data)
    console.log(req.body.CWT)
    console.log(req.body.TID)
    if (err)
      res.sent(err);
    ids = [];
    for (i = 0; i < data.length; i++) {
      ids.push(Number(data[i]['USERID']));
    }
    body = req.body;
    console.log(ids)
    if (ids.length == 0)
      ids.push(Number(body.CWT + body.TID + '0000'))
    
    id = ids.sort().reverse()[0] + 1 ;
    body.USERID = String(id) ;
    da = { "method": "put", "model": "User", "data": body }
    j = JSON.stringify(da);
    
    payloads = [{ topic: 'post-topic', messages: [j], partition: 0 }]

  });
};


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
    console.log(payloads);
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
    console.log(payloads);
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
  user.find({ USERID: req.body.USERID, PASSWORD: req.body.PASSWORD }, function (err, data) {
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

exports.insert_user = function (req, res) {
  da = { "method": "post", "model": "User", "data": req.body }
  j = JSON.stringify(da);
  payloads = [{ topic: 'post-topic', messages: [j], partition: 0 }]
  producer.send(payloads, function (err, data) {
    if (err)
      res.send(err);
    console.log(err)
    res.json(data);
    console.log(payloads);
  });
};

exports.update_user = function (req, res) {
  user.updateOne({ 'USERID': req.params.USERID }, req.body, function (err, data) {
    if (err)
      res.send(err);
    res.json(data);
  });
};

exports.delete_user = function (req, res) {
  user.deleteOne({ 'USERID': req.params.USERID }, function (err, data) {
    if (err)
      res.send(err);
    res.json(data);
  });
};

exports.get_all_user = function (req, res) {
  user.find({}, function (err, data) {
    if (err)
      res.send(err);
    res.json(data);
  });
};

producer.on('ready', function () {
  kafkaConnected = true;
  producer.on('error', function (err) { });
});