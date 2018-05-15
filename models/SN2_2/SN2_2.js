var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var sn2_2 = new Schema({

}, { strict: false });

module.exports = mongoose.model('SN2_2', sn2_2);
