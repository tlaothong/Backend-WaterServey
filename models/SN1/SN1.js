var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var sn1 = new Schema({
}, { strict: false });

module.exports = mongoose.model('SN1', sn1);