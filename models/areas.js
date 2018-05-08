var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var areas = new Schema({
    REG: String,
    REG_NAME: String,
    CWT: String,
    CWT_NAME: String,
    AMP: String,
    AMP_NAME: String,
    TAM: String,
    TAM_NAME: String,
    DISTRICT: String,
    MUN: String,
    MUN_NAME: String,
    TAO: String,
    TAO_NAME: String,
    EA: String,
    VIL: String,
    VIL_NAME: String,
    MAP_STATUS: String,
    Building: Number,
    Household: Number,
    Agricultural_HH: Number,
    ES_BUSI: Number,
    ES_INDUS: Number,
    ES_HOTEL: Number,
    ES_PV_HOS: Number,
    REMARK: String,
    FI: [String],
    FS: String,
});

module.exports = mongoose.model('Area', areas);