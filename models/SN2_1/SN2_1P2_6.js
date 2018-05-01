var mongoose = require('mongoose'),
Schema = mongoose.Schema;

var SN2_1P2_6 = new Schema({
    A2_E6_2_1_CW: {type: String},
    A2_E6_2_1_AMP: {type: String},
    A2_E6_2_1_TMB: {type: String},
    A2_E6_2_2_1: {type: Number},
    A2_E6_2_2_2: {type: Number},
    A2_E6_2_2_3: {type: Number},
    A2_E6_2_3: {type: Boolean},
    A2_E6_2_4_1: {type: String},
    A2_E6_2_4_2: {type: String},
    A2_E6_2_4_3: {type: String},
    A2_E6_2_4_4: {type: String},
    A2_E6_2_4_5: {type: String},
    A2_E6_2_5: {type: Number},
    A2_E6_2_5_2: [{type: String}],
    A2_E6_2_6_1: {type: Boolean},
    A2_E6_2_6_2: {type: Boolean},
    A2_E6_2_6_3: {type: Boolean},
    A2_E6_2_6_4: {type: Boolean},
    A2_E6_2_6_5: {type: Boolean},
    A2_E6_2_6_6: {type: Boolean},
    A2_E6_2_6_7: {type: Boolean},
    A2_E6_2_6_8: {type: Boolean},
    A2_E6_2_6_9: {type: Boolean},
    A2_E6_2_6_9_1: {type: String}
   
});

module.exports = mongoose.model('SN2_1P2_6', SN2_1P2_6);
