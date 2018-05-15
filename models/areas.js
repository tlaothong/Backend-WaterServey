var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var areas = new Schema({

}, { strict: false });

module.exports = mongoose.model('Area', areas);