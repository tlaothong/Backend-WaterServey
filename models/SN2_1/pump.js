var mongoose = require('mongoose'),
Schema = mongoose.Schema;

var Pump = new Schema({
    A5_2_3_4_1: {type: Number},
    A5_2_3_4_1_1: {type: Boolean},
    A5_2_3_4_2: {type: Number},
    A5_2_3_4_3: {type: Number},
    A5_2_3_4_3_1: {type: Boolean},
    A5_2_3_4_4_1: {type: Boolean},
    A5_2_3_4_4_2: {type: Boolean},
    A5_2_3_4_4_3: {type: Boolean},
    A5_2_3_4_5: {type: Number},
    A5_2_3_4_6: {type: Number},
    A5_2_3_4_7: {type: Number},
});

module.exports = mongoose.model('Pump', Pump);
