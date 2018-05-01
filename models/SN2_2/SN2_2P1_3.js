var mongoose = require('mongoose'),
Schema = mongoose.Schema;

var SN2_2P1_3 = new Schema({
    B1_3_1 : {type:  String},
    B1_3_2_1 : {type:  Boolean},
    B1_3_2_1_1 : {type:  Boolean},
    B1_3_2_1_2 : {type:  Boolean},
    B1_3_2_2 : {type:  Boolean},
    B1_3_2_3 : {type:  Boolean},
    B1_3_2_4 : {type:  Boolean},
    B1_3_2_5 : {type:  Boolean},
    B1_3_2_5_1 : {type:  String},
    B1_3_3_1 : {type:  Number},
    B1_3_3_2_1 : {type:  Number},     
    B1_3_3_2_2 : {type:  Number},
    B1_3_3_2_3 : {type:  Number},
    B1_3_3_2_4 : {type:  Number},
    B1_3_3_3_1_1 : {type:  Number},
    B1_3_3_3_1_2 : {type:  Number},
    B1_3_3_3_1_3 : {type:  Number},
    B1_3_3_3_2_1 : {type:  Number},
    B1_3_3_3_2_2 : {type:  Number},
});

module.exports = mongoose.model('SN2_2P1_3', SN2_2P1_3);
