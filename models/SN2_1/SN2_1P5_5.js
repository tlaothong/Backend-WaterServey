var mongoose = require('mongoose'),
Schema = mongoose.Schema;

var SN2_1P5_5  = new Schema({
    A5_5_1: {type: Number},
    A5_5_1_1: {type: Boolean},
    A5_5_2: {type: Boolean},
    A5_5_3: {type: Number},
    A5_5_3_1:[{ type: Schema.Types.ObjectId, ref: 'Pump' }],
    A5_5_4_1: {type: Number},
    A5_5_4_2: {type: Number},
    A5_5_4_3: {type: Number},
    A5_5_4_4: {type: Number},
    A5_5_4_5: {type: Number},
    A5_5_4_6: {type: Number},
    A5_5_5_1: {type: Boolean},
    A5_5_5_2_1: {type : Boolean},
    A5_5_5_2_2: {type : Boolean},
    A5_5_5_2_3: {type : Boolean},
    A5_5_5_2_4: {type : Boolean},
});

module.exports = mongoose.model('SN2_1P5_5', SN2_1P5_5);
