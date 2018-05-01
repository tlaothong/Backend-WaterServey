var kafka = require('kafka-node');
var Producer = kafka.Producer
var client = new kafka.KafkaClient({ kafkaHost: "kafka-1:9092,kafka-2:9092,kafka-3:9092,kafka-4:9092", requestTimeout: 2000 });
var producer = new Producer(client)
var mongoose = require('mongoose'),
    Pool = mongoose.model('Pool');

exports.create_a_Pool = function (req, res) {
    da = { "method": "post", "model": "Pool", "data": req.body }
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

exports.read_all_Pool = function (req, res) {
    Pool.find({}, function (err, data) {
        if (err)
            res.send(err);
        res.json(data);
    });
};

exports.read_a_Pool = function (req, res) {
    Pool.find({ _id: req.params.id }, function (err, data) {
        if (err)
            res.send(err);
        res.json(data);
    });
};

exports.update_a_Pool = function (req, res) {
    da = { "method": "put", "model": "Pool", "query": "_id:" + req.params.id, "data": req.body }
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

exports.delete_a_Pool = function (req, res) {
    da = { "method": "del", "model": "Pool", "query": "_id:" + req.params.id, "data": req.body }
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

  producer.on('ready', function () {
    kafkaConnected = true;
    producer.on('error', function (err) { });
});