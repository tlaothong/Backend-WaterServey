var kafka = require('kafka-node');
var Producer = kafka.Producer
var client = new kafka.KafkaClient({ kafkaHost: "kafka-1:9092,kafka-2:9092,kafka-3:9092,kafka-4:9092", requestTimeout: 2000 });
var producer = new Producer(client)
var mongoose = require('mongoose'),
  progress = mongoose.model('Progress');


//Progress

exports.create_a_progress = function (req, res) {
  da = { "method": "post", "model": "Progress", "data": req.body }
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


exports.read_all_progress = function (req, res) {
  progress.find({}, function (err, data) {
    if (err)
      res.send(err);
    res.json(data);
  });
};

exports.read_a_progress = function (req, res) {
  progress.find({ _id: req.params.id }, function (err, data) {
    if (err)
      res.send(err);
    res.json(data);
  });
};

exports.update_a_progress = function (req, res) {
  da = { "method": "put", "model": "Progress", "query": "_id:" + req.params.id, "data": req.body }
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

exports.delete_a_progress = function (req, res) {
  da = { "method": "del", "model": "Progress", "query": "_id:" + req.params.id, "data": req.body }
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

producer.on('ready', function () {
  kafkaConnected = true;
  producer.on('error', function (err) { });
});