var path = require('path')
var mongoose = require('mongoose'),
user            = mongoose.model('User'),
region          = mongoose.model('Region'),
chagwat         = mongoose.model('Changwat'),
amphoe          = mongoose.model('Amphoe'),
tambon          = mongoose.model('Tambon'),
district        = mongoose.model('District'),
enumerationArea = mongoose.model('EnumerationArea'),
area            = mongoose.model('area'),
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


//WaterCensus1

exports.create_a_waterCensus1 = function(req, res)  {
  var myData = new waterCensus1(req.body);
    myData.save(function(err, data) {
      if (err)
        res.send(err);
      res.json(data);
  });
};

exports.read_all_waterCensus1 = function(req, res) {
  waterCensus1.find({}, function(err, data) {
    if (err)
      res.send(err);
    res.json(data);
  });
};

exports.read_a_waterCensus1 = function(req, res) {
  waterCensus1.find({_id: req.params.id}, function(err, data) {
    if (err)
      res.send(err);
    res.json(data);
  });
};

exports.update_a_waterCensus1 = function(req, res) {
  waterCensus1.findOneAndUpdate({_id: req.params.id}, req.body, {new: true}, function(err, data) {
    if (err)
      res.send(err);
    res.json(data);
  });
};

exports.delete_a_waterCensus1 = function(req, res) {
  waterCensus1.remove({_id: req.params.id}, function(err, data) {
    if (err)
      res.send(err);
    res.json({ message: 'waterCensus1 successfully deleted' });
  });
};

//building

exports.create_a_building = function(req, res)  {
  var myData = new building(req.body);
    myData.save(function(err, data) {
      if (err)
        res.send(err);
      res.json(data);
  });
};

exports.read_all_building = function(req, res) {
  building.find({}, function(err, data) {
    if (err)
      res.send(err);
    res.json(data);
  });
};

exports.read_a_building = function(req, res) {
  building.find({_id: req.params.id}, function(err, data) {
    if (err)
      res.send(err);
    res.json(data);
  });
};

exports.update_a_building = function(req, res) {
  building.findOneAndUpdate({_id: req.params.id}, req.body, {new: true}, function(err, data) {
    if (err)
      res.send(err);
    res.json(data);
  });
};

exports.delete_a_building = function(req, res) {
  building.remove({_id: req.params.id}, function(err, data) {
    if (err)
      res.send(err);
    res.json({ message: 'building successfully deleted' });
  });
};

//Household
exports.create_a_household = function(req, res)  {
  var myData = new household(req.body);
    myData.save(function(err, data) {
      if (err)
        res.send(err);
      res.json(data);
  });
};

exports.read_all_household = function(req, res) {
  household.find({}, function(err, data) {
    if (err)
      res.send(err);
    res.json(data);
  });
};

exports.read_a_household = function(req, res) {
  household.find({_id: req.params.id}, function(err, data) {
    if (err)
      res.send(err);
    res.json(data);
  });
};

exports.update_a_household = function(req, res) {
  household.findOneAndUpdate({_id: req.params.id}, req.body, {new: true}, function(err, data) {
    if (err)
      res.send(err);
    res.json(data);
  });
};

exports.delete_a_household = function(req, res) {
  household.remove({_id: req.params.id}, function(err, data) {
    if (err)
      res.send(err);
    res.json({ message: 'household successfully deleted' });
  });
};

//waterCensus21 
exports.create_a_waterCensus21 = function(req, res)  {
  var myData = new waterCensus21(req.body);
    myData.save(function(err, data) {
      if (err)
        res.send(err);
      res.json(data);
  });
};

exports.read_all_waterCensus21 = function(req, res) {
  waterCensus21.find({}, function(err, data) {
    if (err)
      res.send(err);
    res.json(data);
  });
};

exports.read_a_waterCensus21 = function(req, res) {
  waterCensus21.find({_id: req.params.id}, function(err, data) {
    if (err)
      res.send(err);
    res.json(data);
  });
};

exports.update_a_waterCensus21 = function(req, res) {
  waterCensus21.findOneAndUpdate({_id: req.params.id}, req.body, {new: true}, function(err, data) {
    if (err)
      res.send(err);
    res.json(data);
  });
};

exports.delete_a_waterCensus21 = function(req, res) {
  waterCensus21.remove({_id: req.params.id}, function(err, data) {
    if (err)
      res.send(err);
    res.json({ message: 'waterCensus21 successfully deleted' });
  });
};
//wc21_1
exports.create_a_wc21_1 = function(req, res)  {
  var myData = new wc21_1(req.body);
    myData.save(function(err, data) {
      if (err)
        res.send(err);
      res.json(data);
  });
};

exports.read_all_wc21_1 = function(req, res) {
  wc21_1.find({}, function(err, data) {
    if (err)
      res.send(err);
    res.json(data);
  });
};

exports.read_a_wc21_1 = function(req, res) {
  wc21_1.find({_id: req.params.id}, function(err, data) {
    if (err)
      res.send(err);
    res.json(data);
  });
};

exports.update_a_wc21_1 = function(req, res) {
  wc21_1.findOneAndUpdate({_id: req.params.id}, req.body, {new: true}, function(err, data) {
    if (err)
      res.send(err);
    res.json(data);
  });
};

exports.delete_a_wc21_1 = function(req, res) {
  wc21_1.remove({_id: req.params.id}, function(err, data) {
    if (err)
      res.send(err);
    res.json({ message: 'wc21_1 successfully deleted' });
  });
};  

//wc21_2       
exports.create_a_wc21_2 = function(req, res)  {
  var myData = new wc21_2(req.body);
    myData.save(function(err, data) {
      if (err)
        res.send(err);
      res.json(data);
  });
};

exports.read_all_wc21_2 = function(req, res) {
  wc21_2.find({}, function(err, data) {
    if (err)
      res.send(err);
    res.json(data);
  });
};

exports.read_a_wc21_2 = function(req, res) {
  wc21_2.find({_id: req.params.id}, function(err, data) {
    if (err)
      res.send(err);
    res.json(data);
  });
};

exports.update_a_wc21_2 = function(req, res) {
  wc21_2.findOneAndUpdate({_id: req.params.id}, req.body, {new: true}, function(err, data) {
    if (err)
      res.send(err);
    res.json(data);
  });
};

exports.delete_a_wc21_2 = function(req, res) {
  wc21_2.remove({_id: req.params.id}, function(err, data) {
    if (err)
      res.send(err);
    res.json({ message: 'Region successfully deleted' });
  });
}; 

//wc21_3
exports.create_a_wc21_3 = function(req, res)  {
  var myData = new wc21_3(req.body);
    myData.save(function(err, data) {
      if (err)
        res.send(err);
      res.json(data);
  });
};

exports.read_all_wc21_3 = function(req, res) {
  wc21_3.find({}, function(err, data) {
    if (err)
      res.send(err);
    res.json(data);
  });
};

exports.read_a_wc21_3 = function(req, res) {
  wc21_3.find({_id: req.params.id}, function(err, data) {
    if (err)
      res.send(err);
    res.json(data);
  });
};

exports.update_a_wc21_3 = function(req, res) {
  wc21_3.findOneAndUpdate({_id: req.params.id}, req.body, {new: true}, function(err, data) {
    if (err)
      res.send(err);
    res.json(data);
  });
};

exports.delete_a_wc21_3 = function(req, res) {
  wc21_3.remove({_id: req.params.id}, function(err, data) {
    if (err)
      res.send(err);
    res.json({ message: 'wc21_3 successfully deleted' });
  });
}; 
        
//wc21_4
exports.create_a_wc21_4 = function(req, res)  {
  var myData = new wc21_4(req.body);
    myData.save(function(err, data) {
      if (err)
        res.send(err);
      res.json(data);
  });
};

exports.read_all_wc21_4 = function(req, res) {
  wc21_4.find({}, function(err, data) {
    if (err)
      res.send(err);
    res.json(data);
  });
};

exports.read_a_wc21_4 = function(req, res) {
  wc21_4.find({_id: req.params.id}, function(err, data) {
    if (err)
      res.send(err);
    res.json(data);
  });
};

exports.update_a_wc21_4 = function(req, res) {
  wc21_4.findOneAndUpdate({_id: req.params.id}, req.body, {new: true}, function(err, data) {
    if (err)
      res.send(err);
    res.json(data);
  });
};

exports.delete_a_wc21_4 = function(req, res) {
  wc21_4.remove({_id: req.params.id}, function(err, data) {
    if (err)
      res.send(err);
    res.json({ message: 'wc21_4 successfully deleted' });
  });
}; 
         
//wc21_5_1
exports.create_a_wc21_5_1 = function(req, res)  {
  var myData = new wc21_5_1(req.body);
    myData.save(function(err, data) {
      if (err)
        res.send(err);
      res.json(data);
  });
};

exports.read_all_wc21_5_1 = function(req, res) {
  wc21_5_1.find({}, function(err, data) {
    if (err)
      res.send(err);
    res.json(data);
  });
};

exports.read_a_wc21_5_1 = function(req, res) {
  wc21_5_1.find({_id: req.params.id}, function(err, data) {
    if (err)
      res.send(err);
    res.json(data);
  });
};

exports.update_a_wc21_5_1 = function(req, res) {
  wc21_5_1.findOneAndUpdate({_id: req.params.id}, req.body, {new: true}, function(err, data) {
    if (err)
      res.send(err);
    res.json(data);
  });
};

exports.delete_a_wc21_5_1 = function(req, res) {
  wc21_5_1.remove({_id: req.params.id}, function(err, data) {
    if (err)
      res.send(err);
    res.json({ message: 'wc21_5_1 successfully deleted' });
  });
}; 

//wc21_5_2
exports.create_a_wc21_5_2 = function(req, res)  {
  var myData = new wc21_5_2(req.body);
    myData.save(function(err, data) {
      if (err)
        res.send(err);
      res.json(data);
  });
};

exports.read_all_wc21_5_2 = function(req, res) {
  wc21_5_2.find({}, function(err, data) {
    if (err)
      res.send(err);
    res.json(data);
  });
};

exports.read_a_wc21_5_2 = function(req, res) {
  wc21_5_2.find({_id: req.params.id}, function(err, data) {
    if (err)
      res.send(err);
    res.json(data);
  });
};

exports.update_a_wc21_5_2 = function(req, res) {
  wc21_5_2.findOneAndUpdate({_id: req.params.id}, req.body, {new: true}, function(err, data) {
    if (err)
      res.send(err);
    res.json(data);
  });
};

exports.delete_a_wc21_5_2 = function(req, res) {
  wc21_5_2.remove({_id: req.params.id}, function(err, data) {
    if (err)
      res.send(err);
    res.json({ message: 'wc21_5_2 successfully deleted' });
  });
}; 

//wc21_5_3
exports.create_a_wc21_5_3 = function(req, res)  {
  var myData = new wc21_5_3(req.body);
    myData.save(function(err, data) {
      if (err)
        res.send(err);
      res.json(data);
  });
};

exports.read_all_wc21_5_3 = function(req, res) {
  wc21_5_3.find({}, function(err, data) {
    if (err)
      res.send(err);
    res.json(data);
  });
};

exports.read_a_wc21_5_3 = function(req, res) {
  wc21_5_3.find({_id: req.params.id}, function(err, data) {
    if (err)
      res.send(err);
    res.json(data);
  });
};

exports.update_a_wc21_5_3 = function(req, res) {
  wc21_5_3.findOneAndUpdate({_id: req.params.id}, req.body, {new: true}, function(err, data) {
    if (err)
      res.send(err);
    res.json(data);
  });
};

exports.delete_a_wc21_5_3 = function(req, res) {
  wc21_5_3.remove({_id: req.params.id}, function(err, data) {
    if (err)
      res.send(err);
    res.json({ message: 'wc21_5_3 successfully deleted' });
  });
}; 

//wc21_5_4
exports.create_a_wc21_5_4 = function(req, res)  {
  var myData = new wc21_5_4(req.body);
    myData.save(function(err, data) {
      if (err)
        res.send(err);
      res.json(data);
  });
};

exports.read_all_wc21_5_4 = function(req, res) {
  wc21_5_4.find({}, function(err, data) {
    if (err)
      res.send(err);
    res.json(data);
  });
};

exports.read_a_wc21_5_4 = function(req, res) {
  wc21_5_4.find({_id: req.params.id}, function(err, data) {
    if (err)
      res.send(err);
    res.json(data);
  });
};

exports.update_a_wc21_5_4 = function(req, res) {
  wc21_5_4.findOneAndUpdate({_id: req.params.id}, req.body, {new: true}, function(err, data) {
    if (err)
      res.send(err);
    res.json(data);
  });
};

exports.delete_a_wc21_5_4 = function(req, res) {
  wc21_5_4.remove({_id: req.params.id}, function(err, data) {
    if (err)
      res.send(err);
    res.json({ message: 'wc21_5_4 successfully deleted' });
  });
}; 
    
//wc21_5_5
exports.create_a_wc21_5_5 = function(req, res)  {
  var myData = new wc21_5_5(req.body);
    myData.save(function(err, data) {
      if (err)
        res.send(err);
      res.json(data);
  });
};

exports.read_all_wc21_5_5 = function(req, res) {
  wc21_5_5.find({}, function(err, data) {
    if (err)
      res.send(err);
    res.json(data);
  });
};

exports.read_a_wc21_5_5 = function(req, res) {
  wc21_5_5.find({_id: req.params.id}, function(err, data) {
    if (err)
      res.send(err);
    res.json(data);
  });
};

exports.update_a_wc21_5_5 = function(req, res) {
  wc21_5_5.findOneAndUpdate({_id: req.params.id}, req.body, {new: true}, function(err, data) {
    if (err)
      res.send(err);
    res.json(data);
  });
};

exports.delete_a_wc21_5_5 = function(req, res) {
  wc21_5_5.remove({_id: req.params.id}, function(err, data) {
    if (err)
      res.send(err);
    res.json({ message: 'Region successfully deleted' });
  });
}; 
    
//wc21_5_6
exports.create_a_wc21_5_6 = function(req, res)  {
  var myData = new wc21_5_6(req.body);
    myData.save(function(err, data) {
      if (err)
        res.send(err);
      res.json(data);
  });
};

exports.read_all_wc21_5_6 = function(req, res) {
  wc21_5_6.find({}, function(err, data) {
    if (err)
      res.send(err);
    res.json(data);
  });
};

exports.read_a_wc21_5_6 = function(req, res) {
  wc21_5_6.find({_id: req.params.id}, function(err, data) {
    if (err)
      res.send(err);
    res.json(data);
  });
};

exports.update_a_wc21_5_6 = function(req, res) {
  wc21_5_6.findOneAndUpdate({_id: req.params.id}, req.body, {new: true}, function(err, data) {
    if (err)
      res.send(err);
    res.json(data);
  });
};

exports.delete_a_wc21_5_6 = function(req, res) {
  wc21_5_6.remove({_id: req.params.id}, function(err, data) {
    if (err)
      res.send(err);
    res.json({ message: 'wc21_5_6 successfully deleted' });
  });
}; 
   
//wc21_5_7
exports.create_a_wc21_5_7 = function(req, res)  {
  var myData = new wc21_5_7(req.body);
    myData.save(function(err, data) {
      if (err)
        res.send(err);
      res.json(data);
  });
};

exports.read_all_wc21_5_7 = function(req, res) {
  wc21_5_7.find({}, function(err, data) {
    if (err)
      res.send(err);
    res.json(data);
  });
};

exports.read_a_wc21_5_7 = function(req, res) {
  wc21_5_7.find({_id: req.params.id}, function(err, data) {
    if (err)
      res.send(err);
    res.json(data);
  });
};

exports.update_a_wc21_5_7 = function(req, res) {
  wc21_5_7.findOneAndUpdate({_id: req.params.id}, req.body, {new: true}, function(err, data) {
    if (err)
      res.send(err);
    res.json(data);
  });
};

exports.delete_a_wc21_5_7 = function(req, res) {
  wc21_5_7.remove({_id: req.params.id}, function(err, data) {
    if (err)
      res.send(err);
    res.json({ message: 'wc21_5_7 successfully deleted' });
  });
}; 
    
//wc21_6
exports.create_a_wc21_6 = function(req, res)  {
  var myData = new wc21_6(req.body);
    myData.save(function(err, data) {
      if (err)
        res.send(err);
      res.json(data);
  });
};

exports.read_all_wc21_6 = function(req, res) {
  wc21_6.find({}, function(err, data) {
    if (err)
      res.send(err);
    res.json(data);
  });
};

exports.read_a_wc21_6 = function(req, res) {
  wc21_6.find({_id: req.params.id}, function(err, data) {
    if (err)
      res.send(err);
    res.json(data);
  });
};

exports.update_a_wc21_6 = function(req, res) {
  wc21_6.findOneAndUpdate({_id: req.params.id}, req.body, {new: true}, function(err, data) {
    if (err)
      res.send(err);
    res.json(data);
  });
};

exports.delete_a_wc21_6 = function(req, res) {
  wc21_6.remove({_id: req.params.id}, function(err, data) {
    if (err)
      res.send(err);
    res.json({ message: 'wc21_6 successfully deleted' });
  });
}; 
      
//rice
exports.create_a_rice = function(req, res)  {
  var myData = new rice(req.body);
    myData.save(function(err, data) {
      if (err)
        res.send(err);
      res.json(data);
  });
};

exports.read_all_rice = function(req, res) {
  rice.find({}, function(err, data) {
    if (err)
      res.send(err);
    res.json(data);
  });
};

exports.read_a_rice = function(req, res) {
  rice.find({_id: req.params.id}, function(err, data) {
    if (err)
      res.send(err);
    res.json(data);
  });
};

exports.update_a_rice = function(req, res) {
  rice.findOneAndUpdate({_id: req.params.id}, req.body, {new: true}, function(err, data) {
    if (err)
      res.send(err);
    res.json(data);
  });
};

exports.delete_a_rice = function(req, res) {
  rice.remove({_id: req.params.id}, function(err, data) {
    if (err)
      res.send(err);
    res.json({ message: 'rice successfully deleted' });
  });
}; 
        
//plant
exports.create_a_plant = function(req, res)  {
  var myData = new plant(req.body);
    myData.save(function(err, data) {
      if (err)
        res.send(err);
      res.json(data);
  });
};

exports.read_all_plant = function(req, res) {
  plant.find({}, function(err, data) {
    if (err)
      res.send(err);
    res.json(data);
  });
};

exports.read_a_plant = function(req, res) {
  plant.find({_id: req.params.id}, function(err, data) {
    if (err)
      res.send(err);
    res.json(data);
  });
};

exports.update_a_plant = function(req, res) {
  plant.findOneAndUpdate({_id: req.params.id}, req.body, {new: true}, function(err, data) {
    if (err)
      res.send(err);
    res.json(data);
  });
};

exports.delete_a_plant = function(req, res) {
  plant.remove({_id: req.params.id}, function(err, data) {
    if (err)
      res.send(err);
    res.json({ message: 'plant successfully deleted' });
  });
}; 
        
//rubber
exports.create_a_rubber = function(req, res)  {
  var myData = new rubber(req.body);
    myData.save(function(err, data) {
      if (err)
        res.send(err);
      res.json(data);
  });
};

exports.read_all_rubber = function(req, res) {
  rubber.find({}, function(err, data) {
    if (err)
      res.send(err);
    res.json(data);
  });
};

exports.read_a_rubber = function(req, res) {
  rubber.find({_id: req.params.id}, function(err, data) {
    if (err)
      res.send(err);
    res.json(data);
  });
};

exports.update_a_rubber = function(req, res) {
  rubber.findOneAndUpdate({_id: req.params.id}, req.body, {new: true}, function(err, data) {
    if (err)
      res.send(err);
    res.json(data);
  });
};

exports.delete_a_rubber = function(req, res) {
  rubber.remove({_id: req.params.id}, function(err, data) {
    if (err)
      res.send(err);
    res.json({ message: ' successfully deleted' });
  });
}; 
      
//perennial
exports.create_a_perennial = function(req, res)  {
  var myData = new perennial(req.body);
    myData.save(function(err, data) {
      if (err)
        res.send(err);
      res.json(data);
  });
};

exports.read_all_perennial = function(req, res) {
  perennial.find({}, function(err, data) {
    if (err)
      res.send(err);
    res.json(data);
  });
};

exports.read_a_perennial = function(req, res) {
  perennial.find({_id: req.params.id}, function(err, data) {
    if (err)
      res.send(err);
    res.json(data);
  });
};

exports.update_a_perennial = function(req, res) {
  perennial.findOneAndUpdate({_id: req.params.id}, req.body, {new: true}, function(err, data) {
    if (err)
      res.send(err);
    res.json(data);
  });
};

exports.delete_a_perennial = function(req, res) {
  perennial.remove({_id: req.params.id}, function(err, data) {
    if (err)
      res.send(err);
    res.json({ message: 'perennial successfully deleted' });
  });
}; 
    
//vegetable
exports.create_a_vegetable = function(req, res)  {
  var myData = new vegetable(req.body);
    myData.save(function(err, data) {
      if (err)
        res.send(err);
      res.json(data);
  });
};

exports.read_all_vegetable = function(req, res) {
  vegetable.find({}, function(err, data) {
    if (err)
      res.send(err);
    res.json(data);
  });
};

exports.read_a_vegetable = function(req, res) {
  vegetable.find({_id: req.params.id}, function(err, data) {
    if (err)
      res.send(err);
    res.json(data);
  });
};

exports.update_a_vegetable = function(req, res) {
  vegetable.findOneAndUpdate({_id: req.params.id}, req.body, {new: true}, function(err, data) {
    if (err)
      res.send(err);
    res.json(data);
  });
};

exports.delete_a_vegetable = function(req, res) {
  vegetable.remove({_id: req.params.id}, function(err, data) {
    if (err)
      res.send(err);
    res.json({ message: ' successfully deleted' });
  });
}; 
   
//garden
exports.create_a_garden = function(req, res)  {
  var myData = new garden(req.body);
    myData.save(function(err, data) {
      if (err)
        res.send(err);
      res.json(data);
  });
};

exports.read_all_garden = function(req, res) {
  garden.find({}, function(err, data) {
    if (err)
      res.send(err);
    res.json(data);
  });
};

exports.read_a_garden = function(req, res) {
  garden.find({_id: req.params.id}, function(err, data) {
    if (err)
      res.send(err);
    res.json(data);
  });
};

exports.update_a_garden = function(req, res) {
  garden.findOneAndUpdate({_id: req.params.id}, req.body, {new: true}, function(err, data) {
    if (err)
      res.send(err);
    res.json(data);
  });
};

exports.delete_a_garden = function(req, res) {
  garden.remove({_id: req.params.id}, function(err, data) {
    if (err)
      res.send(err);
    res.json({ message: 'garden successfully deleted' });
  });
}; 
   
//fish
exports.create_a_fish = function(req, res)  {
  var myData = new fish(req.body);
    myData.save(function(err, data) {
      if (err)
        res.send(err);
      res.json(data);
  });
};

exports.read_all_fish = function(req, res) {
  fish.find({}, function(err, data) {
    if (err)
      res.send(err);
    res.json(data);
  });
};

exports.read_a_fish = function(req, res) {
  fish.find({_id: req.params.id}, function(err, data) {
    if (err)
      res.send(err);
    res.json(data);
  });
};

exports.update_a_fish = function(req, res) {
  fish.findOneAndUpdate({_id: req.params.id}, req.body, {new: true}, function(err, data) {
    if (err)
      res.send(err);
    res.json(data);
  });
};

exports.delete_a_fish = function(req, res) {
  fish.remove({_id: req.params.id}, function(err, data) {
    if (err)
      res.send(err);
    res.json({ message: 'fish successfully deleted' });
  });
}; 
   
//shrimp
exports.create_a_shrimp = function(req, res)  {
  var myData = new shrimp(req.body);
    myData.save(function(err, data) {
      if (err)
        res.send(err);
      res.json(data);
  });
};

exports.read_all_shrimp = function(req, res) {
  shrimp.find({}, function(err, data) {
    if (err)
      res.send(err);
    res.json(data);
  });
};

exports.read_a_shrimp = function(req, res) {
  shrimp.find({_id: req.params.id}, function(err, data) {
    if (err)
      res.send(err);
    res.json(data);
  });
};

exports.update_a_shrimp = function(req, res) {
  shrimp.findOneAndUpdate({_id: req.params.id}, req.body, {new: true}, function(err, data) {
    if (err)
      res.send(err);
    res.json(data);
  });
};

exports.delete_a_shrimp = function(req, res) {
  shrimp.remove({_id: req.params.id}, function(err, data) {
    if (err)
      res.send(err);
    res.json({ message: 'shrimp successfully deleted' });
  });
}; 
    
//flog
exports.create_a_flog = function(req, res)  {
  var myData = new flog(req.body);
    myData.save(function(err, data) {
      if (err)
        res.send(err);
      res.json(data);
  });
};

exports.read_all_flog = function(req, res) {
  flog.find({}, function(err, data) {
    if (err)
      res.send(err);
    res.json(data);
  });
};

exports.read_a_flog = function(req, res) {
  flog.find({_id: req.params.id}, function(err, data) {
    if (err)
      res.send(err);
    res.json(data);
  });
};

exports.update_a_flog = function(req, res) {
  flog.findOneAndUpdate({_id: req.params.id}, req.body, {new: true}, function(err, data) {
    if (err)
      res.send(err);
    res.json(data);
  });
};

exports.delete_a_flog = function(req, res) {
  flog.remove({_id: req.params.id}, function(err, data) {
    if (err)
      res.send(err);
    res.json({ message: 'flog successfully deleted' });
  });
}; 
        
//crocodile
exports.create_a_crocodile = function(req, res)  {
  var myData = new crocodile(req.body);
    myData.save(function(err, data) {
      if (err)
        res.send(err);
      res.json(data);
  });
};

exports.read_all_crocodile = function(req, res) {
  crocodile.find({}, function(err, data) {
    if (err)
      res.send(err);
    res.json(data);
  });
};

exports.read_a_crocodile = function(req, res) {
  crocodile.find({_id: req.params.id}, function(err, data) {
    if (err)
      res.send(err);
    res.json(data);
  });
};

exports.update_a_crocodile = function(req, res) {
  crocodile.findOneAndUpdate({_id: req.params.id}, req.body, {new: true}, function(err, data) {
    if (err)
      res.send(err);
    res.json(data);
  });
};

exports.delete_a_crocodile = function(req, res) {
  crocodile.remove({_id: req.params.id}, function(err, data) {
    if (err)
      res.send(err);
    res.json({ message: 'crocodile successfully deleted' });
  });
}; 
   
//s_turtle
exports.create_a_s_turtle = function(req, res)  {
  var myData = new s_turtle(req.body);
    myData.save(function(err, data) {
      if (err)
        res.send(err);
      res.json(data);
  });
};

exports.read_all_s_turtle = function(req, res) {
  s_turtle.find({}, function(err, data) {
    if (err)
      res.send(err);
    res.json(data);
  });
};

exports.read_a_s_turtle = function(req, res) {
  s_turtle.find({_id: req.params.id}, function(err, data) {
    if (err)
      res.send(err);
    res.json(data);
  });
};

exports.update_a_s_turtle = function(req, res) {
  s_turtle.findOneAndUpdate({_id: req.params.id}, req.body, {new: true}, function(err, data) {
    if (err)
      res.send(err);
    res.json(data);
  });
};

exports.delete_a_s_turtle = function(req, res) {
  s_turtle.remove({_id: req.params.id}, function(err, data) {
    if (err)
      res.send(err);
    res.json({ message: 's_turtle successfully deleted' });
  });
}; 
     
//well
exports.create_a_well = function(req, res)  {
  var myData = new well(req.body);
    myData.save(function(err, data) {
      if (err)
        res.send(err);
      res.json(data);
  });
};

exports.read_all_well = function(req, res) {
  well.find({}, function(err, data) {
    if (err)
      res.send(err);
    res.json(data);
  });
};

exports.read_a_well = function(req, res) {
  well.find({_id: req.params.id}, function(err, data) {
    if (err)
      res.send(err);
    res.json(data);
  });
};

exports.update_a_well = function(req, res) {
  well.findOneAndUpdate({_id: req.params.id}, req.body, {new: true}, function(err, data) {
    if (err)
      res.send(err);
    res.json(data);
  });
};

exports.delete_a_well = function(req, res) {
  well.remove({_id: req.params.id}, function(err, data) {
    if (err)
      res.send(err);
    res.json({ message: 'well successfully deleted' });
  });
}; 
       
//pool_size
exports.create_a_pool_size = function(req, res)  {
  var myData = new pool_size(req.body);
    myData.save(function(err, data) {
      if (err)
        res.send(err);
      res.json(data);
  });
};

exports.read_all_pool_size = function(req, res) {
  pool_size.find({}, function(err, data) {
    if (err)
      res.send(err);
    res.json(data);
  });
};

exports.read_a_pool_size = function(req, res) {
  pool_size.find({_id: req.params.id}, function(err, data) {
    if (err)
      res.send(err);
    res.json(data);
  });
};

exports.update_a_pool_size = function(req, res) {
  pool_size.findOneAndUpdate({_id: req.params.id}, req.body, {new: true}, function(err, data) {
    if (err)
      res.send(err);
    res.json(data);
  });
};

exports.delete_a_pool_size = function(req, res) {
  pool_size.remove({_id: req.params.id}, function(err, data) {
    if (err)
      res.send(err);
    res.json({ message: 'pool_size successfully deleted' });
  });
}; 
  
//pool
exports.create_a_pool = function(req, res)  {
  var myData = new pool(req.body);
    myData.save(function(err, data) {
      if (err)
        res.send(err);
      res.json(data);
  });
};

exports.read_all_pool = function(req, res) {
  pool.find({}, function(err, data) {
    if (err)
      res.send(err);
    res.json(data);
  });
};

exports.read_a_pool = function(req, res) {
  pool.find({_id: req.params.id}, function(err, data) {
    if (err)
      res.send(err);
    res.json(data);
  });
};

exports.update_a_pool = function(req, res) {
  pool.findOneAndUpdate({_id: req.params.id}, req.body, {new: true}, function(err, data) {
    if (err)
      res.send(err);
    res.json(data);
  });
};

exports.delete_a_pool = function(req, res) {
  pool.remove({_id: req.params.id}, function(err, data) {
    if (err)
      res.send(err);
    res.json({ message: 'pool successfully deleted' });
  });
}; 
        
//pump
exports.create_a_pump = function(req, res)  {
  var myData = new pump(req.body);
    myData.save(function(err, data) {
      if (err)
        res.send(err);
      res.json(data);
  });
};

exports.read_all_pump = function(req, res) {
  pump.find({}, function(err, data) {
    if (err)
      res.send(err);
    res.json(data);
  });
};

exports.read_a_pump = function(req, res) {
  pump.find({_id: req.params.id}, function(err, data) {
    if (err)
      res.send(err);
    res.json(data);
  });
};

exports.update_a_pump = function(req, res) {
  pump.findOneAndUpdate({_id: req.params.id}, req.body, {new: true}, function(err, data) {
    if (err)
      res.send(err);
    res.json(data);
  });
};

exports.delete_a_pump = function(req, res) {
  pump.remove({_id: req.params.id}, function(err, data) {
    if (err)
      res.send(err);
    res.json({ message: 'pump successfully deleted' });
  });
}; 

//page
exports.getHomePage = function(req, res) {
  res.sendFile(path.join(__dirname +'/index.html'));
}