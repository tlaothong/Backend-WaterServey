var mongoose = require('mongoose'),
Schema = mongoose.Schema;

var SN2_1P5_3  = new Schema({
    A5_3_1: {type: Number},
    A5_3_1_1: {type: Boolean},
    A5_3_2: {type: Boolean},
    A5_3_3: {type: Number},
    A5_3_3_1: [{ type: Schema.Types.ObjectId, ref: 'Pump' }],
    A5_3_4_1: {type: Number},
    A5_3_4_2: {type: Number},
    A5_3_4_3: {type: Number},
    A5_3_4_4: {type: Number},
    A5_3_4_5: {type: Number},
    A5_3_4_6: {type: Number},
    A5_3_5_1: {type: Boolean},
    A5_3_5_2_1: {type: Boolean},
    A5_3_5_2_2: {type: Boolean},
    A5_3_5_2_3: {type: Boolean},
    A5_3_5_2_4: {type: Boolean}
});

module.exports = mongoose.model('SN2_1P5_3', SN2_1P5_3);
