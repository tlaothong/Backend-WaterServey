var mongoose = require('mongoose'),
Schema = mongoose.Schema;

var SN2_1P2_4  = new Schema({
    A2_E4_2_1_CW: {type: String},
    A2_E4_2_1_AMP: {type: String},
    A2_E4_2_1_TMB: {type: String},
    A2_E4_2_2_1: {type: Number},
    A2_E4_2_2_2: {type: Number},
    A2_E4_2_2_3: {type: Number},
    A2_E4_2_3: {type: Boolean},
    A2_E4_2_4_1: {type: String},
    A2_E4_2_4_2: {type: String},
    A2_E4_2_4_3: {type: String},
    A2_E4_2_4_4: {type: String},
    A2_E4_2_4_5: {type: String},
    A2_E4_2_5_1: {type: Boolean},
    A2_E4_2_5_2: {type: Boolean},
    A2_E4_2_5_3: {type: Boolean},
    A2_E4_2_5_4: {type: Boolean},
    A2_E4_2_5_5: {type: Boolean},
    A2_E4_2_5_6: {type: Boolean},
    A2_E4_2_5_7: {type: Boolean},
    A2_E4_2_5_8: {type: Boolean},
    A2_E4_2_5_9: {type: Boolean},
    A2_E4_2_5_9_1: {type: String},
   
});

module.exports = mongoose.model('SN2_1P2_4', SN2_1P2_4);
