var mongoose = require('mongoose'),
Schema = mongoose.Schema;

var SN2_2P0 = new Schema({
    REG : {type:  String},
    REG_NAME : {type:  String},
    CWT : {type:  String},
    CWT_NAME : {type:  String},
    AMP : {type:  String},
    AMP_NAME : {type:  String},
    TAM : {type:  String},
    TAM_NAME : {type:  String},
    DISTRICT : {type:  String},
    MUN : {type:  String},
    MUN_NAME : {type:  String},
    TAO : {type:  String},
    TAO_NAME : {type:  String},
    EA : {type:  String},
    VIL : {type:  String},
    VIL_NAME : {type:  String},
    BASIN : {type:  String},
    FI_ID : {type:  String},
    FS_ID : {type:  String},
    FI_DATE : {type:  String},
    FS_DATE : {type:  String},
});

module.exports = mongoose.model('SN2_2P0', SN2_2P0);
