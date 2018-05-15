var mongoose = require('mongoose'),
Schema = mongoose.Schema;

var Progress = new Schema({
}, {strict : false});

module.exports = mongoose.model('Progress', Progress);