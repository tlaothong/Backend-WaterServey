var mongoose = require('mongoose'),
Schema = mongoose.Schema;

var SN2_1P5_6  = new Schema({
    A5_6_1_1_1: {type: Number},
    A5_6_1_1_2: {type: Number},
    A5_6_1_2_1: {type: Number},
    A5_6_1_2_2: {type: Number},
    A5_6_1_3_1: {type: Number},
    A5_6_1_3_2: {type: Number},
    A5_6_1_4_1: {type: Number},
    A5_6_1_4_2: {type: Number},
    A5_6_1_5_1: {type: Number},
    A5_6_1_5_2: {type: Number},
    A5_6_2_1: {type: Number},
    A5_6_2_2: {type: Number},
    A5_6_2_3: {type: Number},
    A5_6_2_4: {type: Number},
    A5_6_2_5: {type: Number}
});

module.exports = mongoose.model('SN2_1P5_6', SN2_1P5_6);
