var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var SN1 = new Schema({
    SN1P1: {
        REG: { type: String },
        REG_NAME: { type: String },
        CWT: { type: String },
        CWT_NAME: { type: String },
        AMP: { type: String },
        AMP_NAME: { type: String },
        TAM: { type: String },
        TAM_NAME: { type: String },
        DISTRICT: { type: String },
        MUN: { type: String },
        MUN_NAME: { type: String },
        TAO: { type: String },
        TAO_NAME: { type: String },
        EA: { type: String },
        VIL: { type: String },
        VIL_NAME: { type: String },
        FI_ID: { type: String },
        FS_ID: { type: String },
        FI_DATE: { type: String },
        FS_DATE: { type: String },
    },
    SN1P2: [{
        A1: { type: Number },
        A2: { type: String },
        A3: { type: String },
        A4: { type: String },
        A5: { type: Number },
        A6: { type: Number },
        A7: { type: Number },
        A8: { type: Number },
        A9: { type: Number },
        A10: { type: Number },
        H1_1: { type: Number },
        H1_2: { type: Number },
        H1_3: { type: Number },
        H1_4: { type: Number },
        N: { type: Number },
        N0: { type: Number },
        N1: { type: Number },
        N1: { type: Number },
        P1: { type: Number },
        P2: { type: Number },
        P3: { type: Number },
        P4: { type: Number },
        A11: { type: String },
        SN1P3: [{
            A1: { type: Number },
            H3: { type: Number },
            H4: { type: String },
            H5_1: { type: Number },
            H5_2: { type: Number },
            H5_3: { type: Number },
            G1: { type: Boolean },
            G2: { type: Boolean },
            G3: { type: Boolean },
            G4: { type: Boolean },
            A11: String
        }]
    }],
    status_approve: Number,
    status_data: Number,
    messeges: [{
        date: { type: Date },
        massage: { type: String }
    }]
});

module.exports = mongoose.model('SN1', SN1);