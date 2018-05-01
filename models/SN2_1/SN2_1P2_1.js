var mongoose = require('mongoose'),
Schema = mongoose.Schema;

var SN2_1P2_1 = new Schema({
    A2_E1_2_1_CW: {type: String},
    A2_E1_2_1_AMP: {type: String},
    A2_E1_2_1_TMB: {type: String},
    A2_E1_2_2_1: {type: Number},
    A2_E1_2_2_2: {type: Number},
    A2_E1_2_2_3: {type: Number},
    A2_E1_2_3: {type: Number},
    A2_E1_2_4: {type: Number},
    A2_E1_2_4_2_1: {type: Number},
    A2_E1_2_4_2_2: {type: Number},
    A2_E1_2_4_2_3: {type: Number},    
    A2_E1_2_4_3_1_1: {type: Number},
    A2_E1_2_4_3_1_2: {type: Number},
    A2_E1_2_4_3_1_3: {type: Number},
    A2_E1_2_4_3_2_1: {type: Number},
    A2_E1_2_4_3_2_2: {type: Number},
    A2_E1_2_4_3_2_3: {type: Number},
    A2_E1_2_4_3_3_1: {type: Number},
    A2_E1_2_4_3_3_2: {type: Number},
    A2_E1_2_4_3_3_3: {type: Number},
    A2_E1_2_4_3_4_1: {type: Number},
    A2_E1_2_4_3_4_2: {type: Number},
    A2_E1_2_4_3_4_3: {type: Number},
    A2_E1_2_5_1_1: {type: String},
    A2_E1_2_5_1_2: {type: String},
    A2_E1_2_6_1: {type: Number},
    A2_E1_2_7_1: {type: Number},
    A2_E1_2_8_1: {type: Boolean},
    A2_E1_2_5_2_1: {type: String},
    A2_E1_2_5_2_2: {type: String},
    A2_E1_2_6_2: {type: Number},
    A2_E1_2_7_2: {type: Number},
    A2_E1_2_8_2: {type: Boolean},
    A2_E1_2_5_3_1: {type: String},
    A2_E1_2_5_3_2: {type: String},
    A2_E1_2_6_3: {type: Number},
    A2_E1_2_7_3: {type: Number},
    A2_E1_2_8_3: {type: Boolean},
    A2_E1_2_5_4_1: {type: String},
    A2_E1_2_5_4_2: {type: String},
    A2_E1_2_6_4: {type: Number},
    A2_E1_2_7_4: {type: Number},
    A2_E1_2_8_4: {type: Boolean},
    A2_E1_2_9_1: {type: Boolean},
    A2_E1_2_9_2: {type: Boolean},
    A2_E1_2_9_3: {type: Boolean},
    A2_E1_2_9_4: {type: Boolean},
    A2_E1_2_9_5: {type: Boolean},
    A2_E1_2_9_6: {type: Boolean},
    A2_E1_2_9_7: {type: Boolean},
    A2_E1_2_9_8: {type: Boolean},
    A2_E1_2_9_8_1: {type: String},
});

module.exports = mongoose.model('SN2_1P2_1', SN2_1P2_1);
