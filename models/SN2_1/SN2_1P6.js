var mongoose = require('mongoose'),
Schema = mongoose.Schema;

var SN2_1P6  = new Schema({
    A6_1: {type: Boolean},
    A6_2_1_1: {type: Number},
    A6_2_1_2: {type: Number},
    A6_2_1_3: {type: Number},
    A6_2_1_4: {type: Number},
    A6_2_2_1: {type: Number},
    A6_2_2_2: {type: Number},
    A6_2_2_3: {type: Number},
    A6_2_2_4: {type: Number},
    A6_2_3_1: {type: Number},
    A6_2_3_2: {type: Number},
    A6_2_3_3: {type: Number},
    A6_2_3_4: {type: Number},
    A6_2_4_1: {type: Number},
    A6_2_4_2: {type: Number},
    A6_2_4_3: {type: Number},
    A6_2_4_4: {type: Number},
    A6_2_5_1: {type: Number},
    A6_2_5_2: {type: Number},
    A6_2_5_3: {type: Number},
    A6_2_5_4: {type: Number},
});

module.exports = mongoose.model('SN2_1P6', SN2_1P6);
