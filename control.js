var path = require('path')
var mongoose = require('mongoose'),
account = mongoose.model('Accounts'),
staff = mongoose.model('Staffs'),
region = mongoose.model('Regions'),
chagwat = mongoose.model('Changwats'),
amphoe = mongoose.model('Amphoes'),
tambon = mongoose.model('Tambons'),
district = mongoose.model('Districts'),
enumerationArea = mongoose.model('EnumerationAreas');

exports.list_all_account = function(req, res) {
    account.find({},{}, function(err, account) {
    if (err)
      res.send(err);
    res.json(account);
  });
};

exports.create_a_account = function(req, res) {
  var newUser = new account(req.body);  
  newUser.save(function(err, account) {
    if (err)
      res.send(err);
    res.json(account);
  });
};

exports.read_a_account = function(req, res) {
  account.find({username: req.params.accountId}, function(err, account) {
    if (err)
      res.send(err);
    res.json(account);
  });
};

exports.update_a_account = function(req, res) {
  account.findOneAndUpdate({username: req.params.accountId}, req.body, {new: true}, function(err, account) {
    if (err)
      res.send(err);
    res.json(account);
  });
};

exports.delete_a_account = function(req, res) {
  account.remove({username: req.params.accountId}, function(err, account) {
    if (err)
      res.send(err);
    res.json({ message: 'account successfully deleted' });
  });
};
//staffs
exports.read_all_staff = function(req, res) {
  staff.find({},{}, function(err, staff) {
    if (err)
      res.send(err);
    res.json(staff);
  });
};

exports.read_a_staff = function(req, res) {
  staff.find({user_id: req.params.staffName}, function(err, staff) {
    if (err)
      res.send(err);
    res.json(staff);
  });
};

exports.create_a_staff = function(req, res) {
  var newUser = new staff(req.body);  
  newUser.save(function(err, staff) {
    if (err)
      res.send(err);
    res.json(staff)
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

//enumerationArea
exports.create_a_EnumerationArea = function(req, res)  {
  var myData = new enumerationArea(req.body);
    myData.save(function(err, enumerationArea) {
      if (err)
        res.send(err);
      res.json(enumerationArea);
  });
};

exports.read_all_EnumerationArea = function(req, res) {
  enumerationArea.find({}, function(err, enumerationArea) {
    if (err)
      res.send(err);
    res.json(enumerationArea);
  });
};

//page
exports.getHomePage = function(req, res) {
  res.sendFile(path.join(__dirname +'/index.html'));
}