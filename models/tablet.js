var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var Tablet = new Schema({

}, { strict: false });

module.exports = mongoose.model('Tablet', Tablet);