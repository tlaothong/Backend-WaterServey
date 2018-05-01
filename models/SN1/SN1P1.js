var mongoose = require('mongoose'),
Schema = mongoose.Schema;

var SN1P1 = new Schema({
    REG : { type : String },
    REG_NAME : { type : String },
    CWT : { type : String },
    CWT_NAME : { type : String },
    AMP : { type : String },
    AMP_NAME : { type : String },
    TAM : { type : String },
    TAM_NAME : { type : String },
    DISTRICT : { type : String },
    MUN : { type : String },
    MUN_NAME : { type : String },
    TAO : { type : String },
    TAO_NAME : { type : String },
    EA : { type : String },
    VIL : { type : String },
    VIL_NAME : { type : String },   
    FI_ID : { type : String },
    FS_ID : { type : String },
    FI_DATE : { type : String },
    FS_DATE : { type : String },
});

module.exports = mongoose.model('SN1P1', SN1P1);
