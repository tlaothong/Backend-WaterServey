//import { type } from 'os';

var mongoose = require('mongoose'),
Schema = mongoose.Schema;

var SN2_2P2 = new Schema({
    B2_12_1_1 : {type:  String},
    B2_13_1 : {type:  Number},
    B2_13_2 : {type:  Number},
    B2_13_3 : {type:  Number},
    B2_14 : {type:  Number},
    B2_15 : {type:  Number},
    B2_16 : {type:  Number},
    B2_17 : {type:  Number},
});

module.exports = mongoose.model('SN2_2P2', SN2_2P2);

