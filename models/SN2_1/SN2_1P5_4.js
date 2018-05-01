var mongoose = require('mongoose'),
Schema = mongoose.Schema;

var SN2_1P5_4  = new Schema({
    A5_4_1: {type: Boolean},
    A5_4_2: {type: Number},
    A5_4_3: {type: Boolean},
    A5_4_3_1:[{ type: Schema.Types.ObjectId, ref: 'SN2_1P5_4_3' }],
    A5_4_4: {type: Number},
    A5_4_4_1:[{ type: Schema.Types.ObjectId, ref: 'SN2_1P5_4_4' }],
});

module.exports = mongoose.model('SN2_1P5_4', SN2_1P5_4);
