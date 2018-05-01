var mongoose = require('mongoose'),
Schema = mongoose.Schema;

var SN1P2  = new Schema({
    A1: { type: Number },
    A2: { type:  String},
    A3: { type:  String},
    A4: { type:  String},
    A5: { type:  Number},
    A6: { type:  Number},
    A7: { type:  Number},
    A8: { type:  Number},
    A9: { type:  Number},
    A10: { type:  Number},
    H1_1: { type:  Number},
    H1_2: { type:  Number},
    H1_3: { type:  Number},
    H1_4: { type:  Number},
    N: { type:  Number},
    N0: { type: Number},
    N1: { type: Number},
    N1: { type: Number},
    P1: {type: Number},
    P2: { type: Number},
    P3: { type: Number},
    P4: { type: Number},
    A11: { type: String},
    SN1P3 : [{ type: Schema.Types.ObjectId,ref: 'SN1P3' }]
});
module.exports = mongoose.model('SN1P2', SN1P2);
