var path = require('path')
var kafka = require('kafka-node');
var Producer = kafka.Producer
var client = new  kafka.KafkaClient({kafkaHost:"kafka-1:9092,kafka-2:9092,kafka-3:9092,kafka-4:9092",requestTimeout:2000});
//var client = new kafka.Client({connectionString:'35.231.191.95:2181/',clientID:'3'})
var producer = new Producer(client)
var mongoose = require('mongoose'),
user              = mongoose.model('User'),
area            = mongoose.model('Area'),
tablet          = mongoose.model('Tablet'),
progress        = mongoose.model('Progress'),
SN1             = mongoose.model('SN1'),
SN1P1           = mongoose.model('SN1P1'),
SN1P2           = mongoose.model('SN1P2'),
SN1P3           = mongoose.model('SN1P3'),
SN2_1           = mongoose.model('SN2_1'),
SN2_1P1         = mongoose.model('SN2_1P1'),
SN2_1P2         = mongoose.model('SN2_1P2'),
SN2_1P2_1       = mongoose.model('SN2_1P2_1'),
SN2_1P2_2       = mongoose.model('SN2_1P2_2'),
SN2_1P2_3       = mongoose.model('SN2_1P2_3'),
SN2_1P2_4       = mongoose.model('SN2_1P2_4'),
SN2_1P2_5       = mongoose.model('SN2_1P2_5'),
SN2_1P2_6       = mongoose.model('SN2_1P2_6'),
SN2_1P2_7       = mongoose.model('SN2_1P2_7'),
SN2_1P2_9_1     = mongoose.model('SN2_1P2_9_1'),
SN2_1P2_9_3     = mongoose.model('SN2_1P2_9_3'),
SN2_1P2_9_4     = mongoose.model('SN2_1P2_9_4'),
SN2_1P3         = mongoose.model('SN2_1P3'),
SN2_1P4         = mongoose.model('SN2_1P4'),
SN2_1P5         = mongoose.model('SN2_1P5'),
SN2_1P5_1       = mongoose.model('SN2_1P5_1'),
SN2_1P5_2       = mongoose.model('SN2_1P5_2'),
SN2_1P5_3       = mongoose.model('SN2_1P5_3'),
SN2_1P5_4       = mongoose.model('SN2_1P5_4'),
SN2_1P5_5       = mongoose.model('SN2_1P5_5'),
SN2_1P5_6       = mongoose.model('SN2_1P5_6'),
SN2_1P5_7       = mongoose.model('SN2_1P5_7'),
SN2_1P6         = mongoose.model('SN2_1P6'),
Pool            = mongoose.model('Pool'),
Pump            = mongoose.model('Pump');
SN2_2P0         = mongoose.model('SN2_2P0');
SN2_2           = mongoose.model('SN2_2');
SN2_2P1_3       = mongoose.model('SN2_2P1_3');
SN2_2P1_5       = mongoose.model('SN2_2P1_5');
SN2_2P2         = mongoose.model('SN2_2P2');

//user
exports.read_all_user = function(req, res) {
  user.find({},{}, function(err, data) {
    if (err)
      res.send(err);
    res.json(data);
  });
};

exports.create_a_user = function(req, res) {
  da = {"method":"post","model":"User","data":req.body}
  j = JSON.stringify(da);
  payloads = [{ topic: 'post-topic' , messages: [j]  ,partition: 0}]  
  producer.send(payloads, function (err, data) {
    if (err)
      res.send(err);
      console.log(err)
    res.json(data);
    console.log(payloads);
});
};


exports.read_a_user = function(req, res) {
  user.find({_id: req.params.id}, function(err, data) {
    if (err)
      res.send(err);
    res.json(data);
  });
};

exports.update_a_user = function(req, res) {
    da = {"method":"put","model":"User","query":{USERID: req.body.USERID+''},"data":req.body}
    j = JSON.stringify(da);
    payloads = [{ topic: 'post-topic' , messages: [j]  ,partition: 0}]
    producer.send(payloads, function (err, data) {
    if (err)
      res.send(err);
      console.log(err)
    res.json(data);
    console.log(payloads);
});	
};

exports.delete_a_user = function(req, res) {
    da = {"method":"del","model":"User","query":{USERID : req.query.USERID+''},"data":req.body}
    j = JSON.stringify(da);
    payloads = [{ topic: 'post-topic' , messages: [j]  ,partition: 0}]
    producer.send(payloads, function (err, data) {
    if (err)
      res.send(err);
      console.log(err)
    res.json(data);
    console.log(payloads);
});
};

//area

exports.create_a_area = function(req, res)  {
  da = {"method":"post","model":"Area","data":req.body}
  j = JSON.stringify(da);
  payloads = [{ topic: 'post-topic' , messages: [j]  ,partition: 0}]  
  producer.send(payloads, function (err, data) {
    if (err)
      res.send(err);
      console.log(err)
    res.json(data);
    console.log(payloads);
});
};  
  

exports.read_all_area = function(req, res) {
  area.find({}, function(err, data) {
    if (err)
      res.send(err);
    res.json(data);
  });
};

exports.read_a_area = function(req, res) {
  area.find({_id: req.params.id}, function(err, data) {
    if (err)
      res.send(err);
    res.json(data);
  });
};

exports.update_a_area = function(req, res) {
  da = {"method":"put","model":"Area","query":"{REG:"+req.params.REG+",CWT:"+req.params.CWT+",AMP:"+req.params.AMP+",TAM:"+req.params.TAM+",DISTRICT:"+req.params.DISTRICT+",EA:"+req.params.EA+"}","data":req.body}
  j = JSON.stringify(da);
  payloads = [{ topic: 'post-topic' , messages: [j]  ,partition: 0}]
  producer.send(payloads, function (err, data) {
  if (err)
    res.send(err);
    console.log(err)
  res.json(data);
  console.log(payloads);
  });	
};


exports.delete_a_area = function(req, res) {
  da = {"method":"del","model":"Area","query":"{REG:"+req.params.REG+",CWT:"+req.params.CWT+",AMP:"+req.params.AMP+",TAM:"+req.params.TAM+",DISTRICT:"+req.params.DISTRICT+",EA:"+req.params.EA+"}","data":req.body}
  j = JSON.stringify(da);
  payloads = [{ topic: 'post-topic' , messages: [j]  ,partition: 0}]
  producer.send(payloads, function (err, data) {
  if (err)
    res.send(err);
    console.log(err)
  res.json(data);
  console.log(payloads);
  });	
};

//tablet

exports.create_a_tablet = function(req, res)  {
  da = {"method":"post","model":"Tablet","data":req.body}
  j = JSON.stringify(da);
  payloads = [{ topic: 'post-topic' , messages: [j]  ,partition: 0}]  
  producer.send(payloads, function (err, data) {
    if (err)
      res.send(err);
      console.log(err)
    res.json(data);
    console.log(payloads);
});
};  
  
exports.read_all_tablet = function(req, res) {
  tablet.find({}, function(err, data) {
    if (err)
      res.send(err);
    res.json(data);
  });
};

exports.read_a_tablet = function(req, res) {
  tablet.find({_id: req.params.id}, function(err, data) {
    if (err)
      res.send(err);
    res.json(data);
  });
};

exports.update_a_tablet = function(req, res) {
  da = {"method":"put","model":"Area","query":"tablet_sn:"+req.params.tablet_sn,"data":req.body}
  j = JSON.stringify(da);
  payloads = [{ topic: 'post-topic' , messages: [j]  ,partition: 0}]
  producer.send(payloads, function (err, data) {
  if (err)
    res.send(err);
    console.log(err)
  res.json(data);
  console.log(payloads);
  });	
};

exports.delete_a_tablet = function(req, res) {
  da = {"method":"put","model":"Area","query":"tablet_sn:"+req.params.tablet_sn,"data":req.body}
  j = JSON.stringify(da);
  payloads = [{ topic: 'post-topic' , messages: [j]  ,partition: 0}]
  producer.send(payloads, function (err, data) {
  if (err)
    res.send(err);
    console.log(err)
  res.json(data);
  console.log(payloads);
  });	
};

//Progress

exports.create_a_progress = function(req, res)  {
  da = {"method":"post","model":"Progress","data":req.body}
  j = JSON.stringify(da);
  payloads = [{ topic: 'post-topic' , messages: [j]  ,partition: 0}]  
  producer.send(payloads, function (err, data) {
    if (err)
      res.send(err);
      console.log(err)
    res.json(data);
    console.log(payloads);
});
};  
  

exports.read_all_progress = function(req, res) {
  progress.find({}, function(err, data) {
    if (err)
      res.send(err);
    res.json(data);
  });
};

exports.read_a_progress = function(req, res) {
  progress.find({_id: req.params.id}, function(err, data) {
    if (err)
      res.send(err);
    res.json(data);
  });
};

exports.update_a_progress = function(req, res) {
  da = {"method":"put","model":"Progress","query":"_id:"+req.params.id,"data":req.body}
  j = JSON.stringify(da);
  payloads = [{ topic: 'post-topic' , messages: [j]  ,partition: 0}]
  producer.send(payloads, function (err, data) {
  if (err)
    res.send(err);
    console.log(err)
  res.json(data);
  console.log(payloads);
});	
};

exports.delete_a_progress = function(req, res) {
  da = {"method":"del","model":"Progress","query":"_id:"+req.params.id,"data":req.body}
  j = JSON.stringify(da);
  payloads = [{ topic: 'post-topic' , messages: [j]  ,partition: 0}]
  producer.send(payloads, function (err, data) {
  if (err)
    res.send(err);
    console.log(err)
  res.json(data);
  console.log(payloads);
});	
};

//SN1

exports.create_a_SN1 = function(req, res)  {
  da = {"method":"post","model":"SN1","data":req.body}
  j = JSON.stringify(da);
  payloads = [{ topic: 'post-topic' , messages: [j]  ,partition: 0}]  
  producer.send(payloads, function (err, data) {
    if (err)
      res.send(err);
      console.log(err)
    res.json(data);
    console.log(payloads);
});
};  
  

exports.read_all_SN1 = function(req, res) {
  SN1.find({}, function(err, data) {
    if (err)
      res.send(err);
    res.json(data);
  });
};

exports.read_a_SN1 = function(req, res) {
  SN1.find({_id: req.params.id}, function(err, data) {
    if (err)
      res.send(err);
    res.json(data);
  });
};

exports.update_a_SN1 = function(req, res) {
  da = {"method":"put","model":"SN1","query":"_id:"+req.params.id,"data":req.body}
  j = JSON.stringify(da);
  payloads = [{ topic: 'post-topic' , messages: [j]  ,partition: 0}]
  producer.send(payloads, function (err, data) {
  if (err)
    res.send(err);
    console.log(err)
  res.json(data);
  console.log(payloads);
});	
};

exports.delete_a_SN1 = function(req, res) {
  da = {"method":"del","model":"SN1","query":"_id:"+req.params.id,"data":req.body}
  j = JSON.stringify(da);
  payloads = [{ topic: 'post-topic' , messages: [j]  ,partition: 0}]
  producer.send(payloads, function (err, data) {
  if (err)
    res.send(err);
    console.log(err)
  res.json(data);
  console.log(payloads);
});	
};

//SN1P1
exports.create_a_SN1P1 = function(req, res)  {
  da = {"method":"post","model":"SN1P1","data":req.body}
  j = JSON.stringify(da);
  payloads = [{ topic: 'post-topic' , messages: [j]  ,partition: 0}]  
  producer.send(payloads, function (err, data) {
    if (err)
      res.send(err);
      console.log(err)
    res.json(data);
    console.log(payloads);
});
};

exports.read_all_SN1P1 = function(req, res) {
  household.find({}, function(err, data) {
    if (err)
      res.send(err);
    res.json(data);
  });
};

exports.read_a_SN1P1 = function(req, res) {
  SN1P1.find({_id: req.params.id}, function(err, data) {
    if (err)
      res.send(err);
    res.json(data);
  });
};

exports.update_a_SN1P1 = function(req, res) {
  da = {"method":"put","model":"SN1P1","query":"_id:"+req.params.id,"data":req.body}
  j = JSON.stringify(da);
  payloads = [{ topic: 'post-topic' , messages: [j]  ,partition: 0}]
  producer.send(payloads, function (err, data) {
  if (err)
    res.send(err);
    console.log(err)
  res.json(data);
  console.log(payloads);
  });	
};

exports.delete_a_SN1P1 = function(req, res) {
  da = {"method":"del","model":"SN1P1","query":"_id:"+req.params.id,"data":req.body}
  j = JSON.stringify(da);
  payloads = [{ topic: 'post-topic' , messages: [j]  ,partition: 0}]
  producer.send(payloads, function (err, data) {
  if (err)
    res.send(err);
    console.log(err)
  res.json(data);
  console.log(payloads);
});	
};

//SN1P2 
exports.create_a_SN1P2 = function(req, res)  {
  da = {"method":"post","model":"SN1P2","data":req.body}
  j = JSON.stringify(da);
  payloads = [{ topic: 'post-topic' , messages: [j]  ,partition: 0}]  
  producer.send(payloads, function (err, data) {
    if (err)
      res.send(err);
      console.log(err)
    res.json(data);
    console.log(payloads);
});
};

exports.read_all_SN1P2 = function(req, res) {
  SN1P2.find({}, function(err, data) {
    if (err)
      res.send(err);
    res.json(data);
  });
};

exports.read_a_SN1P2 = function(req, res) {
  SN1P2.find({_id: req.params.id}, function(err, data) {
    if (err)
      res.send(err);
    res.json(data);
  });
};

exports.update_a_SN1P2 = function(req, res) {
  da = {"method":"put","model":"SN1P2","query":"_id:"+req.params.id,"data":req.body}
  j = JSON.stringify(da);
  payloads = [{ topic: 'post-topic' , messages: [j]  ,partition: 0}]
  producer.send(payloads, function (err, data) {
  if (err)
    res.send(err);
    console.log(err)
  res.json(data);
  console.log(payloads);
});	
};

exports.delete_a_SN1P2 = function(req, res) {
  da = {"method":"del","model":"SN1P2","query":"_id:"+req.params.id,"data":req.body}
  j = JSON.stringify(da);
  payloads = [{ topic: 'post-topic' , messages: [j]  ,partition: 0}]
  producer.send(payloads, function (err, data) {
  if (err)
    res.send(err);
    console.log(err)
  res.json(data);
  console.log(payloads);
});	
};

//wc21_1
exports.create_a_SN1P3 = function(req, res)  {
  da = {"method":"post","model":"SN1P3","data":req.body}
  j = JSON.stringify(da);
  payloads = [{ topic: 'post-topic' , messages: [j]  ,partition: 0}]  
  producer.send(payloads, function (err, data) {
    if (err)
      res.send(err);
      console.log(err)
    res.json(data);
    console.log(payloads);
});
};

exports.read_all_SN1P3 = function(req, res) {
  SN1P3.find({}, function(err, data) {
    if (err)
      res.send(err);
    res.json(data);
  });
};

exports.read_a_SN1P3 = function(req, res) {
  SN1P3.find({_id: req.params.id}, function(err, data) {
    if (err)
      res.send(err);
    res.json(data);
  });
};

exports.update_a_SN1P3 = function(req, res) {
  da = {"method":"put","model":"SN1P3","query":"_id:"+req.params.id,"data":req.body}
  j = JSON.stringify(da);
  payloads = [{ topic: 'post-topic' , messages: [j]  ,partition: 0}]
  producer.send(payloads, function (err, data) {
  if (err)
    res.send(err);
    console.log(err)
  res.json(data);
  console.log(payloads);
});	
};

exports.delete_a_SN1P3 = function(req, res) {
  da = {"method":"del","model":"SN1P3ress","query":"_id:"+req.params.id,"data":req.body}
  j = JSON.stringify(da);
  payloads = [{ topic: 'post-topic' , messages: [j]  ,partition: 0}]
  producer.send(payloads, function (err, data) {
  if (err)
    res.send(err);
    console.log(err)
  res.json(data);
  console.log(payloads);
});	
};

//SN2_1       
exports.create_a_SN2_1 = function(req, res)  {
  da = {"method":"post","model":"SN2_1","data":req.body}
  j = JSON.stringify(da);
  payloads = [{ topic: 'post-topic' , messages: [j]  ,partition: 0}]  
  producer.send(payloads, function (err, data) {
    if (err)
      res.send(err);
      console.log(err)
    res.json(data);
    console.log(payloads);
});
};

exports.read_all_SN2_1 = function(req, res) {
  SN2_1.find({}, function(err, data) {
    if (err)
      res.send(err);
    res.json(data);
  });
};

exports.read_a_SN2_1 = function(req, res) {
  SN2_1.find({_id: req.params.id}, function(err, data) {
    if (err)
      res.send(err);
    res.json(data);
  });
};

exports.update_a_SN2_1 = function(req, res) {
  da = {"method":"put","model":"SN2_1","query":"_id:"+req.params.id,"data":req.body}
  j = JSON.stringify(da);
  payloads = [{ topic: 'post-topic' , messages: [j]  ,partition: 0}]
  producer.send(payloads, function (err, data) {
  if (err)
    res.send(err);
    console.log(err)
  res.json(data);
  console.log(payloads);
});	
};

exports.delete_a_SN2_1 = function(req, res) {
  da = {"method":"del","model":"SN2_1","query":"_id:"+req.params.id,"data":req.body}
  j = JSON.stringify(da);
  payloads = [{ topic: 'post-topic' , messages: [j]  ,partition: 0}]
  producer.send(payloads, function (err, data) {
  if (err)
    res.send(err);
    console.log(err)
  res.json(data);
  console.log(payloads);
});	
};

//SN2_1P1
exports.create_a_SN2_1P1 = function(req, res)  {
  da = {"method":"post","model":"SN2_1P1","data":req.body}
  j = JSON.stringify(da);
  payloads = [{ topic: 'post-topic' , messages: [j]  ,partition: 0}]  
  producer.send(payloads, function (err, data) {
    if (err)
      res.send(err);
      console.log(err)
    res.json(data);
    console.log(payloads);
});
};

exports.read_all_SN2_1P1 = function(req, res) {
  SN2_1P1.find({}, function(err, data) {
    if (err)
      res.send(err);
    res.json(data);
  });
};

exports.read_a_SN2_1P1 = function(req, res) {
  SN2_1P1.find({_id: req.params.id}, function(err, data) {
    if (err)
      res.send(err);
    res.json(data);
  });
};

exports.update_a_SN2_1P1 = function(req, res) {
  da = {"method":"put","model":"SN2_1P1","query":"_id:"+req.params.id,"data":req.body}
  j = JSON.stringify(da);
  payloads = [{ topic: 'post-topic' , messages: [j]  ,partition: 0}]
  producer.send(payloads, function (err, data) {
  if (err)
    res.send(err);
    console.log(err)
  res.json(data);
  console.log(payloads);
});	
};

exports.delete_a_SN2_1P1 = function(req, res) {
  da = {"method":"del","model":"SN2_1P1","query":"_id:"+req.params.id,"data":req.body}
  j = JSON.stringify(da);
  payloads = [{ topic: 'post-topic' , messages: [j]  ,partition: 0}]
  producer.send(payloads, function (err, data) {
  if (err)
    res.send(err);
    console.log(err)
  res.json(data);
  console.log(payloads);
});	
};
        
//SN2_1P2
exports.create_a_SN2_1P2 = function(req, res)  {
  da = {"method":"post","model":"SN2_1P2","data":req.body}
  j = JSON.stringify(da);
  payloads = [{ topic: 'post-topic' , messages: [j]  ,partition: 0}]  
  producer.send(payloads, function (err, data) {
    if (err)
      res.send(err);
      console.log(err)
    res.json(data);
    console.log(payloads);
});
};

exports.read_all_SN2_1P2 = function(req, res) {
  SN2_1P2.find({}, function(err, data) {
    if (err)
      res.send(err);
    res.json(data);
  });
};

exports.read_a_SN2_1P2 = function(req, res) {
  SN2_1P2.find({_id: req.params.id}, function(err, data) {
    if (err)
      res.send(err);
    res.json(data);
  });
};

exports.update_a_SN2_1P2 = function(req, res) {
  da = {"method":"put","model":"SN2_1P2","query":"_id:"+req.params.id,"data":req.body}
  j = JSON.stringify(da);
  payloads = [{ topic: 'post-topic' , messages: [j]  ,partition: 0}]
  producer.send(payloads, function (err, data) {
  if (err)
    res.send(err);
    console.log(err)
  res.json(data);
  console.log(payloads);
});	
};

exports.delete_a_SN2_1P2 = function(req, res) {
  da = {"method":"del","model":"SN2_1P2","query":"_id:"+req.params.id,"data":req.body}
  j = JSON.stringify(da);
  payloads = [{ topic: 'post-topic' , messages: [j]  ,partition: 0}]
  producer.send(payloads, function (err, data) {
  if (err)
    res.send(err);
    console.log(err)
  res.json(data);
  console.log(payloads);
});	
};
         
//SN2_1P2_1
exports.create_a_SN2_1P2_1 = function(req, res)  {
  da = {"method":"post","model":"SN2_1P2_1","data":req.body}
  j = JSON.stringify(da);
  payloads = [{ topic: 'post-topic' , messages: [j]  ,partition: 0}]  
  producer.send(payloads, function (err, data) {
    if (err)
      res.send(err);
      console.log(err)
    res.json(data);
    console.log(payloads);
});
};

exports.read_all_SN2_1P2_1 = function(req, res) {
  SN2_1P2_1.find({}, function(err, data) {
    if (err)
      res.send(err);
    res.json(data);
  });
};

exports.read_a_SN2_1P2_1 = function(req, res) {
  SN2_1P2_1.find({_id: req.params.id}, function(err, data) {
    if (err)
      res.send(err);
    res.json(data);
  });
};

exports.update_a_SN2_1P2_1 = function(req, res) {
  da = {"method":"put","model":"SN2_1P2_1","query":"_id:"+req.params.id,"data":req.body}
  j = JSON.stringify(da);
  payloads = [{ topic: 'post-topic' , messages: [j]  ,partition: 0}]
  producer.send(payloads, function (err, data) {
  if (err)
    res.send(err);
    console.log(err)
  res.json(data);
  console.log(payloads);
});	
};

exports.delete_a_SN2_1P2_1 = function(req, res) {
  da = {"method":"del","model":"SN2_1P2_1","query":"_id:"+req.params.id,"data":req.body}
  j = JSON.stringify(da);
  payloads = [{ topic: 'post-topic' , messages: [j]  ,partition: 0}]
  producer.send(payloads, function (err, data) {
  if (err)
    res.send(err);
    console.log(err)
  res.json(data);
  console.log(payloads);
});	
};

//SN2_1P2_2
exports.create_a_SN2_1P2_2 = function(req, res)  {
  da = {"method":"post","model":"SN2_1P2_2","data":req.body}
  j = JSON.stringify(da);
  payloads = [{ topic: 'post-topic' , messages: [j]  ,partition: 0}]  
  producer.send(payloads, function (err, data) {
    if (err)
      res.send(err);
      console.log(err)
    res.json(data);
    console.log(payloads);
});
};

exports.read_all_SN2_1P2_2 = function(req, res) {
  SN2_1P2_2.find({}, function(err, data) {
    if (err)
      res.send(err);
    res.json(data);
  });
};

exports.read_a_SN2_1P2_2 = function(req, res) {
  SN2_1P2_2.find({_id: req.params.id}, function(err, data) {
    if (err)
      res.send(err);
    res.json(data);
  });
};

exports.update_a_SN2_1P2_2 = function(req, res) {
  da = {"method":"put","model":"SN2_1P2_2","query":"_id:"+req.params.id,"data":req.body}
  j = JSON.stringify(da);
  payloads = [{ topic: 'post-topic' , messages: [j]  ,partition: 0}]
  producer.send(payloads, function (err, data) {
  if (err)
    res.send(err);
    console.log(err)
  res.json(data);
  console.log(payloads);
});	
};

exports.delete_a_SN2_1P2_2 = function(req, res) {
  da = {"method":"del","model":"SN2_1P2_2","query":"_id:"+req.params.id,"data":req.body}
  j = JSON.stringify(da);
  payloads = [{ topic: 'post-topic' , messages: [j]  ,partition: 0}]
  producer.send(payloads, function (err, data) {
  if (err)
    res.send(err);
    console.log(err)
  res.json(data);
  console.log(payloads);
});	
};

//SN2_1P2_3
exports.create_a_SN2_1P2_3 = function(req, res)  {
  da = {"method":"post","model":"SN2_1P2_3","data":req.body}
  j = JSON.stringify(da);
  payloads = [{ topic: 'post-topic' , messages: [j]  ,partition: 0}]  
  producer.send(payloads, function (err, data) {
    if (err)
      res.send(err);
      console.log(err)
    res.json(data);
    console.log(payloads);
});
};

exports.read_all_SN2_1P2_3 = function(req, res) {
  SN2_1P2_3.find({}, function(err, data) {
    if (err)
      res.send(err);
    res.json(data);
  });
};

exports.read_a_SN2_1P2_3 = function(req, res) {
  SN2_1P2_3.find({_id: req.params.id}, function(err, data) {
    if (err)
      res.send(err);
    res.json(data);
  });
};

exports.update_a_SN2_1P2_3 = function(req, res) {
  da = {"method":"put","model":"SN2_1P2_3","query":"_id:"+req.params.id,"data":req.body}
  j = JSON.stringify(da);
  payloads = [{ topic: 'post-topic' , messages: [j]  ,partition: 0}]
  producer.send(payloads, function (err, data) {
  if (err)
    res.send(err);
    console.log(err)
  res.json(data);
  console.log(payloads);
});	
};

exports.delete_a_SN2_1P2_3 = function(req, res) {
  da = {"method":"del","model":"SN2_1P2_3","query":"_id:"+req.params.id,"data":req.body}
  j = JSON.stringify(da);
  payloads = [{ topic: 'post-topic' , messages: [j]  ,partition: 0}]
  producer.send(payloads, function (err, data) {
  if (err)
    res.send(err);
    console.log(err)
  res.json(data);
  console.log(payloads);
});	
};
//SN2_1P2_4
exports.create_a_SN2_1P2_4 = function(req, res)  {
  da = {"method":"post","model":"SN2_1P2_4","data":req.body}
  j = JSON.stringify(da);
  payloads = [{ topic: 'post-topic' , messages: [j]  ,partition: 0}]  
  producer.send(payloads, function (err, data) {
    if (err)
      res.send(err);
      console.log(err)
    res.json(data);
    console.log(payloads);
});
};

exports.read_all_SN2_1P2_4 = function(req, res) {
  SN2_1P2_4.find({}, function(err, data) {
    if (err)
      res.send(err);
    res.json(data);
  });
};

exports.read_a_SN2_1P2_4 = function(req, res) {
  SN2_1P2_4.find({_id: req.params.id}, function(err, data) {
    if (err)
      res.send(err);
    res.json(data);
  });
};

exports.update_a_SN2_1P2_4 = function(req, res) {
  da = {"method":"put","model":"SN2_1P2_4","query":"_id:"+req.params.id,"data":req.body}
  j = JSON.stringify(da);
  payloads = [{ topic: 'post-topic' , messages: [j]  ,partition: 0}]
  producer.send(payloads, function (err, data) {
  if (err)
    res.send(err);
    console.log(err)
  res.json(data);
  console.log(payloads);
});	
};

exports.delete_a_SN2_1P2_4 = function(req, res) {
  da = {"method":"del","model":"SN2_1P2_4","query":"_id:"+req.params.id,"data":req.body}
  j = JSON.stringify(da);
  payloads = [{ topic: 'post-topic' , messages: [j]  ,partition: 0}]
  producer.send(payloads, function (err, data) {
  if (err)
    res.send(err);
    console.log(err)
  res.json(data);
  console.log(payloads);
});	
};
    
//SN2_1P2_5
exports.create_a_SN2_1P2_5 = function(req, res)  {
  da = {"method":"post","model":"SN2_1P2_5","data":req.body}
  j = JSON.stringify(da);
  payloads = [{ topic: 'post-topic' , messages: [j]  ,partition: 0}]  
  producer.send(payloads, function (err, data) {
    if (err)
      res.send(err);
      console.log(err)
    res.json(data);
    console.log(payloads);
});
};

exports.read_all_SN2_1P2_5 = function(req, res) {
  SN2_1P2_5.find({}, function(err, data) {
    if (err)
      res.send(err);
    res.json(data);
  });
};

exports.read_a_SN2_1P2_5 = function(req, res) {
  SN2_1P2_5.find({_id: req.params.id}, function(err, data) {
    if (err)
      res.send(err);
    res.json(data);
  });
};

exports.update_a_SN2_1P2_5 = function(req, res) {
  da = {"method":"put","model":"SN2_1P2_5","query":"_id:"+req.params.id,"data":req.body}
  j = JSON.stringify(da);
  payloads = [{ topic: 'post-topic' , messages: [j]  ,partition: 0}]
  producer.send(payloads, function (err, data) {
  if (err)
    res.send(err);
    console.log(err)
  res.json(data);
  console.log(payloads);
});	
};

exports.delete_a_SN2_1P2_5 = function(req, res) {
  da = {"method":"del","model":"SN2_1P2_5","query":"_id:"+req.params.id,"data":req.body}
  j = JSON.stringify(da);
  payloads = [{ topic: 'post-topic' , messages: [j]  ,partition: 0}]
  producer.send(payloads, function (err, data) {
  if (err)
    res.send(err);
    console.log(err)
  res.json(data);
  console.log(payloads);
});	
};
    
//SN2_1P2_6
exports.create_a_SN2_1P2_6 = function(req, res)  {
  da = {"method":"post","model":"SN2_1P2_6","data":req.body}
  j = JSON.stringify(da);
  payloads = [{ topic: 'post-topic' , messages: [j]  ,partition: 0}]  
  producer.send(payloads, function (err, data) {
    if (err)
      res.send(err);
      console.log(err)
    res.json(data);
    console.log(payloads);
});
};

exports.read_all_SN2_1P2_6 = function(req, res) {
  SN2_1P2_6.find({}, function(err, data) {
    if (err)
      res.send(err);
    res.json(data);
  });
};

exports.read_a_SN2_1P2_6 = function(req, res) {
  SN2_1P2_6.find({_id: req.params.id}, function(err, data) {
    if (err)
      res.send(err);
    res.json(data);
  });
};

exports.update_a_SN2_1P2_6 = function(req, res) {
  da = {"method":"put","model":"SN2_1P2_6","query":"_id:"+req.params.id,"data":req.body}
  j = JSON.stringify(da);
  payloads = [{ topic: 'post-topic' , messages: [j]  ,partition: 0}]
  producer.send(payloads, function (err, data) {
  if (err)
    res.send(err);
    console.log(err)
  res.json(data);
  console.log(payloads);
});	
};

exports.delete_a_SN2_1P2_6 = function(req, res) {
  da = {"method":"del","model":"SN2_1P2_6","query":"_id:"+req.params.id,"data":req.body}
  j = JSON.stringify(da);
  payloads = [{ topic: 'post-topic' , messages: [j]  ,partition: 0}]
  producer.send(payloads, function (err, data) {
  if (err)
    res.send(err);
    console.log(err)
  res.json(data);
  console.log(payloads);
});	
};
   
//SN2_1P2_7
exports.create_a_SN2_1P2_7 = function(req, res)  {
  da = {"method":"post","model":"SN2_1P2_7","data":req.body}
  j = JSON.stringify(da);
  payloads = [{ topic: 'post-topic' , messages: [j]  ,partition: 0}]  
  producer.send(payloads, function (err, data) {
    if (err)
      res.send(err);
      console.log(err)
    res.json(data);
    console.log(payloads);
});
};
exports.read_all_SN2_1P2_7 = function(req, res) {
  SN2_1P2_7.find({}, function(err, data) {
    if (err)
      res.send(err);
    res.json(data);
  });
};

exports.read_a_SN2_1P2_7 = function(req, res) {
  SN2_1P2_7.find({_id: req.params.id}, function(err, data) {
    if (err)
      res.send(err);
    res.json(data);
  });
};

exports.update_a_SN2_1P2_7 = function(req, res) {
  da = {"method":"put","model":"SN2_1P2_7","query":"_id:"+req.params.id,"data":req.body}
  j = JSON.stringify(da);
  payloads = [{ topic: 'post-topic' , messages: [j]  ,partition: 0}]
  producer.send(payloads, function (err, data) {
  if (err)
    res.send(err);
    console.log(err)
  res.json(data);
  console.log(payloads);
});	
};

exports.delete_a_SN2_1P2_7 = function(req, res) {
  da = {"method":"del","model":"SN2_1P2_7","query":"_id:"+req.params.id,"data":req.body}
  j = JSON.stringify(da);
  payloads = [{ topic: 'post-topic' , messages: [j]  ,partition: 0}]
  producer.send(payloads, function (err, data) {
  if (err)
    res.send(err);
    console.log(err)
  res.json(data);
  console.log(payloads);
});	
};
    
//SN2_1P2_9_1
exports.create_a_SN2_1P2_9_1 = function(req, res)  {
  da = {"method":"post","model":"SN2_1P2_9_1","data":req.body}
  j = JSON.stringify(da);
  payloads = [{ topic: 'post-topic' , messages: [j]  ,partition: 0}]  
  producer.send(payloads, function (err, data) {
    if (err)
      res.send(err);
      console.log(err)
    res.json(data);
    console.log(payloads);
});
};

exports.read_all_SN2_1P2_9_1 = function(req, res) {
  SN2_1P2_9_1.find({}, function(err, data) {
    if (err)
      res.send(err);
    res.json(data);
  });
};

exports.read_a_SN2_1P2_9_1 = function(req, res) {
  SN2_1P2_9_1.find({_id: req.params.id}, function(err, data) {
    if (err)
      res.send(err);
    res.json(data);
  });
};

exports.update_a_SN2_1P2_9_1 = function(req, res) {
  da = {"method":"put","model":"SN2_1P2_9_1","query":"_id:"+req.params.id,"data":req.body}
  j = JSON.stringify(da);
  payloads = [{ topic: 'post-topic' , messages: [j]  ,partition: 0}]
  producer.send(payloads, function (err, data) {
  if (err)
    res.send(err);
    console.log(err)
  res.json(data);
  console.log(payloads);
});	
};

exports.delete_a_SN2_1P2_9_1 = function(req, res) {
  da = {"method":"del","model":"SN2_1P2_9_1","query":"_id:"+req.params.id,"data":req.body}
  j = JSON.stringify(da);
  payloads = [{ topic: 'post-topic' , messages: [j]  ,partition: 0}]
  producer.send(payloads, function (err, data) {
  if (err)
    res.send(err);
    console.log(err)
  res.json(data);
  console.log(payloads);
});	
};
      
//SN2_1P2_9_3
exports.create_a_SN2_1P2_9_3 = function(req, res)  {
  da = {"method":"post","model":"SN2_1P2_9_3","data":req.body}
  j = JSON.stringify(da);
  payloads = [{ topic: 'post-topic' , messages: [j]  ,partition: 0}]  
  producer.send(payloads, function (err, data) {
    if (err)
      res.send(err);
      console.log(err)
    res.json(data);
    console.log(payloads);
});
};

exports.read_all_SN2_1P2_9_3 = function(req, res) {
  SN2_1P2_9_3.find({}, function(err, data) {
    if (err)
      res.send(err);
    res.json(data);
  });
};

exports.read_a_SN2_1P2_9_3 = function(req, res) {
  SN2_1P2_9_3.find({_id: req.params.id}, function(err, data) {
    if (err)
      res.send(err);
    res.json(data);
  });
};

exports.update_a_SN2_1P2_9_3 = function(req, res) {
  da = {"method":"put","model":"SN2_1P2_9_3","query":"_id:"+req.params.id,"data":req.body}
  j = JSON.stringify(da);
  payloads = [{ topic: 'post-topic' , messages: [j]  ,partition: 0}]
  producer.send(payloads, function (err, data) {
  if (err)
    res.send(err);
    console.log(err)
  res.json(data);
  console.log(payloads);
});	
};

exports.delete_a_SN2_1P2_9_3 = function(req, res) {
  da = {"method":"del","model":"SN2_1P2_9_3","query":"_id:"+req.params.id,"data":req.body}
  j = JSON.stringify(da);
  payloads = [{ topic: 'post-topic' , messages: [j]  ,partition: 0}]
  producer.send(payloads, function (err, data) {
  if (err)
    res.send(err);
    console.log(err)
  res.json(data);
  console.log(payloads);
});	
};
        
//SN2_1P2_9_4
exports.create_a_SN2_1P2_9_4 = function(req, res)  {
  da = {"method":"post","model":"SN2_1P2_9_4","data":req.body}
  j = JSON.stringify(da);
  payloads = [{ topic: 'post-topic' , messages: [j]  ,partition: 0}]  
  producer.send(payloads, function (err, data) {
    if (err)
      res.send(err);
      console.log(err)
    res.json(data);
    console.log(payloads);
});
};

exports.read_all_SN2_1P2_9_4 = function(req, res) {
  SN2_1P2_9_4.find({}, function(err, data) {
    if (err)
      res.send(err);
    res.json(data);
  });
};

exports.read_a_SN2_1P2_9_4 = function(req, res) {
  SN2_1P2_9_4.find({_id: req.params.id}, function(err, data) {
    if (err)
      res.send(err);
    res.json(data);
  });
};

exports.update_a_SN2_1P2_9_4 = function(req, res) {
  da = {"method":"put","model":"SN2_1P2_9_4","query":"_id:"+req.params.id,"data":req.body}
  j = JSON.stringify(da);
  payloads = [{ topic: 'post-topic' , messages: [j]  ,partition: 0}]
  producer.send(payloads, function (err, data) {
  if (err)
    res.send(err);
    console.log(err)
  res.json(data);
  console.log(payloads);
});	
};

exports.delete_a_SN2_1P2_9_4 = function(req, res) {
  da = {"method":"del","model":"SN2_1P2_9_4","query":"_id:"+req.params.id,"data":req.body}
  j = JSON.stringify(da);
  payloads = [{ topic: 'post-topic' , messages: [j]  ,partition: 0}]
  producer.send(payloads, function (err, data) {
  if (err)
    res.send(err);
    console.log(err)
  res.json(data);
  console.log(payloads);
});	
};
        
//SN2_1P3
exports.create_a_SN2_1P3 = function(req, res)  {
  da = {"method":"post","model":"SN2_1P3","data":req.body}
  j = JSON.stringify(da);
  payloads = [{ topic: 'post-topic' , messages: [j]  ,partition: 0}]  
  producer.send(payloads, function (err, data) {
    if (err)
      res.send(err);
      console.log(err)
    res.json(data);
    console.log(payloads);
});
};

exports.read_all_SN2_1P3 = function(req, res) {
  SN2_1P3.find({}, function(err, data) {
    if (err)
      res.send(err);
    res.json(data);
  });
};

exports.read_a_SN2_1P3 = function(req, res) {
  SN2_1P3.find({_id: req.params.id}, function(err, data) {
    if (err)
      res.send(err);
    res.json(data);
  });
};

exports.update_a_SN2_1P3 = function(req, res) {
  da = {"method":"put","model":"SN2_1P3","query":"_id:"+req.params.id,"data":req.body}
  j = JSON.stringify(da);
  payloads = [{ topic: 'post-topic' , messages: [j]  ,partition: 0}]
  producer.send(payloads, function (err, data) {
  if (err)
    res.send(err);
    console.log(err)
  res.json(data);
  console.log(payloads);
});	
};

exports.delete_a_SN2_1P3 = function(req, res) {
  da = {"method":"del","model":"SN2_1P3","query":"_id:"+req.params.id,"data":req.body}
  j = JSON.stringify(da);
  payloads = [{ topic: 'post-topic' , messages: [j]  ,partition: 0}]
  producer.send(payloads, function (err, data) {
  if (err)
    res.send(err);
    console.log(err)
  res.json(data);
  console.log(payloads);
});	
};
      
//SN2_1P4
exports.create_a_SN2_1P4 = function(req, res)  {
  da = {"method":"post","model":"SN2_1P4","data":req.body}
  j = JSON.stringify(da);
  payloads = [{ topic: 'post-topic' , messages: [j]  ,partition: 0}]  
  producer.send(payloads, function (err, data) {
    if (err)
      res.send(err);
      console.log(err)
    res.json(data);
    console.log(payloads);
});
};

exports.read_all_SN2_1P4 = function(req, res) {
  SN2_1P4.find({}, function(err, data) {
    if (err)
      res.send(err);
    res.json(data);
  });
};

exports.read_a_SN2_1P4 = function(req, res) {
  SN2_1P4.find({_id: req.params.id}, function(err, data) {
    if (err)
      res.send(err);
    res.json(data);
  });
};

exports.update_a_SN2_1P4 = function(req, res) {
  da = {"method":"put","model":"SN2_1P4","query":"_id:"+req.params.id,"data":req.body}
  j = JSON.stringify(da);
  payloads = [{ topic: 'post-topic' , messages: [j]  ,partition: 0}]
  producer.send(payloads, function (err, data) {
  if (err)
    res.send(err);
    console.log(err)
  res.json(data);
  console.log(payloads);
});	
};

exports.delete_a_SN2_1P4 = function(req, res) {
  da = {"method":"del","model":"SN2_1P4","query":"_id:"+req.params.id,"data":req.body}
  j = JSON.stringify(da);
  payloads = [{ topic: 'post-topic' , messages: [j]  ,partition: 0}]
  producer.send(payloads, function (err, data) {
  if (err)
    res.send(err);
    console.log(err)
  res.json(data);
  console.log(payloads);
});	
};
    
//SN2_1P5
exports.create_a_SN2_1P5 = function(req, res)  {
  da = {"method":"post","model":"SN2_1P5","data":req.body}
  j = JSON.stringify(da);
  payloads = [{ topic: 'post-topic' , messages: [j]  ,partition: 0}]  
  producer.send(payloads, function (err, data) {
    if (err)
      res.send(err);
      console.log(err)
    res.json(data);
    console.log(payloads);
});
};

exports.read_all_SN2_1P5 = function(req, res) {
  SN2_1P5.find({}, function(err, data) {
    if (err)
      res.send(err);
    res.json(data);
  });
};

exports.read_a_SN2_1P5 = function(req, res) {
  SN2_1P5.find({_id: req.params.id}, function(err, data) {
    if (err)
      res.send(err);
    res.json(data);
  });
};

exports.update_a_SN2_1P5 = function(req, res) {
  da = {"method":"put","model":"SN2_1P5","query":"_id:"+req.params.id,"data":req.body}
  j = JSON.stringify(da);
  payloads = [{ topic: 'post-topic' , messages: [j]  ,partition: 0}]
  producer.send(payloads, function (err, data) {
  if (err)
    res.send(err);
    console.log(err)
  res.json(data);
  console.log(payloads);
});	
};
exports.delete_a_SN2_1P5 = function(req, res) {
  da = {"method":"del","model":"SN2_1P5","query":"_id:"+req.params.id,"data":req.body}
  j = JSON.stringify(da);
  payloads = [{ topic: 'post-topic' , messages: [j]  ,partition: 0}]
  producer.send(payloads, function (err, data) {
  if (err)
    res.send(err);
    console.log(err)
  res.json(data);
  console.log(payloads);
});	
};
   
//SN2_1P5_1
exports.create_a_SN2_1P5_1 = function(req, res)  {
  da = {"method":"post","model":"SN2_1P5_1","data":req.body}
  j = JSON.stringify(da);
  payloads = [{ topic: 'post-topic' , messages: [j]  ,partition: 0}]  
  producer.send(payloads, function (err, data) {
    if (err)
      res.send(err);
      console.log(err)
    res.json(data);
    console.log(payloads);
});
};

exports.read_all_SN2_1P5_1 = function(req, res) {
  SN2_1P5_1.find({}, function(err, data) {
    if (err)
      res.send(err);
    res.json(data);
  });
};

exports.read_a_SN2_1P5_1 = function(req, res) {
  SN2_1P5_1.find({_id: req.params.id}, function(err, data) {
    if (err)
      res.send(err);
    res.json(data);
  });
};

exports.update_a_SN2_1P5_1 = function(req, res) {
  da = {"method":"put","model":"SN2_1P5_1","query":"_id:"+req.params.id,"data":req.body}
  j = JSON.stringify(da);
  payloads = [{ topic: 'post-topic' , messages: [j]  ,partition: 0}]
  producer.send(payloads, function (err, data) {
  if (err)
    res.send(err);
    console.log(err)
  res.json(data);
  console.log(payloads);
});	
};

exports.delete_a_SN2_1P5_1 = function(req, res) {
  da = {"method":"del","model":"SN2_1P5_1","query":"_id:"+req.params.id,"data":req.body}
  j = JSON.stringify(da);
  payloads = [{ topic: 'post-topic' , messages: [j]  ,partition: 0}]
  producer.send(payloads, function (err, data) {
  if (err)
    res.send(err);
    console.log(err)
  res.json(data);
  console.log(payloads);
});	
};
   
//SN2_1P5_2
exports.create_a_SN2_1P5_2 = function(req, res)  {
  da = {"method":"post","model":"SN2_1P5_2","data":req.body}
  j = JSON.stringify(da);
  payloads = [{ topic: 'post-topic' , messages: [j]  ,partition: 0}]  
  producer.send(payloads, function (err, data) {
    if (err)
      res.send(err);
      console.log(err)
    res.json(data);
    console.log(payloads);
});
};

exports.read_all_SN2_1P5_2 = function(req, res) {
  SN2_1P5_2.find({}, function(err, data) {
    if (err)
      res.send(err);
    res.json(data);
  });
};

exports.read_a_SN2_1P5_2 = function(req, res) {
  SN2_1P5_2.find({_id: req.params.id}, function(err, data) {
    if (err)
      res.send(err);
    res.json(data);
  });
};

exports.update_a_SN2_1P5_2 = function(req, res) {
  SN2_1P5_2.findOneAndUpdate({_id: req.params.id}, req.body, {new: true}, function(err, data) {
    if (err)
      res.send(err);
    res.json(data);
  });
};

exports.delete_a_SN2_1P5_2 = function(req, res) {
  SN2_1P5_2.remove({_id: req.params.id}, function(err, data) {
    if (err)
      res.send(err);
    res.json({ message: 'SN2_1P5_2 successfully deleted' });
  });
}; 
   
//SN2_1P5_3
exports.create_a_SN2_1P5_3 = function(req, res)  {
  da = {"method":"post","model":"SN2_1P5_3","data":req.body}
  j = JSON.stringify(da);
  payloads = [{ topic: 'post-topic' , messages: [j]  ,partition: 0}]  
  producer.send(payloads, function (err, data) {
    if (err)
      res.send(err);
      console.log(err)
    res.json(data);
    console.log(payloads);
});
};

exports.read_all_SN2_1P5_3 = function(req, res) {
  SN2_1P5_3.find({}, function(err, data) {
    if (err)
      res.send(err);
    res.json(data);
  });
};

exports.read_a_SN2_1P5_3 = function(req, res) {
  SN2_1P5_3.find({_id: req.params.id}, function(err, data) {
    if (err)
      res.send(err);
    res.json(data);
  });
};

exports.update_a_SN2_1P5_3 = function(req, res) {
  da = {"method":"put","model":"SN2_1P5_3","query":"_id:"+req.params.id,"data":req.body}
  j = JSON.stringify(da);
  payloads = [{ topic: 'post-topic' , messages: [j]  ,partition: 0}]
  producer.send(payloads, function (err, data) {
  if (err)
    res.send(err);
    console.log(err)
  res.json(data);
  console.log(payloads);
});	
};

exports.delete_a_SN2_1P5_3 = function(req, res) {
  da = {"method":"del","model":"SN2_1P5_3","query":"_id:"+req.params.id,"data":req.body}
  j = JSON.stringify(da);
  payloads = [{ topic: 'post-topic' , messages: [j]  ,partition: 0}]
  producer.send(payloads, function (err, data) {
  if (err)
    res.send(err);
    console.log(err)
  res.json(data);
  console.log(payloads);
});	
};
    
//SN2_1P5_4
exports.create_a_SN2_1P5_4 = function(req, res)  {
  da = {"method":"post","model":"SN2_1P5_4","data":req.body}
  j = JSON.stringify(da);
  payloads = [{ topic: 'post-topic' , messages: [j]  ,partition: 0}]  
  producer.send(payloads, function (err, data) {
    if (err)
      res.send(err);
      console.log(err)
    res.json(data);
    console.log(payloads);
});
};

exports.read_all_SN2_1P5_4 = function(req, res) {
  SN2_1P5_4.find({}, function(err, data) {
    if (err)
      res.send(err);
    res.json(data);
  });
};

exports.read_a_SN2_1P5_4 = function(req, res) {
  SN2_1P5_4.find({_id: req.params.id}, function(err, data) {
    if (err)
      res.send(err);
    res.json(data);
  });
};

exports.update_a_SN2_1P5_4 = function(req, res) {
  da = {"method":"put","model":"SN2_1P5_4","query":"_id:"+req.params.id,"data":req.body}
  j = JSON.stringify(da);
  payloads = [{ topic: 'post-topic' , messages: [j]  ,partition: 0}]
  producer.send(payloads, function (err, data) {
  if (err)
    res.send(err);
    console.log(err)
  res.json(data);
  console.log(payloads);
});	
};
exports.delete_a_SN2_1P5_4 = function(req, res) {
  da = {"method":"del","model":"SN2_1P5_4","query":"_id:"+req.params.id,"data":req.body}
  j = JSON.stringify(da);
  payloads = [{ topic: 'post-topic' , messages: [j]  ,partition: 0}]
  producer.send(payloads, function (err, data) {
  if (err)
    res.send(err);
    console.log(err)
  res.json(data);
  console.log(payloads);
});	
};
        
//SN2_1P5_5
exports.create_a_SN2_1P5_5 = function(req, res)  {
  da = {"method":"post","model":"SN2_1P5_5","data":req.body}
  j = JSON.stringify(da);
  payloads = [{ topic: 'post-topic' , messages: [j]  ,partition: 0}]  
  producer.send(payloads, function (err, data) {
    if (err)
      res.send(err);
      console.log(err)
    res.json(data);
    console.log(payloads);
});
};

exports.read_all_SN2_1P5_5 = function(req, res) {
  SN2_1P5_5.find({}, function(err, data) {
    if (err)
      res.send(err);
    res.json(data);
  });
};

exports.read_a_SN2_1P5_5 = function(req, res) {
  SN2_1P5_5.find({_id: req.params.id}, function(err, data) {
    if (err)
      res.send(err);
    res.json(data);
  });
};

exports.update_a_SN2_1P5_5 = function(req, res) {
  da = {"method":"put","model":"SN2_1P5_5","query":"_id:"+req.params.id,"data":req.body}
  j = JSON.stringify(da);
  payloads = [{ topic: 'post-topic' , messages: [j]  ,partition: 0}]
  producer.send(payloads, function (err, data) {
  if (err)
    res.send(err);
    console.log(err)
  res.json(data);
  console.log(payloads);
});	
};

exports.delete_a_SN2_1P5_5 = function(req, res) {
  da = {"method":"del","model":"SN2_1P5_5","query":"_id:"+req.params.id,"data":req.body}
  j = JSON.stringify(da);
  payloads = [{ topic: 'post-topic' , messages: [j]  ,partition: 0}]
  producer.send(payloads, function (err, data) {
  if (err)
    res.send(err);
    console.log(err)
  res.json(data);
  console.log(payloads);
});	
};
   
//SN2_1P5_6
exports.create_a_SN2_1P5_6 = function(req, res)  {
  da = {"method":"post","model":"SN2_1P5_6","data":req.body}
  j = JSON.stringify(da);
  payloads = [{ topic: 'post-topic' , messages: [j]  ,partition: 0}]  
  producer.send(payloads, function (err, data) {
    if (err)
      res.send(err);
      console.log(err)
    res.json(data);
    console.log(payloads);
});
};

exports.read_all_SN2_1P5_6 = function(req, res) {
  SN2_1P5_6.find({}, function(err, data) {
    if (err)
      res.send(err);
    res.json(data);
  });
};

exports.read_a_SN2_1P5_6 = function(req, res) {
  SN2_1P5_6.find({_id: req.params.id}, function(err, data) {
    if (err)
      res.send(err);
    res.json(data);
  });
};

exports.update_a_SN2_1P5_6 = function(req, res) {
  da = {"method":"put","model":"SN2_1P5_6","query":"_id:"+req.params.id,"data":req.body}
  j = JSON.stringify(da);
  payloads = [{ topic: 'post-topic' , messages: [j]  ,partition: 0}]
  producer.send(payloads, function (err, data) {
  if (err)
    res.send(err);
    console.log(err)
  res.json(data);
  console.log(payloads);
});	
};

exports.delete_a_SN2_1P5_6 = function(req, res) {
  da = {"method":"del","model":"SN2_1P5_6","query":"_id:"+req.params.id,"data":req.body}
  j = JSON.stringify(da);
  payloads = [{ topic: 'post-topic' , messages: [j]  ,partition: 0}]
  producer.send(payloads, function (err, data) {
  if (err)
    res.send(err);
    console.log(err)
  res.json(data);
  console.log(payloads);
});	
};
     
//SN2_1P5_7
exports.create_a_SN2_1P5_7 = function(req, res)  {
  da = {"method":"post","model":"SN2_1P5_7","data":req.body}
  j = JSON.stringify(da);
  payloads = [{ topic: 'post-topic' , messages: [j]  ,partition: 0}]  
  producer.send(payloads, function (err, data) {
    if (err)
      res.send(err);
      console.log(err)
    res.json(data);
    console.log(payloads);
});
};

exports.read_all_SN2_1P5_7 = function(req, res) {
  SN2_1P5_7.find({}, function(err, data) {
    if (err)
      res.send(err);
    res.json(data);
  });
};

exports.read_a_SN2_1P5_7 = function(req, res) {
  SN2_1P5_7.find({_id: req.params.id}, function(err, data) {
    if (err)
      res.send(err);
    res.json(data);
  });
};

exports.update_a_SN2_1P5_7 = function(req, res) {
  da = {"method":"put","model":"SN2_1P5_7","query":"_id:"+req.params.id,"data":req.body}
  j = JSON.stringify(da);
  payloads = [{ topic: 'post-topic' , messages: [j]  ,partition: 0}]
  producer.send(payloads, function (err, data) {
  if (err)
    res.send(err);
    console.log(err)
  res.json(data);
  console.log(payloads);
});	
};

exports.delete_a_SN2_1P5_7 = function(req, res) {
  da = {"method":"del","model":"SN2_1P5_7","query":"_id:"+req.params.id,"data":req.body}
  j = JSON.stringify(da);
  payloads = [{ topic: 'post-topic' , messages: [j]  ,partition: 0}]
  producer.send(payloads, function (err, data) {
  if (err)
    res.send(err);
    console.log(err)
  res.json(data);
  console.log(payloads);
});	
};
       
//SN2_1P6
exports.create_a_SN2_1P6 = function(req, res)  {
  da = {"method":"post","model":"SN2_1P6","data":req.body}
  j = JSON.stringify(da);
  payloads = [{ topic: 'post-topic' , messages: [j]  ,partition: 0}]  
  producer.send(payloads, function (err, data) {
    if (err)
      res.send(err);
      console.log(err)
    res.json(data);
    console.log(payloads);
});
};

exports.read_all_SN2_1P6 = function(req, res) {
  SN2_1P6.find({}, function(err, data) {
    if (err)
      res.send(err);
    res.json(data);
  });
};

exports.read_a_SN2_1P6 = function(req, res) {
  SN2_1P6.find({_id: req.params.id}, function(err, data) {
    if (err)
      res.send(err);
    res.json(data);
  });
};

exports.update_a_SN2_1P6 = function(req, res) {
  da = {"method":"put","model":"SN2_1P6","query":"_id:"+req.params.id,"data":req.body}
  j = JSON.stringify(da);
  payloads = [{ topic: 'post-topic' , messages: [j]  ,partition: 0}]
  producer.send(payloads, function (err, data) {
  if (err)
    res.send(err);
    console.log(err)
  res.json(data);
  console.log(payloads);
});	
};

exports.delete_a_SN2_1P6 = function(req, res) {
  da = {"method":"del","model":"SN2_1P6","query":"_id:"+req.params.id,"data":req.body}
  j = JSON.stringify(da);
  payloads = [{ topic: 'post-topic' , messages: [j]  ,partition: 0}]
  producer.send(payloads, function (err, data) {
  if (err)
    res.send(err);
    console.log(err)
  res.json(data);
  console.log(payloads);
});	
};
  
//Pool
exports.create_a_Pool = function(req, res)  {
  da = {"method":"post","model":"Pool","data":req.body}
  j = JSON.stringify(da);
  payloads = [{ topic: 'post-topic' , messages: [j]  ,partition: 0}]  
  producer.send(payloads, function (err, data) {
    if (err)
      res.send(err);
      console.log(err)
    res.json(data);
    console.log(payloads);
});
};

exports.read_all_Pool = function(req, res) {
  Pool.find({}, function(err, data) {
    if (err)
      res.send(err);
    res.json(data);
  });
};

exports.read_a_Pool = function(req, res) {
  Pool.find({_id: req.params.id}, function(err, data) {
    if (err)
      res.send(err);
    res.json(data);
  });
};

exports.update_a_Pool = function(req, res) {
  da = {"method":"put","model":"Pool","query":"_id:"+req.params.id,"data":req.body}
  j = JSON.stringify(da);
  payloads = [{ topic: 'post-topic' , messages: [j]  ,partition: 0}]
  producer.send(payloads, function (err, data) {
  if (err)
    res.send(err);
    console.log(err)
  res.json(data);
  console.log(payloads);
});	
};

exports.delete_a_Pool = function(req, res) {
  da = {"method":"del","model":"Pool","query":"_id:"+req.params.id,"data":req.body}
  j = JSON.stringify(da);
  payloads = [{ topic: 'post-topic' , messages: [j]  ,partition: 0}]
  producer.send(payloads, function (err, data) {
  if (err)
    res.send(err);
    console.log(err)
  res.json(data);
  console.log(payloads);
});	
};
        
//Pump
exports.create_a_Pump = function(req, res)  {
  da = {"method":"post","model":"Pump","data":req.body}
  j = JSON.stringify(da);
  payloads = [{ topic: 'post-topic' , messages: [j]  ,partition: 0}]  
  producer.send(payloads, function (err, data) {
    if (err)
      res.send(err);
      console.log(err)
    res.json(data);
    console.log(payloads);
});
};

exports.read_all_Pump = function(req, res) {
  Pump.find({}, function(err, data) {
    if (err)
      res.send(err);
    res.json(data);
  });
};

exports.read_a_Pump = function(req, res) {
  Pump.find({_id: req.params.id}, function(err, data) {
    if (err)
      res.send(err);
    res.json(data);
  });
};

exports.update_a_Pump = function(req, res) {
  da = {"method":"put","model":"Pump","query":"_id:"+req.params.id,"data":req.body}
  j = JSON.stringify(da);
  payloads = [{ topic: 'post-topic' , messages: [j]  ,partition: 0}]
  producer.send(payloads, function (err, data) {
  if (err)
    res.send(err);
    console.log(err)
  res.json(data);
  console.log(payloads);
});	
};

exports.delete_a_Pump = function(req, res) {
  da = {"method":"del","model":"Pump","query":"_id:"+req.params.id,"data":req.body}
  j = JSON.stringify(da);
  payloads = [{ topic: 'post-topic' , messages: [j]  ,partition: 0}]
  producer.send(payloads, function (err, data) {
  if (err)
    res.send(err);
    console.log(err)
  res.json(data);
  console.log(payloads);
});	
};

//SN2_2P0

exports.create_a_SN2_2P0 = function(req, res)  {
  da = {"method":"post","model":"SN2_2P0","data":req.body}
  j = JSON.stringify(da);
  payloads = [{ topic: 'post-topic' , messages: [j]  ,partition: 0}]  
  producer.send(payloads, function (err, data) {
    if (err)
      res.send(err);
      console.log(err)
    res.json(data);
    console.log(payloads);
});
};

exports.read_all_SN2_2P0 = function(req, res) {
  SN2_2P0.find({}, function(err, data) {
    if (err)
      res.send(err);
    res.json(data);
  });
};

exports.read_a_SN2_2P0 = function(req, res) {
  SN2_2P0.find({_id: req.params.id}, function(err, data) {
    if (err)
      res.send(err);
    res.json(data);
  });
};

exports.update_a_SN2_2P0 = function(req, res) {
  da = {"method":"put","model":"SN2_2P0","query":"_id:"+req.params.id,"data":req.body}
  j = JSON.stringify(da);
  payloads = [{ topic: 'post-topic' , messages: [j]  ,partition: 0}]
  producer.send(payloads, function (err, data) {
  if (err)
    res.send(err);
    console.log(err)
  res.json(data);
  console.log(payloads);
});	
};

exports.delete_a_SN2_2P0 = function(req, res) {
  da = {"method":"del","model":"SN2_2P0","query":"_id:"+req.params.id,"data":req.body}
  j = JSON.stringify(da);
  payloads = [{ topic: 'post-topic' , messages: [j]  ,partition: 0}]
  producer.send(payloads, function (err, data) {
  if (err)
    res.send(err);
    console.log(err)
  res.json(data);
  console.log(payloads);
});	
};

//SN2_2

exports.create_a_SN2_2 = function(req, res)  {
  da = {"method":"post","model":"SN2_2","data":req.body}
  j = JSON.stringify(da);
  payloads = [{ topic: 'post-topic' , messages: [j]  ,partition: 0}]  
  producer.send(payloads, function (err, data) {
    if (err)
      res.send(err);
      console.log(err)
    res.json(data);
    console.log(payloads);
});
};
exports.read_all_SN2_2 = function(req, res) {
  SN2_2.find({}, function(err, data) {
    if (err)
      res.send(err);
    res.json(data);
  });
};

exports.read_a_SN2_2 = function(req, res) {
  SN2_2.find({_id: req.params.id}, function(err, data) {
    if (err)
      res.send(err);
    res.json(data);
  });
};

exports.update_a_SN2_2 = function(req, res) {
  da = {"method":"put","model":"SN2_2","query":"_id:"+req.params.id,"data":req.body}
  j = JSON.stringify(da);
  payloads = [{ topic: 'post-topic' , messages: [j]  ,partition: 0}]
  producer.send(payloads, function (err, data) {
  if (err)
    res.send(err);
    console.log(err)
  res.json(data);
  console.log(payloads);
});	
};

exports.delete_a_SN2_2 = function(req, res) {
  da = {"method":"del","model":"SN2_2","query":"_id:"+req.params.id,"data":req.body}
  j = JSON.stringify(da);
  payloads = [{ topic: 'post-topic' , messages: [j]  ,partition: 0}]
  producer.send(payloads, function (err, data) {
  if (err)
    res.send(err);
    console.log(err)
  res.json(data);
  console.log(payloads);
});	
};

//SN2_2P1_3

exports.create_a_SN2_2P1_3 = function(req, res)  {
  da = {"method":"post","model":"SN2_2P1_3","data":req.body}
  j = JSON.stringify(da);
  payloads = [{ topic: 'post-topic' , messages: [j]  ,partition: 0}]  
  producer.send(payloads, function (err, data) {
    if (err)
      res.send(err);
      console.log(err)
    res.json(data);
    console.log(payloads);
});
};

exports.read_all_SN2_2P1_3 = function(req, res) {
  SN2_2P1_3.find({}, function(err, data) {
    if (err)
      res.send(err);
    res.json(data);
  });
};

exports.read_a_SN2_2P1_3 = function(req, res) {
  SN2_2P1_3.find({_id: req.params.id}, function(err, data) {
    if (err)
      res.send(err);
    res.json(data);
  });
};

exports.update_a_SN2_2P1_3 = function(req, res) {
  da = {"method":"put","model":"SN2_2P1_3","query":"_id:"+req.params.id,"data":req.body}
  j = JSON.stringify(da);
  payloads = [{ topic: 'post-topic' , messages: [j]  ,partition: 0}]
  producer.send(payloads, function (err, data) {
  if (err)
    res.send(err);
    console.log(err)
  res.json(data);
  console.log(payloads);
});	
};

exports.delete_a_SN2_2P1_3 = function(req, res) {
  da = {"method":"del","model":"SN2_2P1_3","query":"_id:"+req.params.id,"data":req.body}
  j = JSON.stringify(da);
  payloads = [{ topic: 'post-topic' , messages: [j]  ,partition: 0}]
  producer.send(payloads, function (err, data) {
  if (err)
    res.send(err);
    console.log(err)
  res.json(data);
  console.log(payloads);
});	
};


//SN2_2P1_5

exports.create_a_SN2_2P1_5 = function(req, res)  {
  da = {"method":"post","model":"SN2_2P1_5","data":req.body}
  j = JSON.stringify(da);
  payloads = [{ topic: 'post-topic' , messages: [j]  ,partition: 0}]  
  producer.send(payloads, function (err, data) {
    if (err)
      res.send(err);
      console.log(err)
    res.json(data);
    console.log(payloads);
});
};

exports.read_all_SN2_2P1_5 = function(req, res) {
  SN2_2P1_5.find({}, function(err, data) {
    if (err)
      res.send(err);
    res.json(data);
  });
};

exports.read_a_SN2_2P1_5 = function(req, res) {
  SN2_2P1_5.find({_id: req.params.id}, function(err, data) {
    if (err)
      res.send(err);
    res.json(data);
  });
};

exports.update_a_SN2_2P1_5 = function(req, res) {
  da = {"method":"put","model":"SN2_2P1_5","query":"_id:"+req.params.id,"data":req.body}
  j = JSON.stringify(da);
  payloads = [{ topic: 'post-topic' , messages: [j]  ,partition: 0}]
  producer.send(payloads, function (err, data) {
  if (err)
    res.send(err);
    console.log(err)
  res.json(data);
  console.log(payloads);
});	
};

exports.delete_a_SN2_2P1_5 = function(req, res) {
  da = {"method":"del","model":"SN2_2P1_5","query":"_id:"+req.params.id,"data":req.body}
  j = JSON.stringify(da);
  payloads = [{ topic: 'post-topic' , messages: [j]  ,partition: 0}]
  producer.send(payloads, function (err, data) {
  if (err)
    res.send(err);
    console.log(err)
  res.json(data);
  console.log(payloads);
});	
};


//SN2_2P2

exports.create_a_SN2_2P2 = function(req, res)  {
  da = {"method":"post","model":"SN2_2P2","data":req.body}
  j = JSON.stringify(da);
  payloads = [{ topic: 'post-topic' , messages: [j]  ,partition: 0}]  
  producer.send(payloads, function (err, data) {
    if (err)
      res.send(err);
      console.log(err)
    res.json(data);
    console.log(payloads);
});
};

exports.read_all_SN2_2P2 = function(req, res) {
  SN2_2P2.find({}, function(err, data) {
    if (err)
      res.send(err);
    res.json(data);
  });
};

exports.read_a_SN2_2P2 = function(req, res) {
  SN2_2P2.find({_id: req.params.id}, function(err, data) {
    if (err)
      res.send(err);
    res.json(data);
  });
};

exports.update_a_SN2_2P2 = function(req, res) {
  da = {"method":"put","model":"SN2_2P2","query":"_id:"+req.params.id,"data":req.body}
  j = JSON.stringify(da);
  payloads = [{ topic: 'post-topic' , messages: [j]  ,partition: 0}]
  producer.send(payloads, function (err, data) {
  if (err)
    res.send(err);
    console.log(err)
  res.json(data);
  console.log(payloads);
});	
};

exports.delete_a_SN2_2P2 = function(req, res) {
  da = {"method":"del","model":"SN2_2P2","query":"_id:"+req.params.id,"data":req.body}
  j = JSON.stringify(da);
  payloads = [{ topic: 'post-topic' , messages: [j]  ,partition: 0}]
  producer.send(payloads, function (err, data) {
  if (err)
    res.send(err);
    console.log(err)
  res.json(data);
  console.log(payloads);
});	
};

//page
exports.getHomePage = function(req, res) {
  res.sendFile(path.join(__dirname +'/index.html'));
}

exports.get_all_ea = function(req,res) {
  area.find({}, function(err, data) {
    if (err)
      res.send(err);
    res.json(data);
  });
};

exports.get_all_user = function(req,res) {
  user.find({}, function(err, data) {
    if (err)
      res.send(err);
    res.json(data);
  });
};

exports.insert_user = function(req,res) {
  da = {"method":"post","model":"User","data":req.body}
  j = JSON.stringify(da);
  payloads = [{ topic: 'post-topic' , messages: [j]  ,partition: 0}]  
  producer.send(payloads, function (err, data) {
    if (err)
      res.send(err);
      console.log(err)
    res.json(data);
    console.log(payloads);
});
};

exports.update_user = function(req,res) {
  user.updateOne({'USERID':req.params.USERID},req.body, function(err,data) {
    if (err)
      res.send(err);
    res.json(data);
  });
};

exports.delete_user = function(req ,res) {
  user.deleteOne({'USERID':req.params.USERID},function(err, data) {
    if (err)
      res.send(err);
    res.json(data);
  });
};

exports.insert_ea = function(req,res) {
  da = {"method":"post","model":"Area","data":req.body}
  j = JSON.stringify(da);
  payloads = [{ topic: 'post-topic' , messages: [j]  ,partition: 0}]  
  producer.send(payloads, function (err, data) {
    if (err)
      res.send(err);
      console.log(err)
    res.json(data);
    console.log(payloads);
});
};

exports.update_ea = function(req,res) {
  area.updateOne({'REG':req.params.REG, 'CWT':req.params.CWT, 'AMP':req.params.AMP, 'TAM':req.params.TAM, 'DISTRICT':req.params.DISTRICT, 'EA':req.params.EA,},req.body, function(err,data) {
    if (err)
      res.send(err);
    res.json(data);
  });
};

exports.delete_ea = function(req ,res) {
  area.deleteOne(req.body,function(err, data) {
    if (err)
      res.send(err);
    res.json(data);
  });
};

exports.getEaByCWT = function(req,res) {
  area.find(req.body,function(err,data){
    if (err)
      res.send(err);
    res.json(data);
  });
};

exports.getEaByFS = function(req,res) {
  area.find(req.body,function(err,data){
    if (err)
      res.send(err);
    res.json(data);
  });
};

exports.getEaByFI = function(req,res) {
  area.find(req.body,function(err,data){
    if (err)
      res.send(err);
    res.json(data);
  });
};

exports.getUserLowerRole = function(req,res){
  user.find({"TID":{'$gt':role}}, function(err,data){
    if (err)
      res.send(err);
    res.json(data);
  });
};

exports.getUserByArea = function(req,res){
  user.find(req.body,function(err,data){
    if (err)
      res.send(err);
    res.json(data);
  });
};

exports.getUserLowerRoleArea = function(req,res){
  user.find({'CWT':req.params.CWT,'TID':{'$gt':req.params.TID}}, function(err,data){
    if (err)
      res.send(err);
    res.json(data);
  });
};

exports.getUserRoleArea = function(req,res){
  user.find({'CWT':req.params.CWT,'TID':req.params.TID}, function(err,data){
    if (err)
      res.send(err);
    res.json(data);
  });
};

exports.getUserByIDPWD = function(req,res) {
  user.find({USERID:req.body.USERID,PASSWORD:req.body.PASSWORD}, function(err,data){
    if (err)
      res.send(err);
    res.json(data);
  });
};

exports.getUserByID = function(req,res) {
  user.find(req.body,{EMAIL:1}, function(err,data){
    if (err)
      res.send(err);
    res.json(data);
  });
};

exports.insert_tablet = function(req,res) {
  da = {"method":"post","model":"Tablet","data":req.body}
  j = JSON.stringify(da);
  payloads = [{ topic: 'post-topic' , messages: [j]  ,partition: 0}]  
  producer.send(payloads, function (err, data) {
    if (err)
      res.send(err);
      console.log(err)
    res.json(data);
    console.log(payloads);
});
};

exports.update_tablet = function(req,res){
  tablet.updateOne({'tablet_sn':req.params.tablet_sn},req.body, function(err,data){
    if (err)
      res.send(err);
    res.json(data);
  });
};




producer.on('ready',function(){ 
  kafkaConnected = true;
     console.log("kafka producer is connected");
     payloads = [{ topic: 'post-topic' , messages: 'asdasd' ,partition: 0}] 
  producer.on('error', function (err) {});
});
