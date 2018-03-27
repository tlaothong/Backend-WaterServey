var path = require('path')
var mongoose = require('mongoose'),
user            = mongoose.model('User'),
region          = mongoose.model('Region'),
chagwat         = mongoose.model('Changwat'),
amphoe          = mongoose.model('Amphoe'),
tambon          = mongoose.model('Tambon'),
district        = mongoose.model('District'),
enumerationArea = mongoose.model('EnumerationArea'),
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
  var newUser = new user(req.body);  
  newUser.save(function(err, data) {
    if (err)
      res.send(err);
    res.json(data)
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
  user.findOneAndUpdate({_id: req.params.id}, req.body, {new: true}, function(err, data) {
    if (err)
      res.send(err);
    res.json(data);
  });
};

exports.delete_a_user = function(req, res) {
  user.remove({_id: req.params.id}, function(err, data) {
    if (err)
      res.send(err);
    res.json({ message: 'User successfully deleted' });
  });
};


//region
exports.create_a_region = function(req, res)  {
  var myData = new region(req.body);
    myData.save(function(err, data) {
      if (err)
        res.send(err);
      res.json(data);
  });
};

exports.read_all_region = function(req, res) {
  region.find({}, function(err, data) {
    if (err)
      res.send(err);
    res.json(data);
  });
};

exports.read_a_region = function(req, res) {
  region.find({_id: req.params.id}, function(err, data) {
    if (err)
      res.send(err);
    res.json(data);
  });
};

exports.update_a_region = function(req, res) {
  user.findOneAndUpdate({_id: req.params.id}, req.body, {new: true}, function(err, data) {
    if (err)
      res.send(err);
    res.json(data);
  });
};

exports.delete_a_region = function(req, res) {
  region.remove({_id: req.params.id}, function(err, data) {
    if (err)
      res.send(err);
    res.json({ message: 'Region successfully deleted' });
  });
};
//chagwat
exports.create_a_changwat = function(req, res)  {
  var myData = new chagwat(req.body);
    myData.save(function(err, data) {
      if (err)
        res.send(err);
      res.json(data);
  });
};

exports.read_all_changwat = function(req, res) {
  chagwat.find({}, function(err, data) {
    if (err)
      res.send(err);
    res.json(data);
  });
};

exports.read_a_changwat = function(req, res) {
  changwat.find({_id: req.params.id}, function(err, data) {
    if (err)
      res.send(err);
    res.json(data);
  });
};

exports.update_a_changwat = function(req, res) {
  changwat.findOneAndUpdate({_id: req.params.id}, req.body, {new: true}, function(err, data) {
    if (err)
      res.send(err);
    res.json(data);
  });
};

exports.delete_a_changwat = function(req, res) {
  changwat.remove({_id: req.params.id}, function(err, data) {
    if (err)
      res.send(err);
    res.json({ message: 'changwat successfully deleted' });
  });
};

//amphoe
exports.create_a_amphoe = function(req, res)  {
  var myData = new amphoe(req.body);
    myData.save(function(err, data) {
      if (err)
        res.send(err);
      res.json(data);
  });
};

exports.read_all_amphoe = function(req, res) {
  amphoe.find({}, function(err, data) {
    if (err)
      res.send(err);
    res.json(data);
  });
};
exports.read_a_amphoe = function(req, res) {
  amphoe.find({_id: req.params.id}, function(err, data) {
    if (err)
      res.send(err);
    res.json(data);
  });
};

exports.update_a_amphoe = function(req, res) {
  amphoe.findOneAndUpdate({_id: req.params.id}, req.body, {new: true}, function(err, data) {
    if (err)
      res.send(err);
    res.json(data);
  });
};

exports.delete_a_amphoe = function(req, res) {
  amphoe.remove({_id: req.params.id}, function(err, data) {
    if (err)
      res.send(err);
    res.json({ message: 'amphoe successfully deleted' });
  });
};

//tambon
exports.create_a_tambon = function(req, res)  {
  var myData = new tambon(req.body);
    myData.save(function(err, data) {
      if (err)
        res.send(err);
      res.json(data);
  });
};

exports.read_all_tambon = function(req, res) {
  tambon.find({}, function(err, data) {
    if (err)
      res.send(err);
    res.json(data);
  });
};

exports.read_a_tambon = function(req, res) {
  tambon.find({_id: req.params.id}, function(err, data) {
    if (err)
      res.send(err);
    res.json(data);
  });
};

exports.update_a_tambon = function(req, res) {
  tambon.findOneAndUpdate({_id: req.params.id}, req.body, {new: true}, function(err, data) {
    if (err)
      res.send(err);
    res.json(data);
  });
};

exports.delete_a_tambon = function(req, res) {
  tambon.remove({_id: req.params.id}, function(err, data) {
    if (err)
      res.send(err);
    res.json({ message: 'tambon successfully deleted' });
  });
};

//district
exports.create_a_district = function(req, res)  {
  var myData = new district(req.body);
    myData.save(function(err, data) {
      if (err)
        res.send(err);
      res.json(data);
  });
};

exports.read_all_district = function(req, res) {
  district.find({}, function(err, data) {
    if (err)
      res.send(err);
    res.json(data);
  });
};

exports.read_a_district = function(req, res) {
  district.find({_id: req.params.id}, function(err, data) {
    if (err)
      res.send(err);
    res.json(data);
  });
};

exports.update_a_district = function(req, res) {
  district.findOneAndUpdate({_id: req.params.id}, req.body, {new: true}, function(err, data) {
    if (err)
      res.send(err);
    res.json(data);
  });
};

exports.delete_a_district = function(req, res) {
  district.remove({_id: req.params.id}, function(err, data) {
    if (err)
      res.send(err);
    res.json({ message: 'district successfully deleted' });
  });
};

//enumerationArea
exports.create_a_enumerationArea = function(req, res)  {
  var myData = new enumerationArea(req.body);
    myData.save(function(err, data) {
      if (err)
        res.send(err);
      res.json(data);
  });
};

exports.read_all_enumerationArea = function(req, res) {
  enumerationArea.find({}, function(err, data) {
    if (err)
      res.send(err);
    res.json(data);
  });
};

exports.read_a_enumerationArea = function(req, res) {
  enumerationArea.find({_id: req.params.id}, function(err, data) {
    if (err)
      res.send(err);
    res.json(data);
  });
};

exports.update_a_enumerationArea = function(req, res) {
  enumerationArea.findOneAndUpdate({_id: req.params.id}, req.body, {new: true}, function(err, data) {
    if (err)
      res.send(err);
    res.json(data);
  });
};

exports.delete_a_enumerationArea = function(req, res) {
  enumerationArea.remove({_id: req.params.id}, function(err, data) {
    if (err)
      res.send(err);
    res.json({ message: 'enumerationArea successfully deleted' });
  });
};

//area

exports.create_a_area = function(req, res)  {
  var myData = new area (req.body);
    myData.save(function(err, data) {
      if (err)
        res.send(err);
      res.json(data);
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
  area.findOneAndUpdate({_id: req.params.id}, req.body, {new: true}, function(err, data) {
    if (err)
      res.send(err);
    res.json(data);
  });
};

exports.delete_a_area = function(req, res) {
  area.remove({_id: req.params.id}, function(err, data) {
    if (err)
      res.send(err);
    res.json({ message: 'area successfully deleted' });
  });
};

//tablet

exports.create_a_tablet = function(req, res)  {
  var myData = new tablet(req.body);
    myData.save(function(err, data) {
      if (err)
        res.send(err);
      res.json(data);
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
  tablet.findOneAndUpdate({_id: req.params.id}, req.body, {new: true}, function(err, data) {
    if (err)
      res.send(err);
    res.json(data);
  });
};

exports.delete_a_tablet = function(req, res) {
  tablet.remove({_id: req.params.id}, function(err, data) {
    if (err)
      res.send(err);
    res.json({ message: 'tablet successfully deleted' });
  });
};

//Progress

exports.create_a_progress = function(req, res)  {
  var myData = new progress(req.body);
    myData.save(function(err, data) {
      if (err)
        res.send(err);
      res.json(data);
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
  progress.findOneAndUpdate({_id: req.params.id}, req.body, {new: true}, function(err, data) {
    if (err)
      res.send(err);
    res.json(data);
  });
};

exports.delete_a_progress = function(req, res) {
  progress.remove({_id: req.params.id}, function(err, data) {
    if (err)
      res.send(err);
    res.json({ message: 'progress successfully deleted' });
  });
};

//SN1

exports.create_a_SN1 = function(req, res)  {
  var myData = new SN1(req.body);
    myData.save(function(err, data) {
      if (err)
        res.send(err);
      res.json(data);
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
  SN1.findOneAndUpdate({_id: req.params.id}, req.body, {new: true}, function(err, data) {
    if (err)
      res.send(err);
    res.json(data);
  });
};

exports.delete_a_SN1 = function(req, res) {
  SN1.remove({_id: req.params.id}, function(err, data) {
    if (err)
      res.send(err);
    res.json({ message: 'SN1 successfully deleted' });
  });
};

//SN1P1
exports.create_a_SN1P1 = function(req, res)  {
  var myData = new SN1P1(req.body);
    myData.save(function(err, data) {
      if (err)
        res.send(err);
      res.json(data);
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
  SN1P1.findOneAndUpdate({_id: req.params.id}, req.body, {new: true}, function(err, data) {
    if (err)
      res.send(err);
    res.json(data);
  });
};

exports.delete_a_SN1P1 = function(req, res) {
  SN1P1.remove({_id: req.params.id}, function(err, data) {
    if (err)
      res.send(err);
    res.json({ message: 'SN1P1 successfully deleted' });
  });
};

//SN1P2 
exports.create_a_SN1P2 = function(req, res)  {
  var myData = new SN1P2(req.body);
    myData.save(function(err, data) {
      if (err)
        res.send(err);
      res.json(data);
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
  SN1P2.findOneAndUpdate({_id: req.params.id}, req.body, {new: true}, function(err, data) {
    if (err)
      res.send(err);
    res.json(data);
  });
};

exports.delete_a_SN1P2 = function(req, res) {
  SN1P2.remove({_id: req.params.id}, function(err, data) {
    if (err)
      res.send(err);
    res.json({ message: 'SN1P2 successfully deleted' });
  });
};

//wc21_1
exports.create_a_SN1P3 = function(req, res)  {
  var myData = new SN1P3(req.body);
    myData.save(function(err, data) {
      if (err)
        res.send(err);
      res.json(data);
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
  SN1P3.findOneAndUpdate({_id: req.params.id}, req.body, {new: true}, function(err, data) {
    if (err)
      res.send(err);
    res.json(data);
  });
};

exports.delete_a_SN1P3 = function(req, res) {
  SN1P3.remove({_id: req.params.id}, function(err, data) {
    if (err)
      res.send(err);
    res.json({ message: 'SN1P3 successfully deleted' });
  });
};  

//SN2_1       
exports.create_a_SN2_1 = function(req, res)  {
  var myData = new SN2_1(req.body);
    myData.save(function(err, data) {
      if (err)
        res.send(err);
      res.json(data);
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
  SN2_1.findOneAndUpdate({_id: req.params.id}, req.body, {new: true}, function(err, data) {
    if (err)
      res.send(err);
    res.json(data);
  });
};

exports.delete_a_SN2_1 = function(req, res) {
  SN2_1.remove({_id: req.params.id}, function(err, data) {
    if (err)
      res.send(err);
    res.json({ message: 'SN2_1 successfully deleted' });
  });
}; 

//SN2_1P1
exports.create_a_SN2_1P1 = function(req, res)  {
  var myData = new SN2_1P1(req.body);
    myData.save(function(err, data) {
      if (err)
        res.send(err);
      res.json(data);
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
  SN2_1P1.findOneAndUpdate({_id: req.params.id}, req.body, {new: true}, function(err, data) {
    if (err)
      res.send(err);
    res.json(data);
  });
};

exports.delete_a_SN2_1P1 = function(req, res) {
  SN2_1P1.remove({_id: req.params.id}, function(err, data) {
    if (err)
      res.send(err);
    res.json({ message: 'SN2_1P1 successfully deleted' });
  });
}; 
        
//SN2_1P2
exports.create_a_SN2_1P2 = function(req, res)  {
  var myData = new SN2_1P2(req.body);
    myData.save(function(err, data) {
      if (err)
        res.send(err);
      res.json(data);
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
  SN2_1P2.findOneAndUpdate({_id: req.params.id}, req.body, {new: true}, function(err, data) {
    if (err)
      res.send(err);
    res.json(data);
  });
};

exports.delete_a_SN2_1P2 = function(req, res) {
  SN2_1P2.remove({_id: req.params.id}, function(err, data) {
    if (err)
      res.send(err);
    res.json({ message: 'SN2_1P2 successfully deleted' });
  });
}; 
         
//SN2_1P2_1
exports.create_a_SN2_1P2_1 = function(req, res)  {
  var myData = new SN2_1P2_1(req.body);
    myData.save(function(err, data) {
      if (err)
        res.send(err);
      res.json(data);
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
  SN2_1P2_1.findOneAndUpdate({_id: req.params.id}, req.body, {new: true}, function(err, data) {
    if (err)
      res.send(err);
    res.json(data);
  });
};

exports.delete_a_SN2_1P2_1 = function(req, res) {
  SN2_1P2_1.remove({_id: req.params.id}, function(err, data) {
    if (err)
      res.send(err);
    res.json({ message: 'SN2_1P2_1 successfully deleted' });
  });
}; 

//SN2_1P2_2
exports.create_a_SN2_1P2_2 = function(req, res)  {
  var myData = new SN2_1P2_2(req.body);
    myData.save(function(err, data) {
      if (err)
        res.send(err);
      res.json(data);
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
  SN2_1P2_2.findOneAndUpdate({_id: req.params.id}, req.body, {new: true}, function(err, data) {
    if (err)
      res.send(err);
    res.json(data);
  });
};

exports.delete_a_SN2_1P2_2 = function(req, res) {
  SN2_1P2_2.remove({_id: req.params.id}, function(err, data) {
    if (err)
      res.send(err);
    res.json({ message: 'SN2_1P2_2 successfully deleted' });
  });
}; 

//SN2_1P2_3
exports.create_a_SN2_1P2_3 = function(req, res)  {
  var myData = new SN2_1P2_3(req.body);
    myData.save(function(err, data) {
      if (err)
        res.send(err);
      res.json(data);
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
  SN2_1P2_3.findOneAndUpdate({_id: req.params.id}, req.body, {new: true}, function(err, data) {
    if (err)
      res.send(err);
    res.json(data);
  });
};

exports.delete_a_SN2_1P2_3 = function(req, res) {
  SN2_1P2_3.remove({_id: req.params.id}, function(err, data) {
    if (err)
      res.send(err);
    res.json({ message: 'SN2_1P2_3 successfully deleted' });
  });
}; 

//SN2_1P2_4
exports.create_a_SN2_1P2_4 = function(req, res)  {
  var myData = new SN2_1P2_4(req.body);
    myData.save(function(err, data) {
      if (err)
        res.send(err);
      res.json(data);
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
  SN2_1P2_4.findOneAndUpdate({_id: req.params.id}, req.body, {new: true}, function(err, data) {
    if (err)
      res.send(err);
    res.json(data);
  });
};

exports.delete_a_SN2_1P2_4 = function(req, res) {
  SN2_1P2_4.remove({_id: req.params.id}, function(err, data) {
    if (err)
      res.send(err);
    res.json({ message: 'SN2_1P2_4 successfully deleted' });
  });
}; 
    
//SN2_1P2_5
exports.create_a_SN2_1P2_5 = function(req, res)  {
  var myData = new SN2_1P2_5(req.body);
    myData.save(function(err, data) {
      if (err)
        res.send(err);
      res.json(data);
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
  SN2_1P2_5.findOneAndUpdate({_id: req.params.id}, req.body, {new: true}, function(err, data) {
    if (err)
      res.send(err);
    res.json(data);
  });
};

exports.delete_a_SN2_1P2_5 = function(req, res) {
  SN2_1P2_5.remove({_id: req.params.id}, function(err, data) {
    if (err)
      res.send(err);
    res.json({ message: 'Region successfully deleted' });
  });
}; 
    
//SN2_1P2_6
exports.create_a_SN2_1P2_6 = function(req, res)  {
  var myData = new SN2_1P2_6(req.body);
    myData.save(function(err, data) {
      if (err)
        res.send(err);
      res.json(data);
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
  SN2_1P2_6.findOneAndUpdate({_id: req.params.id}, req.body, {new: true}, function(err, data) {
    if (err)
      res.send(err);
    res.json(data);
  });
};

exports.delete_a_SN2_1P2_6 = function(req, res) {
  SN2_1P2_6.remove({_id: req.params.id}, function(err, data) {
    if (err)
      res.send(err);
    res.json({ message: 'SN2_1P2_6 successfully deleted' });
  });
}; 
   
//SN2_1P2_7
exports.create_a_SN2_1P2_7 = function(req, res)  {
  var myData = new SN2_1P2_7(req.body);
    myData.save(function(err, data) {
      if (err)
        res.send(err);
      res.json(data);
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
  SN2_1P2_7.findOneAndUpdate({_id: req.params.id}, req.body, {new: true}, function(err, data) {
    if (err)
      res.send(err);
    res.json(data);
  });
};

exports.delete_a_SN2_1P2_7 = function(req, res) {
  SN2_1P2_7.remove({_id: req.params.id}, function(err, data) {
    if (err)
      res.send(err);
    res.json({ message: 'SN2_1P2_7 successfully deleted' });
  });
}; 
    
//SN2_1P2_9_1
exports.create_a_SN2_1P2_9_1 = function(req, res)  {
  var myData = new SN2_1P2_9_1(req.body);
    myData.save(function(err, data) {
      if (err)
        res.send(err);
      res.json(data);
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
  SN2_1P2_9_1.findOneAndUpdate({_id: req.params.id}, req.body, {new: true}, function(err, data) {
    if (err)
      res.send(err);
    res.json(data);
  });
};

exports.delete_a_SN2_1P2_9_1 = function(req, res) {
  SN2_1P2_9_1.remove({_id: req.params.id}, function(err, data) {
    if (err)
      res.send(err);
    res.json({ message: 'SN2_1P2_9_1 successfully deleted' });
  });
}; 
      
//SN2_1P2_9_3
exports.create_a_SN2_1P2_9_3 = function(req, res)  {
  var myData = new SN2_1P2_9_3(req.body);
    myData.save(function(err, data) {
      if (err)
        res.send(err);
      res.json(data);
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
  SN2_1P2_9_3.findOneAndUpdate({_id: req.params.id}, req.body, {new: true}, function(err, data) {
    if (err)
      res.send(err);
    res.json(data);
  });
};

exports.delete_a_SN2_1P2_9_3 = function(req, res) {
  SN2_1P2_9_3.remove({_id: req.params.id}, function(err, data) {
    if (err)
      res.send(err);
    res.json({ message: 'SN2_1P2_9_3 successfully deleted' });
  });
}; 
        
//SN2_1P2_9_4
exports.create_a_SN2_1P2_9_4 = function(req, res)  {
  var myData = new SN2_1P2_9_4(req.body);
    myData.save(function(err, data) {
      if (err)
        res.send(err);
      res.json(data);
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
  SN2_1P2_9_4.findOneAndUpdate({_id: req.params.id}, req.body, {new: true}, function(err, data) {
    if (err)
      res.send(err);
    res.json(data);
  });
};

exports.delete_a_SN2_1P2_9_4 = function(req, res) {
  SN2_1P2_9_4.remove({_id: req.params.id}, function(err, data) {
    if (err)
      res.send(err);
    res.json({ message: 'SN2_1P2_9_4 successfully deleted' });
  });
}; 
        
//SN2_1P3
exports.create_a_SN2_1P3 = function(req, res)  {
  var myData = new SN2_1P3(req.body);
    myData.save(function(err, data) {
      if (err)
        res.send(err);
      res.json(data);
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
  SN2_1P3.findOneAndUpdate({_id: req.params.id}, req.body, {new: true}, function(err, data) {
    if (err)
      res.send(err);
    res.json(data);
  });
};

exports.delete_a_SN2_1P3 = function(req, res) {
  SN2_1P3.remove({_id: req.params.id}, function(err, data) {
    if (err)
      res.send(err);
    res.json({ message: ' successfully deleted' });
  });
}; 
      
//SN2_1P4
exports.create_a_SN2_1P4 = function(req, res)  {
  var myData = new SN2_1P4(req.body);
    myData.save(function(err, data) {
      if (err)
        res.send(err);
      res.json(data);
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
  SN2_1P4.findOneAndUpdate({_id: req.params.id}, req.body, {new: true}, function(err, data) {
    if (err)
      res.send(err);
    res.json(data);
  });
};

exports.delete_a_SN2_1P4 = function(req, res) {
  SN2_1P4.remove({_id: req.params.id}, function(err, data) {
    if (err)
      res.send(err);
    res.json({ message: 'SN2_1P4 successfully deleted' });
  });
}; 
    
//SN2_1P5
exports.create_a_SN2_1P5 = function(req, res)  {
  var myData = new SN2_1P5(req.body);
    myData.save(function(err, data) {
      if (err)
        res.send(err);
      res.json(data);
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
  SN2_1P5.findOneAndUpdate({_id: req.params.id}, req.body, {new: true}, function(err, data) {
    if (err)
      res.send(err);
    res.json(data);
  });
};

exports.delete_a_SN2_1P5 = function(req, res) {
  SN2_1P5.remove({_id: req.params.id}, function(err, data) {
    if (err)
      res.send(err);
    res.json({ message: 'SN2_1P5  successfully deleted' });
  });
}; 
   
//SN2_1P5_1
exports.create_a_SN2_1P5_1 = function(req, res)  {
  var myData = new SN2_1P5_1(req.body);
    myData.save(function(err, data) {
      if (err)
        res.send(err);
      res.json(data);
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
  SN2_1P5_1.findOneAndUpdate({_id: req.params.id}, req.body, {new: true}, function(err, data) {
    if (err)
      res.send(err);
    res.json(data);
  });
};

exports.delete_a_SN2_1P5_1 = function(req, res) {
  SN2_1P5_1.remove({_id: req.params.id}, function(err, data) {
    if (err)
      res.send(err);
    res.json({ message: 'SN2_1P5_1 successfully deleted' });
  });
}; 
   
//SN2_1P5_2
exports.create_a_SN2_1P5_2 = function(req, res)  {
  var myData = new SN2_1P5_2(req.body);
    myData.save(function(err, data) {
      if (err)
        res.send(err);
      res.json(data);
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
  var myData = new SN2_1P5_3(req.body);
    myData.save(function(err, data) {
      if (err)
        res.send(err);
      res.json(data);
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
  SN2_1P5_3.findOneAndUpdate({_id: req.params.id}, req.body, {new: true}, function(err, data) {
    if (err)
      res.send(err);
    res.json(data);
  });
};

exports.delete_a_SN2_1P5_3 = function(req, res) {
  SN2_1P5_3.remove({_id: req.params.id}, function(err, data) {
    if (err)
      res.send(err);
    res.json({ message: 'SN2_1P5_3 successfully deleted' });
  });
}; 
    
//SN2_1P5_4
exports.create_a_SN2_1P5_4 = function(req, res)  {
  var myData = new SN2_1P5_4(req.body);
    myData.save(function(err, data) {
      if (err)
        res.send(err);
      res.json(data);
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
  SN2_1P5_4.findOneAndUpdate({_id: req.params.id}, req.body, {new: true}, function(err, data) {
    if (err)
      res.send(err);
    res.json(data);
  });
};

exports.delete_a_SN2_1P5_4 = function(req, res) {
  SN2_1P5_4.remove({_id: req.params.id}, function(err, data) {
    if (err)
      res.send(err);
    res.json({ message: 'SN2_1P5_4 successfully deleted' });
  });
}; 
        
//SN2_1P5_5
exports.create_a_SN2_1P5_5 = function(req, res)  {
  var myData = new SN2_1P5_5(req.body);
    myData.save(function(err, data) {
      if (err)
        res.send(err);
      res.json(data);
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
  SN2_1P5_5.findOneAndUpdate({_id: req.params.id}, req.body, {new: true}, function(err, data) {
    if (err)
      res.send(err);
    res.json(data);
  });
};

exports.delete_a_SN2_1P5_5 = function(req, res) {
  SN2_1P5_5.remove({_id: req.params.id}, function(err, data) {
    if (err)
      res.send(err);
    res.json({ message: 'SN2_1P5_5 successfully deleted' });
  });
}; 
   
//SN2_1P5_6
exports.create_a_SN2_1P5_6 = function(req, res)  {
  var myData = new SN2_1P5_6(req.body);
    myData.save(function(err, data) {
      if (err)
        res.send(err);
      res.json(data);
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
  SN2_1P5_6.findOneAndUpdate({_id: req.params.id}, req.body, {new: true}, function(err, data) {
    if (err)
      res.send(err);
    res.json(data);
  });
};

exports.delete_a_SN2_1P5_6 = function(req, res) {
  SN2_1P5_6.remove({_id: req.params.id}, function(err, data) {
    if (err)
      res.send(err);
    res.json({ message: 'SN2_1P5_6 successfully deleted' });
  });
}; 
     
//SN2_1P5_7
exports.create_a_SN2_1P5_7 = function(req, res)  {
  var myData = new SN2_1P5_7(req.body);
    myData.save(function(err, data) {
      if (err)
        res.send(err);
      res.json(data);
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
  SN2_1P5_7.findOneAndUpdate({_id: req.params.id}, req.body, {new: true}, function(err, data) {
    if (err)
      res.send(err);
    res.json(data);
  });
};

exports.delete_a_SN2_1P5_7 = function(req, res) {
  SN2_1P5_7.remove({_id: req.params.id}, function(err, data) {
    if (err)
      res.send(err);
    res.json({ message: 'SN2_1P5_7 successfully deleted' });
  });
}; 
       
//SN2_1P6
exports.create_a_SN2_1P6 = function(req, res)  {
  var myData = new SN2_1P6(req.body);
    myData.save(function(err, data) {
      if (err)
        res.send(err);
      res.json(data);
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
  SN2_1P6.findOneAndUpdate({_id: req.params.id}, req.body, {new: true}, function(err, data) {
    if (err)
      res.send(err);
    res.json(data);
  });
};

exports.delete_a_SN2_1P6 = function(req, res) {
  SN2_1P6.remove({_id: req.params.id}, function(err, data) {
    if (err)
      res.send(err);
    res.json({ message: 'SN2_1P6 successfully deleted' });
  });
}; 
  
//Pool
exports.create_a_Pool = function(req, res)  {
  var myData = new Pool(req.body);
    myData.save(function(err, data) {
      if (err)
        res.send(err);
      res.json(data);
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
  Pool.findOneAndUpdate({_id: req.params.id}, req.body, {new: true}, function(err, data) {
    if (err)
      res.send(err);
    res.json(data);
  });
};

exports.delete_a_Pool = function(req, res) {
  Pool.remove({_id: req.params.id}, function(err, data) {
    if (err)
      res.send(err);
    res.json({ message: 'Pool successfully deleted' });
  });
}; 
        
//Pump
exports.create_a_Pump = function(req, res)  {
  var myData = new Pump(req.body);
    myData.save(function(err, data) {
      if (err)
        res.send(err);
      res.json(data);
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
  Pump.findOneAndUpdate({_id: req.params.id}, req.body, {new: true}, function(err, data) {
    if (err)
      res.send(err);
    res.json(data);
  });
};

exports.delete_a_Pump = function(req, res) {
  Pump.remove({_id: req.params.id}, function(err, data) {
    if (err)
      res.send(err);
    res.json({ message: 'Pump successfully deleted' });
  });
}; 

//SN2_2P0

exports.create_a_SN2_2P0 = function(req, res)  {
  var myData = new SN2_2P0(req.body);
    myData.save(function(err, data) {
      if (err)
        res.send(err);
      res.json(data);
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
  SN2_2P0.findOneAndUpdate({_id: req.params.id}, req.body, {new: true}, function(err, data) {
    if (err)
      res.send(err);
    res.json(data);
  });
};

exports.delete_a_SN2_2P0 = function(req, res) {
  SN2_2P0.remove({_id: req.params.id}, function(err, data) {
    if (err)
      res.send(err);
    res.json({ message: 'SN2_2P0 successfully deleted' });
  });
};

//SN2_2

exports.create_a_SN2_2 = function(req, res)  {
  var myData = new SN2_2(req.body);
    myData.save(function(err, data) {
      if (err)
        res.send(err);
      res.json(data);
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
  SN2_2.findOneAndUpdate({_id: req.params.id}, req.body, {new: true}, function(err, data) {
    if (err)
      res.send(err);
    res.json(data);
  });
};

exports.delete_a_SN2_2 = function(req, res) {
  SN2_2.remove({_id: req.params.id}, function(err, data) {
    if (err)
      res.send(err);
    res.json({ message: 'SN2_2 successfully deleted' });
  });
};

//SN2_2P1_3

exports.create_a_SN2_2P1_3 = function(req, res)  {
  var myData = new SN2_2P1_3(req.body);
    myData.save(function(err, data) {
      if (err)
        res.send(err);
      res.json(data);
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
  SN2_2P1_3.findOneAndUpdate({_id: req.params.id}, req.body, {new: true}, function(err, data) {
    if (err)
      res.send(err);
    res.json(data);
  });
};

exports.delete_a_SN2_2P1_3 = function(req, res) {
  SN2_2P1_3.remove({_id: req.params.id}, function(err, data) {
    if (err)
      res.send(err);
    res.json({ message: 'SN2_2P1_3 successfully deleted' });
  });
};


//SN2_2P1_5

exports.create_a_SN2_2P1_5 = function(req, res)  {
  var myData = new SN2_2P1_5(req.body);
    myData.save(function(err, data) {
      if (err)
        res.send(err);
      res.json(data);
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
  SN2_2P1_5.findOneAndUpdate({_id: req.params.id}, req.body, {new: true}, function(err, data) {
    if (err)
      res.send(err);
    res.json(data);
  });
};

exports.delete_a_SN2_2P1_5 = function(req, res) {
  SN2_2P1_5.remove({_id: req.params.id}, function(err, data) {
    if (err)
      res.send(err);
    res.json({ message: 'SN2_2P1_5 successfully deleted' });
  });
};


//SN2_2P2

exports.create_a_SN2_2P2 = function(req, res)  {
  var myData = new SN2_2P2(req.body);
    myData.save(function(err, data) {
      if (err)
        res.send(err);
      res.json(data);
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
  SN2_2P2.findOneAndUpdate({_id: req.params.id}, req.body, {new: true}, function(err, data) {
    if (err)
      res.send(err);
    res.json(data);
  });
};

exports.delete_a_SN2_2P2 = function(req, res) {
  SN2_2P2.remove({_id: req.params.id}, function(err, data) {
    if (err)
      res.send(err);
    res.json({ message: 'SN2_2P2 successfully deleted' });
  });
};

//page
exports.getHomePage = function(req, res) {
  res.sendFile(path.join(__dirname +'/index.html'));
}