var kafka = require('kafka-node');
var Producer = kafka.Producer
var client = new kafka.KafkaClient({ kafkaHost: "kafka-1:9092,kafka-2:9092,kafka-3:9092,kafka-4:9092", requestTimeout: 2000 });
var producer = new Producer(client)
var mongoose = require('mongoose'),
    SN2_2 = mongoose.model('SN2_2');

exports.create_a_SN2_2 = function (req, res) {
    da = { "method": "put", "model": "SN2_2", "data": req.body }
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
exports.read_all_SN2_2 = function (req, res) {
    SN2_2.find({}, function (err, data) {
        if (err)
            res.send(err);
        res.json(data);
    });
};

exports.read_a_SN2_2 = function (req, res) {
    SN2_2.find({ SN2_2_ID: req.query.SN2_2_ID }, function (err, data) {
        if (err)
            res.send(err);
        res.json(data);
    });
};

exports.update_a_SN2_2 = function (req, res) {
    da = { "method": "post", "model": "SN2_2", "query": { SN2_2_ID: req.body.SN2_2_ID }, "data": req.body }
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

exports.delete_a_SN2_2 = function (req, res) {
    da = { "method": "del", "model": "SN2_2", "query": { SN2_2_ID: req.query.SN2_2_ID }, "data": req.body }
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

exports.getsn22ByAreaId = function (req, res) {
    SN2_2.find({ 'SN2_2_ID': { "$regex": "^" + req.query.CWT } }, function (err, data) {
        if (err)
            res.send(err);
        res.json(data);
    });
};

exports.getsn22ByFS = function (req, res) {
    SN2_2.find({ 'B0.FS_ID': req.query.FS_ID }, function (err, data) {
        if (err)
            res.send(err);
        res.json(data);
    });
};

exports.getsn22ByFI = function (req, res) {
    SN2_2.find({ 'B0.FI_ID': req.query.FI_ID }, function (err, data) {
        if (err)
            res.send(err);
        res.json(data);
    });
};

exports.getsn22ByCWT = function (req, res) {
    SN2_2.find({ 'B0.CWT': req.query.CWT }, function (err, data) {
        if (err)
            res.send(err);
        res.json(data);
    });
};

producer.on('ready', function () {
    kafkaConnected = true;
    producer.on('error', function (err) { });
});