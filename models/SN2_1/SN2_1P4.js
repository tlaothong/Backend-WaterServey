var mongoose = require('mongoose'),
Schema = mongoose.Schema;

var SN2_1P4  = new Schema({
    A4_1: {type: String},
    A4_2_1: {type: String},
    A4_2_2: {type: String},
    A4_2_3: {type: String},
    A4_2_4: {type: String},
    A4_3_1: {type: String},
    A4_3_2: {type: String},
    A4_4: {type: String},
    A4_5: {type: Number},
    A4_6_1_1_1: {type: Boolean},
    A4_6_1_1_2: {type: Boolean},
    A4_6_1_1_3: {type: Boolean},
    A4_6_1_1_4: {type: Boolean},
    A4_6_1_1_5: {type: Boolean},
    A4_6_1_1_6: {type: Boolean},
    A4_6_1_2_1: {type: Number},
    A4_6_1_2_2: {type: Number},
    A4_6_1_2_3: {type: Number},
    A4_6_1_2_4: {type: Number},
    A4_6_1_2_5: {type: Number},
    A4_6_1_2_6: {type: Number},
    A4_6_1_3: {type: Number},
    A4_6_2_1: {type: Number},
    A4_6_2_2: {type: Number},
    A4_6_3_1: {type: Number},
    A4_6_3_2: {type: Number},
    A4_6_4_1: {type: Number},
    A4_6_4_2: {type: Number},
    A4_6_4_3: {type: Number},
    A4_6_5_1: {type: Number},
    A4_6_6_1: {type: Number},
    A4_7_1: {type: Boolean},
    A4_7_2: {type: Boolean},
    A4_7_3: {type: Boolean},
    A4_7_4: {type: Boolean},
    A4_7_5: {type: Boolean},
    A4_7_6: {type: Boolean},
    A4_7_7: {type: Boolean},
    A4_7_8: {type: Boolean},
    A4_7_8_1: {type: String}
});

module.exports = mongoose.model('SN2_1P4', SN2_1P4);

