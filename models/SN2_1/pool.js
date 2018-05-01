var mongoose = require('mongoose'),
Schema = mongoose.Schema;

var Pool = new Schema({
    A2_E9_1_1_2_2_1: {type: Boolean},
    A2_E9_1_1_2_2_1_1: {type: Number},
    A2_E9_1_1_2_2_2: {type: Number},
    A2_E9_1_1_2_2_2_1:{type: Number},
    A2_E9_1_1_2_2_2_2: {type: Number},
    A2_E9_1_1_2_2_2_3: {type: Number},
    A2_E9_1_1_2_2_2_4: {type: Number},
    A2_E9_1_1_2_2_3_1: {type: Boolean},
    A2_E9_1_1_2_2_3_1_1: {type: Number},
    A2_E9_1_1_2_2_3_1_2: {type: Number},
    A2_E9_1_1_2_2_3_1_3: {type: Number},
    A2_E9_1_1_2_2_3_2: {type: Boolean},
    A2_E9_1_1_2_2_3_2_1: {type: Number},
    A2_E9_1_1_2_2_3_2_2: {type: Number},
});

module.exports = mongoose.model('Pool', Pool);
