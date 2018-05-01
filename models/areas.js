var mongoose = require('mongoose'),
Schema = mongoose.Schema;

var areas = new Schema({
    REG : { Type : String},
    REG_NAME : { Type : String},
    CWT : { Type : String},
    CWT_NAME : { Type : String},
    AMP : { Type : String},
    AMP_NAME : { Type : String},
    TAM : { Type : String},
    TAM_NAME : { Type : String},
    DISTRICT : { Type : String},
    MUN : { Type : String},
    MUN_NAME : { Type : String},
    TAO : { Type : String},
    TAO_NAME : { Type : String},
    EA : { Type : String},
    VIL : { Type : String},
    VIL_NAME : { Type : String},
    MAP_STATUS : { Type : String},
    Building : { Type : Number},
    Household : { Type : Number},
    Agricultural_HH : { Type : Number},
    ES_BUSI : { Type : Number},
    ES_INDUS : { Type : Number},
    ES_HOTEL : { Type : Number},
    ES_PV_HOS : { Type : Number},
    REMARK : { Type : String},
    FI : [{ Type : String}],
    FS : { Type : String},
});

module.exports = mongoose.model('Area', areas);