var mongoose = require('mongoose'),
Schema = mongoose.Schema;

var Tablet = new Schema({
    tablet_sn : { type : String },
    powerbank_sn : { type : String },
    sim_sn : { type : String },
    user_id : { type : String },

});

module.exports = mongoose.model('Tablet', Tablet);