var mongoose = require('mongoose'),
Schema = mongoose.Schema;

var SN2_1P5_7  = new Schema({
    A5_7_1_1_1: {type: Number},
    A5_7_1_1_2: {type: Number},
    A5_7_1_1_3: {type: Number},
    A5_7_1_1_4: {type: Number},
    A5_7_1_1_5: {type: Number},
    A5_7_1_2_1: {type: Number},
    A5_7_1_2_2: {type: Number},
    A5_7_1_2_3: {type: Number},
    A5_7_1_2_4: {type: Number},
    A5_7_1_2_5: {type: Number},
    A5_7_1_3_1: {type: Number},
    A5_7_1_3_2: {type: Number},
    A5_7_1_3_3: {type: Number},
    A5_7_1_3_4: {type: Number},
    A5_7_1_3_5: {type: Number},
    A5_7_1_4_1: {type: Number},
    A5_7_1_4_2: {type: Number},
    A5_7_1_4_3: {type: Number},
    A5_7_1_4_4: {type: Number},
    A5_7_1_4_5: {type: Number},
    A5_7_1_5_1: {type: Number},
    A5_7_1_5_2: {type: Number},
    A5_7_1_5_3: {type: Number},
    A5_7_1_5_4: {type: Number},
    A5_7_1_5_5: {type: Number}

});

module.exports = mongoose.model('SN2_1P5_7', SN2_1P5_7);
