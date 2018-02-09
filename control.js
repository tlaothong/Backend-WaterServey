import { model } from 'mongoose';

var path = require('path')
var mongoose = require('mongoose'),
account = mongoose.model('Accounts');

exports.list_all_account = function(req, res) {
    account.find({},{'_id':0,'username':1 }, function(err, account) {
    if (err)
      res.send(err);
    res.json(account);
  });
};




exports.create_a_account = function(req, res) {
  var newUser = new account({ username: req.params.accountId});  
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


  account.remove({
    username: req.params.accountId
  }, function(err, account) {
    if (err)
      res.send(err);
    res.json({ message: 'account successfully deleted' });
  });
};

exports.getHomePage = function(req, res) {
  res.sendFile(path.join(__dirname +'/index.html'));
}