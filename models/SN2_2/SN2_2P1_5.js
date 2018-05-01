var mongoose = require('mongoose'),
Schema = mongoose.Schema;

var SN2_2P1_5 = new Schema({
    B1_5_2_1 : {type:  String},
    B1_5_2_1_1 : {type:  Boolean},
    B1_5_2_1_2 : {type:  Number},
    B1_5_2_1_3 : {type:  Boolean},
    B1_5_2_1_4 : {type:  Number},
    B1_5_2_1_5 : {type:  Number},
    B1_6 : {type:  Number},
    B1_7 : {type:  Number},
    B1_8 : {type:  Number},
    B1_8_2 : {type:  String},
});

module.exports = mongoose.model('SN2_2P1_5', SN2_2P1_5);