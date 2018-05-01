var mongoose = require('mongoose'),
Schema = mongoose.Schema;

var SN1P3 =  new Schema({
    A1 : { type: Number },
    H3: { type: Number},
    H4: { type: String},
    H5_1: { type: Number},
    H5_2: { type: Number},
    H5_3: { type: Number},
    G1: { type: Boolean},
    G2: { type: Boolean},
    G3: { type: Boolean},
    G4: { type: Boolean},
    A11 : String
});
module.exports = mongoose.model('SN1P3', SN1P3);
