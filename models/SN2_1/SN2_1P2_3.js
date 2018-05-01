var mongoose = require('mongoose'),
Schema = mongoose.Schema;

var SN2_1P2_3  = new Schema({
    A2_E3_2_1_CW: {type: String},
    A2_E3_2_1_AMP: {type: String},
    A2_E3_2_1_TMB: {type: String},
    A2_E3_2_2_1: {type: Number},
    A2_E3_2_2_2: {type: Number},
    A2_E3_2_2_3: {type: Number},
    A2_E3_2_3: {type: Boolean},
    A2_E3_2_4_1: {type: Boolean},
    A2_E3_2_4_2: {type: Boolean},
    A2_E3_2_4_3: {type: Boolean},
    A2_E3_2_4_4: {type: Boolean},
    A2_E3_2_4_5: {type: Boolean},
    A2_E3_2_4_6: {type: Boolean},
    A2_E3_2_4_7: {type: Boolean},
    A2_E3_2_4_8: {type: Boolean},
    A2_E3_2_4_9: {type: Boolean},
    A2_E3_2_4_9_1: {type: String}
});

module.exports = mongoose.model('SN2_1P2_3', SN2_1P2_3);
