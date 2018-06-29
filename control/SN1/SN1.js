var kafka = require('kafka-node');
var Producer = kafka.Producer
var client = new kafka.KafkaClient({ kafkaHost: "kafka-1:9092,kafka-2:9092,kafka-3:9092,kafka-4:9092,instance-1:9092", requestTimeout: 2000 });
var producer = new Producer(client)
var mongoose = require('mongoose'),
  SN1 = mongoose.model('SN1');
//SN1

exports.create_a_SN1 = function (req, res) {
  fiid = req.body.SN1P1.FI_ID; 
  SN1.find({'SN1_ID':req.body.SN1_ID,'SN1P1.FI_ID':fiid },function(err,result){
    if (err)
	    res.sent(err)
    hasdata = result.length
    if (hasdata){
      da = { "method": "post", "model": "SN1", "query": { SN1_ID: req.body.SN1_ID ,'SN1P1.FI_ID':fiid}, "data": req.body }
    }else {
      da = { "method": "put", "model": "SN1", "data": req.body }
    }
  j = JSON.stringify(da);
  payloads = [{ topic: 'post-topic', messages: [j], partition: 0 }]
  producer.send(payloads, function (err, data) {
    if (err)
      res.send(err);
    res.json(data);
    console.log(payloads);
  });
 });
};


exports.read_all_SN1 = function (req, res) {
  SN1.find({}, function (err, data) {
    if (err)
      res.send(err);
    res.json(data);
  });
};

exports.read_a_SN1 = function (req, res) {
  SN1.find({ SN1_ID: req.query.SN1_ID }, function (err, data) {
    if (err)
      res.send(err);
    res.json(data);
  });
};

exports.update_a_SN1 = function (req, res) {
  fiid = req.body.SN1P1.FI_ID;
  da = { "method": "post", "model": "SN1", "query": { SN1_ID: req.body.SN1_ID ,'SN1P1.FI_ID':fiid}, "data": req.body }
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

exports.delete_a_SN1 = function (req, res) {
  fiid = req.body.SN1P1.FI_ID;
  da = { "method": "del", "model": "SN1", "query": { SN1_ID: req.query.SN1_ID,'SN1P1.FI_ID':fiid }, "data": req.body }
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


exports.getSN1ByFS = function (req, res) {
  SN1.find({ 'SN1P1.FS_ID': req.query.FS_ID }, function (err, data) {
    if (err)
      res.send(err);
    res.json(data);
  });
};


exports.getSN1ByFI = function (req, res) {
  SN1.find({ 'SN1P1.FI_ID': req.query.FI_ID }, function (err, data) {
    if (err)
      res.send(err);
    res.json(data);
  });
};

exports.getSN1ByCWT = function (req, res) {
  SN1.find({ 'SN1P1.CWT': req.query.CWT }, function (err, data) {
    if (err)
      res.send(err);
    res.json(data);
  });
};

exports.getSN1EditStatus = function (req, res) {
  fiid = req.query.FI_ID
  SN1.find({ 'status_approve': 1, 'SN1P1.FI_ID': fiid, 'status_data': { '$lt': 2 } }, function (err, data) {
    if (err)
      res.send(err);
    res.json(data);
  });
};

producer.on('ready', function () {
  kafkaConnected = true;
  producer.on('error', function (err) { });
});

