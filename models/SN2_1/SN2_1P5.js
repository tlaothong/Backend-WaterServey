var mongoose = require('mongoose'),
Schema = mongoose.Schema;

var SN2_1P5 = new Schema({
    A5_1 : { type: Schema.Types.ObjectId, ref: 'SN2_1P5_1' },
    A5_2 : { type: Schema.Types.ObjectId, ref: 'SN2_1P5_2' },
    A5_3 : { type: Schema.Types.ObjectId, ref: 'SN2_1P5_3' },
    A5_4 : { type: Schema.Types.ObjectId, ref: 'SN2_1P5_4' },
    A5_5 : { type: Schema.Types.ObjectId, ref: 'SN2_1P5_5' },
    A5_6 : { type: Schema.Types.ObjectId, ref: 'SN2_1P5_6' },
    A5_7 : { type: Schema.Types.ObjectId, ref: 'SN2_1P5_7' },
});

module.exports = mongoose.model('SN2_1P5', SN2_1P5);

