var mongoose = require('mongoose'),
Schema = mongoose.Schema;

var Tablet = new Schema({
    tablet_sn : String,
    powerbank_sn : String,
    sim : String,
    user_id : String,

}, {strict : false});

module.exports = mongoose.model('Tablet', Tablet);