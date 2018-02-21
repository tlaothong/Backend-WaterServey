var path = require('path')
var mongoose = require('mongoose'),
account = mongoose.model('Account'),
user            = mongoose.model('User'),
region          = mongoose.model('Region'),
chagwat         = mongoose.model('Changwat'),
amphoe          = mongoose.model('Amphoe'),
tambon          = mongoose.model('Tambon'),
district        = mongoose.model('District'),
enumerationArea = mongoose.model('EnumerationArea'),
waterCensus1    = mongoose.model('WaterCensus1'),
building        = mongoose.model('Building'),
household       = mongoose.model('Household'),
waterCensus21  = mongoose.model('WaterCensus21'),
wc21_1          = mongoose.model('Wc21_1'),
wc21_2          = mongoose.model('Wc21_2'),
wc21_3          = mongoose.model('Wc21_3'),
wc21_4          = mongoose.model('Wc21_4'),
wc21_5_1        = mongoose.model('Wc21_5_1'),
wc21_5_3        = mongoose.model('Wc21_5_3'),
wc21_5_4        = mongoose.model('Wc21_5_4'),
wc21_5_5        = mongoose.model('Wc21_5_5'),
wc21_5_6        = mongoose.model('Wc21_5_6'),
wc21_5_7        = mongoose.model('Wc21_5_7'),
wc21_6          = mongoose.model('Wc21_6'),
rice            = mongoose.model('Rice'),
plant           = mongoose.model('Plant'),
rubber          = mongoose.model('Rubber'),
perennial       = mongoose.model('Perennial'),
vegetable       = mongoose.model('Vegetable'),
garden          = mongoose.model('Garden'),
fish            = mongoose.model('Fish'),
shrimp          = mongoose.model('Shrimp'),
flog            = mongoose.model('Flog'),
crocodile       = mongoose.model('Crocodile'),
s_turtle        = mongoose.model('S_turtle'),
other_animal    = mongoose.model('Other_animal'),
well            = mongoose.model('Well'),
pool_size       = mongoose.model('Pool_size'),
pool            = mongoose.model('Pool'),
pump            = mongoose.model('Pump');

//user
exports.read_all_user = function(req, res) {
  user.find({},{}, function(err, user) {
    if (err)
      res.send(err);
    res.json(user);
  });
};

exports.create_a_user = function(req, res) {
  var newUser = new user(req.body);  
  newUser.save(function(err, user) {
    if (err)
      res.send(err);
    res.json(user)
  });
};

exports.read_a_user = function(req, res) {
  user.find({_id: req.params.id}, function(err, user) {
    if (err)
      res.send(err);
    res.json(user);
  });
};

exports.update_a_user = function(req, res) {
  user.findOneAndUpdate({_id: req.params.id}, req.body, {new: true}, function(err, user) {
    if (err)
      res.send(err);
    res.json(user);
  });
};

exports.delete_a_user = function(req, res) {
  user.remove({_id: req.params.id}, function(err, task) {
    if (err)
      res.send(err);
    res.json({ message: 'User successfully deleted' });
  });
};


//region
exports.create_a_region = function(req, res)  {
  var myData = new region(req.body);
    myData.save(function(err, region) {
      if (err)
        res.send(err);
      res.json(region);
  });
};

exports.read_all_region = function(req, res) {
  region.find({}, function(err, region) {
    if (err)
      res.send(err);
    res.json(region);
  });
};

exports.read_a_region = function(req, res) {
  region.find({_id: req.params.id}, function(err, region) {
    if (err)
      res.send(err);
    res.json(region);
  });
};

exports.update_a_region = function(req, res) {
  user.findOneAndUpdate({_id: req.params.id}, req.body, {new: true}, function(err, region) {
    if (err)
      res.send(err);
    res.json(region);
  });
};

exports.delete_a_region = function(req, res) {
  region.remove({_id: req.params.id}, function(err, region) {
    if (err)
      res.send(err);
    res.json({ message: 'Region successfully deleted' });
  });
};
//chagwat
exports.create_a_changwat = function(req, res)  {
  var myData = new chagwat(req.body);
    myData.save(function(err, chagwat) {
      if (err)
        res.send(err);
      res.json(chagwat);
  });
};

exports.read_all_changwat = function(req, res) {
  chagwat.find({}, function(err, chagwat) {
    if (err)
      res.send(err);
    res.json(chagwat);
  });
};

exports.read_a_changwat = function(req, res) {
  changwat.find({_id: req.params.id}, function(err, changwat) {
    if (err)
      res.send(err);
    res.json(changwat);
  });
};

exports.update_a_changwat = function(req, res) {
  changwat.findOneAndUpdate({_id: req.params.id}, req.body, {new: true}, function(err, changwat) {
    if (err)
      res.send(err);
    res.json(changwat);
  });
};

exports.delete_a_changwat = function(req, res) {
  changwat.remove({_id: req.params.id}, function(err, changwat) {
    if (err)
      res.send(err);
    res.json({ message: 'Region successfully deleted' });
  });
};

//amphoe
exports.create_a_amphoe = function(req, res)  {
  var myData = new amphoe(req.body);
    myData.save(function(err, amphoe) {
      if (err)
        res.send(err);
      res.json(amphoe);
  });
};

exports.read_all_amphoe = function(req, res) {
  amphoe.find({}, function(err, amphoe) {
    if (err)
      res.send(err);
    res.json(amphoe);
  });
};
exports.read_a_amphoe = function(req, res) {
  amphoe.find({_id: req.params.id}, function(err, amphoe) {
    if (err)
      res.send(err);
    res.json(amphoe);
  });
};

exports.update_a_amphoe = function(req, res) {
  amphoe.findOneAndUpdate({_id: req.params.id}, req.body, {new: true}, function(err, amphoe) {
    if (err)
      res.send(err);
    res.json(amphoe);
  });
};

exports.delete_a_amphoe = function(req, res) {
  amphoe.remove({_id: req.params.id}, function(err, amphoe) {
    if (err)
      res.send(err);
    res.json({ message: 'Region successfully deleted' });
  });
};

//tambon
exports.create_a_tambon = function(req, res)  {
  var myData = new tambon(req.body);
    myData.save(function(err, tambon) {
      if (err)
        res.send(err);
      res.json(tambon);
  });
};

exports.read_all_tambon = function(req, res) {
  tambon.find({}, function(err, tambon) {
    if (err)
      res.send(err);
    res.json(tambon);
  });
};

exports.read_a_tambon = function(req, res) {
  tambon.find({_id: req.params.id}, function(err, tambon) {
    if (err)
      res.send(err);
    res.json(tambon);
  });
};

exports.update_a_tambon = function(req, res) {
  tambon.findOneAndUpdate({_id: req.params.id}, req.body, {new: true}, function(err, tambon) {
    if (err)
      res.send(err);
    res.json(tambon);
  });
};

exports.delete_a_tambon = function(req, res) {
  tambon.remove({_id: req.params.id}, function(err, tambon) {
    if (err)
      res.send(err);
    res.json({ message: 'Region successfully deleted' });
  });
};

//district
exports.create_a_district = function(req, res)  {
  var myData = new district(req.body);
    myData.save(function(err, district) {
      if (err)
        res.send(err);
      res.json(district);
  });
};

exports.read_all_district = function(req, res) {
  district.find({}, function(err, district) {
    if (err)
      res.send(err);
    res.json(district);
  });
};

exports.read_a_district = function(req, res) {
  district.find({_id: req.params.id}, function(err, district) {
    if (err)
      res.send(err);
    res.json(district);
  });
};

exports.update_a_region = function(req, res) {
  district.findOneAndUpdate({_id: req.params.id}, req.body, {new: true}, function(err, district) {
    if (err)
      res.send(err);
    res.json(district);
  });
};

exports.delete_a_region = function(req, res) {
  district.remove({_id: req.params.id}, function(err, district) {
    if (err)
      res.send(err);
    res.json({ message: 'Region successfully deleted' });
  });
};

//enumerationArea
exports.create_a_enumerationArea = function(req, res)  {
  var myData = new enumerationArea(req.body);
    myData.save(function(err, enumerationArea) {
      if (err)
        res.send(err);
      res.json(enumerationArea);
  });
};

exports.read_all_enumerationArea = function(req, res) {
  enumerationArea.find({}, function(err, enumerationArea) {
    if (err)
      res.send(err);
    res.json(enumerationArea);
  });
};

exports.read_a_enumerationArea = function(req, res) {
  enumerationArea.find({_id: req.params.id}, function(err, enumerationArea) {
    if (err)
      res.send(err);
    res.json(enumerationArea);
  });
};

exports.update_a_enumerationArea = function(req, res) {
  enumerationArea.findOneAndUpdate({_id: req.params.id}, req.body, {new: true}, function(err, enumerationArea) {
    if (err)
      res.send(err);
    res.json(enumerationArea);
  });
};

exports.delete_a_enumerationArea = function(req, res) {
  enumerationArea.remove({_id: req.params.id}, function(err, enumerationArea) {
    if (err)
      res.send(err);
    res.json({ message: 'Region successfully deleted' });
  });
};

//WaterCensus1

exports.create_a_waterCensus1 = function(req, res)  {
  var myData = new waterCensus1(req.body);
    myData.save(function(err, waterCensus1) {
      if (err)
        res.send(err);
      res.json(waterCensus1);
  });
};

exports.read_all_waterCensus1 = function(req, res) {
  waterCensus1.find({}, function(err, waterCensus1) {
    if (err)
      res.send(err);
    res.json(waterCensus1);
  });
};

exports.read_a_waterCensus1 = function(req, res) {
  waterCensus1.find({_id: req.params.id}, function(err, waterCensus1) {
    if (err)
      res.send(err);
    res.json(waterCensus1);
  });
};

exports.update_a_waterCensus1 = function(req, res) {
  waterCensus1.findOneAndUpdate({_id: req.params.id}, req.body, {new: true}, function(err, waterCensus1) {
    if (err)
      res.send(err);
    res.json(waterCensus1);
  });
};

exports.delete_a_waterCensus1 = function(req, res) {
  waterCensus1.remove({_id: req.params.id}, function(err, waterCensus1) {
    if (err)
      res.send(err);
    res.json({ message: 'Region successfully deleted' });
  });
};

//building

exports.create_a_building = function(req, res)  {
  var myData = new building(req.body);
    myData.save(function(err, building) {
      if (err)
        res.send(err);
      res.json(building);
  });
};

exports.read_all_building = function(req, res) {
  building.find({}, function(err, building) {
    if (err)
      res.send(err);
    res.json(building);
  });
};

exports.read_a_building = function(req, res) {
  building.find({_id: req.params.id}, function(err, building) {
    if (err)
      res.send(err);
    res.json(building);
  });
};

exports.update_a_building = function(req, res) {
  building.findOneAndUpdate({_id: req.params.id}, req.body, {new: true}, function(err, building) {
    if (err)
      res.send(err);
    res.json(building);
  });
};

exports.delete_a_building = function(req, res) {
  region.remove({_id: req.params.id}, function(err, building) {
    if (err)
      res.send(err);
    res.json({ message: 'Region successfully deleted' });
  });
};
//page
exports.getHomePage = function(req, res) {
  res.sendFile(path.join(__dirname +'/index.html'));
}