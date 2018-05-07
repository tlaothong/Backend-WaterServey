var kafka = require('kafka-node');
var Producer = kafka.Producer
var client = new kafka.KafkaClient({ kafkaHost: "kafka-1:9092,kafka-2:9092,kafka-3:9092,kafka-4:9092", requestTimeout: 2000 });
var producer = new Producer(client)
var mongoose = require('mongoose'),
  tablet = mongoose.model('Tablet');
//tablet

exports.create_a_tablet = function (req, res) {
  da = { "method": "post", "model": "Tablet", "data": req.body }
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

exports.read_all_tablet = function (req, res) {
  tablet.find({}, function (err, data) {
    if (err)
      res.send(err);
    res.json(data);
  });
};

exports.read_a_tablet = function (req, res) {
  tablet.find({ tablet_sn_id: req.query.tablet_sn }, function (err, data) {
    if (err)
      res.send(err);
    res.json(data);
  });
};

exports.update_a_tablet = function (req, res) {
  da = { "method": "put", "model": "Tablet", "query": { tablet_sn: req.body.tablet_sn }, "data": req.body }
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

exports.delete_a_tablet = function (req, res) {
  da = { "method": "del", "model": "Tablet", "query": { tablet_sn: req.query.tablet_sn }, "data": req.body }
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

exports.insert_tablet = function (req, res) {
  da = { "method": "post", "model": "Tablet", "data": req.body }
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

exports.update_tablet = function (req, res) {
  tablet.updateOne({ 'tablet_sn': req.params.tablet_sn }, req.body, function (err, data) {
    if (err)
      res.send(err);
    res.json(data);
  });
};

producer.on('ready', function () {
  kafkaConnected = true;
  producer.on('error', function (err) { });
});