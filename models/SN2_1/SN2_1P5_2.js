var mongoose = require('mongoose'),
Schema = mongoose.Schema;

var SN2_1P5_2   = new Schema({
    A5_2_1: {type: Boolean},
    A5_2_2: {type: Number},
    A5_2_2_1: {type: Number},
    A5_2_3:[{ type: Schema.Types.ObjectId, ref: 'SN2_1P5_2_3' }],
    A5_2_4: {type: Boolean},
    A5_2_4_0:{ type: Schema.Types.ObjectId, ref: 'SN2_1P5_2_3' }    
});

module.exports = mongoose.model('SN2_1P5_2', SN2_1P5_2);
