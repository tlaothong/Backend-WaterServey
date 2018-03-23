//import { type } from 'os';

var mongoose = require('mongoose'),
Schema = mongoose.Schema;

var User = new Schema({
    USERID: {type: String ,unique: true},
    FIRSTNAME: {type: String},
    LASTNAME: {type: String},
    EMAIL: {type: String},
    PHONE: {type: String},
    PID : {type: String},
    PNAME : {type: String},
    province: {type: String },
    role: {type: String },
    image_url: {type: String },
    PASSWORD: {type: String},
    fi_eas:[{ type: Schema.Types.ObjectId, ref: 'EnumerationAreas' }],
    fs_eas:[{ type: Schema.Types.ObjectId, ref: 'EnumerationAreas' }],
    fi_wc21s:[{ type: Schema.Types.ObjectId, ref: 'WaterCensus21' }],
    fs_wc21s:[{ type: Schema.Types.ObjectId, ref: 'WaterCensus21' }]
});

var Region = new Schema({
    reg: { type: Number ,unique: true,index: true},
    reg_name: { type: String },
    }); 

var Changwat = new Schema({
        reg : Number,
        cwt : { type: Number ,unique: true,index: true },
        cwt_name : String 
    });
   
var Amphoe = new Schema({
        reg :Number,
        cwt : Number,
        amp : { type: Number ,unique: true,index: true},
        amp_name :  String  
    });

var Tambon = new Schema({
        reg :Number,
        cwt : Number,
        amp : { type: Number },
        tmb : { type: Number ,unique: true,index: true},
        tmb_name : { type: String}    
    });

var District = new Schema({
        reg :Number,
        cwt : Number,
        amp : { type: Number },
        tmb : { type: Number },
        district : {type :Number ,index: true},
        mun_tao : { type : Number ,unique: true,index: true},
        district_name : { type: String} 
    });

var EnumerationArea = new Schema({
        reg :Number,
        cwt : Number,
        amp : Number ,
        tmb : Number ,
        district : Number,
        mun_tao : Number,
        ea : Number,
        vil : Number,
        vil_name : String,
        map_status : Number,
        building : Number,
        household : Number,
        agricultural_HH : Number,
        es_BUSI : Number,
        es_INDUS : Number,
        es_HOTEL : Number,
        es_PV_HOS : Number,
        remark : String,
        fs_id:{ type: Schema.Types.ObjectId, ref: 'User' },
        fi_id:[{ type: Schema.Types.ObjectId, ref: 'User'}]
    });

var WaterCensus1 = new Schema({
    ea_id:{ type: Schema.Types.ObjectId, ref: 'EnumerationArea' },
    listing_date: { type: Date },
    check_date: { type: Date },
    fs_id:{ type: Schema.Types.ObjectId, ref: 'User' },
    fi_id:{ type: Schema.Types.ObjectId, ref: 'User' },
    buildings:[{ type: Schema.Types.ObjectId, ref: 'Building' }]
    });

var Building = new Schema({
    wc1_id:{ type: Schema.Types.ObjectId, ref: 'WaterCensus1' },
    fs_id:{ type: Schema.Types.ObjectId, ref: 'User' },
    fi_id:{ type: Schema.Types.ObjectId, ref: 'User' },
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
    N1: { type: Boolean},
    P2: { type: Boolean},
    P3: { type: Boolean},
    P4: { type: Boolean},
    A11: { type: String},
    households:[{ type: Schema.Types.ObjectId, ref: 'Household' }]
});

var Household =  new Schema({
    bd_id:{ type: Schema.Types.ObjectId, ref: 'Building' },
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

var  WaterCensus21 = new Schema({
    hh_id:{ type: Schema.Types.ObjectId, ref: 'Household' },
    a1: { type: Schema.Types.ObjectId, ref: 'Household' },
    listing_date: { type: Date},
    check_date: { type: Date},
    fs_id:{ type: Schema.Types.ObjectId, ref: 'User' },
    fi_id:{ type: Schema.Types.ObjectId, ref: 'User' },
    SN2_1P1:{ type: Schema.Types.ObjectId, ref: 'SN2_1P1' },
    wc21_2:{ type: Schema.Types.ObjectId, ref: 'WC21_2' },
    wc21_3:{ type: Schema.Types.ObjectId, ref: 'WC21_3' },
    wc21_4:{ type: Schema.Types.ObjectId, ref: 'WC21_4' },  
    wc21_5_1:{ type: Schema.Types.ObjectId, ref: 'WC21_5_1' },
    wc21_5_2:{ type: Schema.Types.ObjectId, ref: 'WC21_5_2' },
    wc21_5_3:{ type: Schema.Types.ObjectId, ref: 'WC21_5_3' },
    wc21_5_4:{ type: Schema.Types.ObjectId, ref: 'WC21_5_4' },
    wc21_5_5:{ type: Schema.Types.ObjectId, ref: 'WC21_5_5' },
    wc21_5_6:{ type: Schema.Types.ObjectId, ref: 'WC21_5_6' },
    wc21_5_7:{ type: Schema.Types.ObjectId, ref: 'WC21_5_7' },
    wc21_6:{ type: Schema.Types.ObjectId, ref: 'WC21_6'},
    messeges : {
        date: {type: Date},
        massage: {type: String}
    }
});

var SN2_1P1 = new Schema({
    wc2_1_id:{ type: Schema.Types.ObjectId, ref: 'WaterCensus21' },
    A1_1: { type: String},
    A1_2: { type: Number},
    A1_2_1: { type: Number},
    A1_2_2: { type: Number},
    A1_2_3: { type: Number},
    A1_2_4: { type: Number},
    A1_2_5: { type: Number}, 
    A1_2_6: { type: Number},
    A1_2_7: { type: Number},
    A1_2_8: { type: Number},
    A1_2_9: { type: Number},
    A1_3: { type: Boolean},
    A1_4_1: { type: Boolean},
    A1_4_2: { type: Boolean},
    A1_4_3: { type: Boolean},
    A1_4_4: { type: Boolean},
    A1_4_5: { type: Boolean},
    A1_4_6: { type: Boolean},
    A1_4_7: { type: Boolean},
    A1_4_8: { type: Boolean},
    A1_4_8_1: { type: String},
});

var SN2_1P2  = new Schema({
    wc2_1_id:{ type: Schema.Types.ObjectId, ref: 'WaterCensus21' },
    A2_E1_1: { type: Boolean},
    A2_E1_2: { type: Number},
    A2_E1:[{ type: Schema.Types.ObjectId, ref: 'SN2_1P2_1' }],
    A2_E2_1: { type: Boolean},
    A2_E2_2: { type: Number},
    A2_E2:[{ type: Schema.Types.ObjectId, ref: 'SN2_1P2_2' }],
    A2_E3_1: { type: Boolean},
    A2_E3_2: { type: Number},
    A2_E3:[{ type: Schema.Types.ObjectId, ref: 'SN2_1P2_3' }],
    A2_E4_1: { type: Boolean},
    A2_E4_2: { type: Number},
    A2_E4:[{ type: Schema.Types.ObjectId, ref: 'SN2_1P2_4' }],
    A2_E5_1: { type: Boolean},
    A2_E5_2: { type: Number},
    A2_E5:[{ type: Schema.Types.ObjectId, ref: 'SN2_1P2_5' }],
    A2_E6_1: { type: Boolean},
    A2_E6_2: { type: Number},
    A2_E6:[{ type: Schema.Types.ObjectId, ref: 'SN2_1P2_6' }],
    A2_E7_1: { type: Boolean},
    A2_E7_2: { type: Number},
    A2_E7:[{ type: Schema.Types.ObjectId, ref: 'SN2_1P2_7' }],
    A2_E8_1: { type: Boolean},
    A2_E8_2_1: { type: Number},
    A2_E8_2_2: { type: Number},
    A2_E8_2_3: { type: Number},
    A2_E8_2_4: { type: Number},
    A2_E8_2_5: { type: Number},
    A2_E8_2_6: { type: Number},
    A2_E8_2_7: { type: Number},
    A2_E8_2_8: { type: Number},
    A2_E8_2_9: { type: Number},
    A2_E8_2_10: {type: Number},
    A2_E8_2_10_1: {type: String},
    A2_E8_3_1: { type: Boolean},
    A2_E8_3_2: { type: Boolean},
    A2_E8_3_3: { type: Boolean},
    A2_E8_3_4: { type: Boolean},
    A2_E8_3_5: { type: Boolean},
    A2_E8_3_6: { type: Boolean},
    A2_E8_3_7: { type: Boolean},
    A2_E8_3_8: { type: Boolean},
    A2_E8_3_9: { type: Boolean},
    A2_E8_3_9_1: { type: Boolean},
    A2_E9_1: { type: Boolean},
    A2_E9_1_1: { type: Boolean},
    A2_E9_1_2: { type: Boolean},
    A2_E9_1_3: { type: Boolean},
    A2_E9_1_4: { type: Boolean},
    A2_E9_1_5: { type: Boolean},
    A2_E9_1_6: { type: Boolean},
    A2_E9_1_7: { type: Boolean},
    A2_E9_1_8: { type: Boolean},
    A2_E9_1_9: { type: Boolean},
    A2_E9_1_1_1:{ type: Schema.Types.ObjectId, ref: 'SN2_1P2_9_1' },
    A2_E9_1_1_2:{ type: Schema.Types.ObjectId, ref: 'SN2_1P2_9_1' },
    A2_E9_1_1_3:{ type: Schema.Types.ObjectId, ref: 'SN2_1P2_9_3' },
    A2_E9_1_1_4:{ type: Schema.Types.ObjectId, ref: 'SN2_1P2_9_4' },
    A2_E9_1_1_5:{ type: Schema.Types.ObjectId, ref: 'SN2_1P2_9_4' },
    A2_E9_1_1_6:{ type: Schema.Types.ObjectId, ref: 'SN2_1P2_9_1' },
    A2_E9_1_1_7:{ type: Schema.Types.ObjectId, ref: 'SN2_1P2_9_1' },
    A2_E9_1_1_8:{ type: Schema.Types.ObjectId, ref: 'SN2_1P2_9_3' },
    A2_E9_1_1_9:{ type: Schema.Types.ObjectId, ref: 'SN2_1P2_9_3' },
});
var SN2_1P3  = new Schema({
    wc2_1_id:{ type: Schema.Types.ObjectId, ref: 'WaterCensus21' },
    A3_1: {type: String},
    A3_2_1: {type: String},
    A3_2_2: {type: String},
    A3_2_3: {type: String},  
    A3_2_4: {type: String},
    A3_3_1: {type: String},
    A3_3_2: {type: String},
    A3_4: {type: String},
    A3_5: {type: String},
    A3_6: {type: Number},
    A3_7: {type: Boolean},
    A3_8_1:{ type: Boolean},
    A3_8_2:{ type: Boolean},
    A3_8_3:{ type: Boolean},
    A3_8_4:{ type: Boolean},
    A3_8_5:{ type: Boolean},
    A3_8_6:{ type: Boolean},
    A3_8_7:{ type: Boolean},
    A3_8_8:{ type: Boolean},
    A3_8_8_1:{ type: String},
    A3_9: {type: Boolean},
    A3_10: {type: Boolean},
    A3_11: {type: Boolean}
});
var SN2_1P4  = new Schema({
    wc2_1_id:{ type: Schema.Types.ObjectId, ref: 'WaterCensus21' },
    A4_1: {type: String},
    A4_2_1: {type: String},
    A4_2_2: {type: String},
    A4_2_3: {type: String},
    A4_2_4: {type: String},
    A4_3_1: {type: String},
    A4_3_2: {type: String},
    A4_4: {type: String},
    A4_5: {type: Number},
    A4_6_1_1_1: {type: Boolean},
    A4_6_1_1_2: {type: Boolean},
    A4_6_1_1_3: {type: Boolean},
    A4_6_1_1_4: {type: Boolean},
    A4_6_1_1_5: {type: Boolean},
    A4_6_1_1_6: {type: Boolean},
    A4_6_1_2_1: {type: Number},
    A4_6_1_2_2: {type: Number},
    A4_6_1_2_3: {type: Number},
    A4_6_1_2_4: {type: Number},
    A4_6_1_2_5: {type: Number},
    A4_6_1_2_6: {type: Number},
    A4_6_1_3: {type: Number},
    A4_6_2_1: {type: Number},
    A4_6_2_2: {type: Number},
    A4_6_3_1: {type: Number},
    A4_6_3_2: {type: Number},
    A4_6_4_1: {type: Number},
    A4_6_4_2: {type: Number},
    A4_6_4_3: {type: Number},
    A4_6_5_1: {type: Number},
    A4_6_6_1: {type: Number},
    A4_7_1: {type: Boolean},
    A4_7_2: {type: Boolean},
    A4_7_3: {type: Boolean},
    A4_7_4: {type: Boolean},
    A4_7_5: {type: Boolean},
    A4_7_6: {type: Boolean},
    A4_7_7: {type: Boolean},
    A4_7_8: {type: Boolean},
    A4_7_8_1: {type: String}
});


var SN2_1P5_1 = new Schema({
    wc2_1_id:{ type: Schema.Types.ObjectId, ref: 'WaterCensus21' },
    A5_1_1_1_1: {type: Boolean},
    A5_1_1_1_2_1: {type: Boolean},
    A5_1_1_1_2_2_1: {type: Boolean},
    A5_1_1_1_2_2_2: {type: Boolean},
    A5_1_1_1_2_2_3: {type: Boolean},
    A5_1_1_1_2_2_4: {type: Boolean},
    A5_1_1_1_2_2_5: {type: Boolean},
    A5_1_1_1_2_2_6: {type: Boolean},
    A5_1_1_1_3_1: {type: Number},
    A5_1_1_1_3_2: {type: Number},
    A5_1_1_1_3_2: {type: Boolean},
    A5_1_1_2_1: {type: Boolean},
    A5_1_1_2_2_1: {type: Boolean},
    A5_1_1_2_2_2_1: {type: Boolean},
    A5_1_1_2_2_2_2: {type: Boolean},
    A5_1_1_2_2_2_3: {type: Boolean},
    A5_1_1_2_2_2_4: {type: Boolean},
    A5_1_1_2_2_2_5: {type: Boolean},
    A5_1_1_2_2_2_6: {type: Boolean},
    A5_1_1_2_3_1: {type: Number},
    A5_1_1_2_3_2: {type: Number},
    A5_1_2_1_1: {type: Number},
    A5_1_2_1_2: {type: Number},
    A5_1_2_2_1: {type: Number},
    A5_1_2_2_2: {type: Number},
    A5_1_2_3_1: {type: Number},
    A5_1_2_3_2: {type: Number},
    A5_1_2_4_1: {type: Number},
    A5_1_2_4_2: {type: Number},
    A5_1_2_5_1: {type: Number},
    A5_1_2_5_2: {type: Number},
    A5_1_3: {type: Boolean},
    A5_1_4: {type: Number},
});
var SN2_1P5_2   = new Schema({
    wc2_1_id:{ type: Schema.Types.ObjectId, ref: 'WaterCensus21' },
    A5_2_1: {type: Boolean},
    A5_2_2: {type: Number},
    A5_2_2_1: {type: Number},
    A5_2_3:[{ type: Schema.Types.ObjectId, ref: 'SN2_1P5_2_3' }],
    A5_2_4: {type: Boolean},
    A5_2_4_1:{ type: Schema.Types.ObjectId, ref: 'SN2_1P5_2_3' }
    
});
var SN2_1P5_3  = new Schema({
    wc2_1_id:{ type: Schema.Types.ObjectId, ref: 'WaterCensus21' },
    A5_3_1: {type: Number},
    A5_3_1_1: {type: Boolean},
    A5_3_2: {type: Boolean},
    A5_3_3: {type: Number},
    A5_3_3_1: [{ type: Schema.Types.ObjectId, ref: 'Pump' }],
    A5_3_4_1: {type: Number},
    A5_3_4_2: {type: Number},
    A5_3_4_3: {type: Number},
    A5_3_4_4: {type: Number},
    A5_3_4_5: {type: Number},
    A5_3_4_6: {type: Number},
    A5_3_5_1: {type: Boolean},
    A5_3_5_2_1: {type: Boolean},
    A5_3_5_2_2: {type: Boolean},
    A5_3_5_2_3: {type: Boolean},
    A5_3_5_2_4: {type: Boolean}
});
var SN2_1P5_4  = new Schema({
    wc2_1_id:{ type: Schema.Types.ObjectId, ref: 'WaterCensus21' },
    A5_4_1: {type: Boolean},
    A5_4_2: {type: Number},
    A5_4_3: {type: Boolean},
    A5_4_3_1:[{ type: Schema.Types.ObjectId, ref: 'SN2_1P5_4_3' }],
    A5_4_4: {type: Number},
    A5_4_4_1:[{ type: Schema.Types.ObjectId, ref: 'SN2_1P5_4_4' }],
});
var SN2_1P5_5  = new Schema({
    wc2_1_id:{ type: Schema.Types.ObjectId, ref: 'WaterCensus21' },
    A5_5_1: {type: Number},
    A5_5_1_1: {type: Boolean},
    A5_5_2: {type: Boolean},
    A5_5_3: {type: Number},
    A5_5_3_1:[{ type: Schema.Types.ObjectId, ref: 'Pump' }],
    A5_5_4_1: {type: Number},
    A5_5_4_2: {type: Number},
    A5_5_4_3: {type: Number},
    A5_5_4_4: {type: Number},
    A5_5_4_5: {type: Number},
    A5_5_4_6: {type: Number},
    A5_5_5_1: {type: Boolean},
    A5_5_5_2_1: {type : Boolean},
    A5_5_5_2_2: {type : Boolean},
    A5_5_5_2_3: {type : Boolean},
    A5_5_5_2_4: {type : Boolean},
});
var SN2_1P5_6  = new Schema({
    wc2_1_id:{ type: Schema.Types.ObjectId, ref: 'WaterCensus21' },
    A5_6_1_1_1: {type: Number},
    A5_6_1_1_2: {type: Number},
    A5_6_1_2_1: {type: Number},
    A5_6_1_2_2: {type: Number},
    A5_6_1_3_1: {type: Number},
    A5_6_1_3_2: {type: Number},
    A5_6_1_4_1: {type: Number},
    A5_6_1_4_2: {type: Number},
    A5_6_1_5_1: {type: Number},
    A5_6_1_5_2: {type: Number},
    A5_6_2_1: {type: Number},
    A5_6_2_2: {type: Number},
    A5_6_2_3: {type: Number},
    A5_6_2_4: {type: Number},
    A5_6_2_5: {type: Number}
});
var SN2_1P5_7  = new Schema({
    wc2_1_id:{ type: Schema.Types.ObjectId, ref: 'WaterCensus21' },
    A5_7_1_1_1: {type: Number},
    A5_7_1_1_2: {type: Number},
    A5_7_1_1_3: {type: Number},
    A5_7_1_1_4: {type: Number},
    A5_7_1_1_5: {type: Number},
    A5_7_1_2_1: {type: Number},
    A5_7_1_2_2: {type: Number},
    A5_7_1_2_3: {type: Number},
    A5_7_1_2_4: {type: Number},
    A5_7_1_2_5: {type: Number},
    A5_7_1_3_1: {type: Number},
    A5_7_1_3_2: {type: Number},
    A5_7_1_3_3: {type: Number},
    A5_7_1_3_4: {type: Number},
    A5_7_1_3_5: {type: Number},
    A5_7_1_4_1: {type: Number},
    A5_7_1_4_2: {type: Number},
    A5_7_1_4_3: {type: Number},
    A5_7_1_4_4: {type: Number},
    A5_7_1_4_5: {type: Number},
    A5_7_1_5_1: {type: Number},
    A5_7_1_5_2: {type: Number},
    A5_7_1_5_3: {type: Number},
    A5_7_1_5_4: {type: Number},
    A5_7_1_5_5: {type: Number}

});
var SN2_1P6  = new Schema({
    wc2_1_id:{ type: Schema.Types.ObjectId, ref: 'WaterCensus21' },
    A6_1: {type: Boolean},
    A6_2_1_1: {type: Number},
    A6_2_1_2: {type: Number},
    A6_2_1_3: {type: Number},
    A6_2_1_4: {type: Number},
    A6_2_2_1: {type: Number},
    A6_2_2_2: {type: Number},
    A6_2_2_3: {type: Number},
    A6_2_2_4: {type: Number},
    A6_2_3_1: {type: Number},
    A6_2_3_2: {type: Number},
    A6_2_3_3: {type: Number},
    A6_2_3_4: {type: Number},
    A6_2_4_1: {type: Number},
    A6_2_4_2: {type: Number},
    A6_2_4_3: {type: Number},
    A6_2_4_4: {type: Number},
    A6_2_5_1: {type: Number},
    A6_2_5_2: {type: Number},
    A6_2_5_3: {type: Number},
    A6_2_5_4: {type: Number},
});


var wtr_source = new Schema({
    _1: {type: String},
    _2: {type: String},
    _3: {type: String},
    _4_1: {type: String},
    _4_2: {type: String}
   
});


var SN2_1P2_1 = new Schema({
    wc21_2_id:{ type: Schema.Types.ObjectId, ref: 'WC21_2' },
    A2_E1_2_1_CW: {type: String},
    A2_E1_2_1_AMP: {type: String},
    A2_E1_2_1_TMB: {type: String},
    A2_E1_2_2_1: {type: Number},
    A2_E1_2_2_2: {type: Number},
    A2_E1_2_2_3: {type: Number},
    A2_E1_2_3: {type: Number},
    A2_E1_2_4: {type: Number},
    A2_E1_2_4_2_1: {type: Number},
    A2_E1_2_4_2_2: {type: Number},
    A2_E1_2_4_2_3: {type: Number},
    A2_E1_2_4_3_1_1: {type: Number},
    A2_E1_2_4_3_1_2: {type: Number},
    A2_E1_2_4_3_1_3: {type: Number},
    A2_E1_2_4_3_2_1: {type: Number},
    A2_E1_2_4_3_2_2: {type: Number},
    A2_E1_2_4_3_2_3: {type: Number},
    A2_E1_2_4_3_3_1: {type: Number},
    A2_E1_2_4_3_3_2: {type: Number},
    A2_E1_2_4_3_3_3: {type: Number},
    A2_E1_2_4_3_4_1: {type: Number},
    A2_E1_2_4_3_4_2: {type: Number},
    A2_E1_2_4_3_4_3: {type: Number},
    A2_E1_2_5_1_1: {type: String},
    A2_E1_2_5_1_2: {type: String},
    A2_E1_2_6_1: {type: Number},
    A2_E1_2_7_1: {type: Number},
    A2_E1_2_8_1: {type: Boolean},
    A2_E1_2_5_2_1: {type: String},
    A2_E1_2_5_2_2: {type: String},
    A2_E1_2_6_2: {type: Number},
    A2_E1_2_7_2: {type: Number},
    A2_E1_2_8_2: {type: Boolean},
    A2_E1_2_5_3_1: {type: String},
    A2_E1_2_5_3_2: {type: String},
    A2_E1_2_6_3: {type: Number},
    A2_E1_2_7_3: {type: Number},
    A2_E1_2_8_3: {type: Boolean},
    A2_E1_2_5_4_1: {type: String},
    A2_E1_2_5_4_2: {type: String},
    A2_E1_2_6_4: {type: Number},
    A2_E1_2_7_4: {type: Number},
    A2_E1_2_8_4: {type: Boolean},
    A2_E1_2_9_1: {type: Boolean},
    A2_E1_2_9_2: {type: Boolean},
    A2_E1_2_9_3: {type: Boolean},
    A2_E1_2_9_4: {type: Boolean},
    A2_E1_2_9_5: {type: Boolean},
    A2_E1_2_9_6: {type: Boolean},
    A2_E1_2_9_7: {type: Boolean},
    A2_E1_2_9_8: {type: Boolean},
    A2_E1_2_9_8_1: {type: String},
});

var SN2_1P2_2  = new Schema({
    wc21_2_id:{ type: Schema.Types.ObjectId, ref: 'WC21_2' },
    A2_E2_2_1_CW: {type: String},
    A2_E2_2_1_AMP: {type: String},
    A2_E2_2_1_TMB: {type: String},
    A2_E2_2_2_1: {type: Number},
    A2_E2_2_2_2: {type: Number},
    A2_E2_2_2_3: {type: Number},
    A2_E2_2_3: {type: Boolean},
    A2_E2_2_4_1: {type: String},
    A2_E2_2_4_2: {type: String},
    A2_E2_2_4_3: {type: String},
    A2_E2_2_4_4: {type: String},
    A2_E2_2_4_5: {type: String},
    A2_E2_2_5_1: {type: Boolean},
    A2_E2_2_5_2: {type: Boolean},
    A2_E2_2_5_3: {type: Boolean},
    A2_E2_2_5_4: {type: Boolean},
    A2_E2_2_5_5: {type: Boolean},
    A2_E2_2_5_6: {type: Boolean},
    A2_E2_2_5_7: {type: Boolean},
    A2_E2_2_5_8: {type: Boolean},
    A2_E2_2_5_9: {type: Boolean},
    A2_E2_2_5_9_1: {type: String}
});

var SN2_1P2_3  = new Schema({
    wc21_2_id:{ type: Schema.Types.ObjectId, ref: 'WC21_2' },
    A2_E3_2_1_CW: {type: String},
    A2_E3_2_1_AMP: {type: String},
    A2_E3_2_1_TMB: {type: String},
    A2_E3_2_2_1: {type: Number},
    A2_E3_2_2_2: {type: Number},
    A2_E3_2_2_3: {type: Number},
    A2_E3_2_3: {type: Boolean},
    A2_E3_2_4_1: {type: Boolean},
    A2_E3_2_4_2: {type: Boolean},
    A2_E3_2_4_3: {type: Boolean},
    A2_E3_2_4_4: {type: Boolean},
    A2_E3_2_4_5: {type: Boolean},
    A2_E3_2_4_6: {type: Boolean},
    A2_E3_2_4_7: {type: Boolean},
    A2_E3_2_4_8: {type: Boolean},
    A2_E3_2_4_9: {type: Boolean},
    A2_E3_2_4_9_1: {type: String}
});

var SN2_1P2_4  = new Schema({
    wc21_2_id:{ type: Schema.Types.ObjectId, ref: 'WC21_2' },
    A2_E4_2_1_CW: {type: String},
    A2_E4_2_1_AMP: {type: String},
    A2_E4_2_1_TMB: {type: String},
    A2_E4_2_2_1: {type: Number},
    A2_E4_2_2_2: {type: Number},
    A2_E4_2_2_3: {type: Number},
    A2_E4_2_3: {type: Boolean},
    A2_E4_2_4_1: {type: String},
    A2_E4_2_4_2: {type: String},
    A2_E4_2_4_3: {type: String},
    A2_E4_2_4_4: {type: String},
    A2_E4_2_4_5: {type: String},
    A2_E4_2_5_1: {type: Boolean},
    A2_E4_2_5_2: {type: Boolean},
    A2_E4_2_5_3: {type: Boolean},
    A2_E4_2_5_4: {type: Boolean},
    A2_E4_2_5_5: {type: Boolean},
    A2_E4_2_5_6: {type: Boolean},
    A2_E4_2_5_7: {type: Boolean},
    A2_E4_2_5_8: {type: Boolean},
    A2_E4_2_5_9: {type: Boolean},
    A2_E4_2_5_9_1: {type: String},
   
});

var SN2_1P2_5  = new Schema({
    wc21_2_id:{ type: Schema.Types.ObjectId, ref: 'WC21_2' },
    A2_E5_2_1_CW: {type: String},
    A2_E5_2_1_AMP: {type: String},
    A2_E5_2_1_TMB: {type: String},
    A2_E5_2_2_1: {type: Number},
    A2_E5_2_2_2: {type: Number},
    A2_E5_2_2_3: {type: Number},
    A2_E5_2_3: {type: Boolean},
    A2_E5_2_4_1: {type: String},
    A2_E5_2_4_2: {type: String},
    A2_E5_2_4_3: {type: String},
    A2_E5_2_4_4: {type: String},
    A2_E5_2_4_5: {type: String},
    A2_E5_2_5: {type: Number},
    A2_E5_2_5_2: [{type: String}],
    A2_E5_2_6_1: {type: Boolean},
    A2_E5_2_6_2: {type: Boolean},
    A2_E5_2_6_3: {type: Boolean},
    A2_E5_2_6_4: {type: Boolean},
    A2_E5_2_6_5: {type: Boolean},
    A2_E5_2_6_6: {type: Boolean},
    A2_E5_2_6_7: {type: Boolean},
    A2_E5_2_6_8: {type: Boolean},
    A2_E5_2_6_9: {type: Boolean},
    A2_E5_2_6_9_1: {type: String}
});

var SN2_1P2_6 = new Schema({
    wc21_2_id:{ type: Schema.Types.ObjectId, ref: 'WC21_2' },
    A2_E6_2_1_CW: {type: String},
    A2_E6_2_1_AMP: {type: String},
    A2_E6_2_1_TMB: {type: String},
    A2_E6_2_2_1: {type: Number},
    A2_E6_2_2_2: {type: Number},
    A2_E6_2_2_3: {type: Number},
    A2_E6_2_3: {type: Boolean},
    A2_E6_2_4_1: {type: String},
    A2_E6_2_4_2: {type: String},
    A2_E6_2_4_3: {type: String},
    A2_E6_2_4_4: {type: String},
    A2_E6_2_4_5: {type: String},
    A2_E6_2_5: {type: Number},
    A2_E6_2_5_2: [{type: String}],
    A2_E6_2_6_1: {type: Boolean},
    A2_E6_2_6_2: {type: Boolean},
    A2_E6_2_6_3: {type: Boolean},
    A2_E6_2_6_4: {type: Boolean},
    A2_E6_2_6_5: {type: Boolean},
    A2_E6_2_6_6: {type: Boolean},
    A2_E6_2_6_7: {type: Boolean},
    A2_E6_2_6_8: {type: Boolean},
    A2_E6_2_6_9: {type: Boolean},
    A2_E6_2_6_9_1: {type: String}
   
});

var Fish = new Schema({
    wc21_2_id:{ type: Schema.Types.ObjectId, ref: 'WC21_2' },
    _1: {type: String},
    _1_other : {type: String},
    _2: {type: Number},
    _2_1: {type: Boolean},
    pool_size_id:[{ type: Schema.Types.ObjectId, ref: 'Pool_size' }],
    _3: {type: Number},
    _4: {type: String},
    _4_other: {type: String}
   
});

var Shrimp = new Schema({
    wc21_2_id:{ type: Schema.Types.ObjectId, ref: 'WC21_2' },
    _1: {type: String},
    _1_other : {type: String},
    _2: {type: Number},
    _2_1: {type: Boolean},
    pool_size_id:[{ type: Schema.Types.ObjectId, ref: 'Pool_size' }],
    _3: {type: Number},
    _4: {type: String},
    _4_other: {type: String}
      
});

var Flog = new Schema({
    wc21_2_id:{ type: Schema.Types.ObjectId, ref: 'WC21_2' },
    _1: {type: String},
    _1_other : {type: String},
    _2: {type: Number},
    _2_1: {type: Boolean},
    pool_size_id:[{ type: Schema.Types.ObjectId, ref: 'Pool_size' }],
    _3: {type: Number},
    _4: {type: String},
    _4_other: {type:String}
   
});

var Crocodile = new Schema({
    wc21_2_id:{ type: Schema.Types.ObjectId, ref: 'WC21_2' },
    _1: {type: String},
    _1_other : {type: String},
    _2: {type: Number},
    _2_1: {type: Boolean},
    pool_size_id:[{ type: Schema.Types.ObjectId, ref: 'Pool_size' }],
    _3: {type: Number},
    _4: {type: String},
    _4_other:{type: String}
});

var S_turtle = new Schema({
    wc21_2_id:{ type: Schema.Types.ObjectId, ref: 'WC21_2' },
    _1: {type: String},
    _1_other : {type: String},
    _2: {type: Number},
    _2_1: {type: Boolean},
    pool_size_id:[{ type: Schema.Types.ObjectId, ref: 'Pool_size' }],
    _3: {type: Number},
    _4: {type: String},
    _4_other:{type: String}
});

var Other_animal = new Schema({
    wc21_2_id:{ type: Schema.Types.ObjectId, ref: 'WC21_2' },
    _1: {type: String},
    _1_other : {type: String},
    _2: {type: Number},
    _2_1: {type: Boolean},
    pool_size_id:[{ type: Schema.Types.ObjectId, ref: 'Pool_size' }],
    _3: {type: Number},
    _4: {type: String},
    _4_other: {type: String}
       
});

var Well = new Schema({
    wc21_5_2_id:{ type: Schema.Types.ObjectId, ref: 'WC21_5_2' },
    _1: {type: Number},
    _2: {type: Boolean},
    _3: {type: Number},
    pump_id:[{ type: Schema.Types.ObjectId, ref: 'Pump' }],
    _5_1: {type: Number},
    _5_2: {type: Number},
    _5_3: {type: Number},
    _5_4: {type: Number},
    _5_5: {type: Number},
    _5_6: {type: Number},
    _6: {type: Boolean},
    _6_1: {type: String}
});

var Pool_size = new Schema({
    _1: {type: Number},
    _1_1: {type: Number},
    _1_2: {type: Number},
    _1_3: {type: Number}
   
});

var Pool = new Schema({
    A2_E9_1_1_2_2_1: {type: Boolean},
    A2_E9_1_1_2_2_1_1: {type: Number},
    A2_E9_1_1_2_2_2: {type: Number},
    A2_E9_1_1_2_2_2_1:{type: Number},
    A2_E9_1_1_2_2_2_2: {type: Number},
    A2_E9_1_1_2_2_2_3: {type: Number},
    A2_E9_1_1_2_2_2_4: {type: Number},
    A2_E9_1_1_2_2_3_1: {type: Boolean},
    A2_E9_1_1_2_2_3_1_1: {type: Number},
    A2_E9_1_1_2_2_3_1_2: {type: Number},
    A2_E9_1_1_2_2_3_1_3: {type: Number},
    A2_E9_1_1_2_2_3_2: {type: Boolean},
    A2_E9_1_1_2_2_3_2_1: {type: Number},
    A2_E9_1_1_2_2_3_2_2: {type: Number},
});

var Pump = new Schema({
    A5_2_3_4_1: {type: Number},
    A5_2_3_4_1_1: {type: Boolean},
    A5_2_3_4_2: {type: Number},
    A5_2_3_4_3: {type: Number},
    A5_2_3_4_3_1: {type: Boolean},
    A5_2_3_4_4_1: {type: Boolean},
    A5_2_3_4_4_2: {type: Boolean},
    A5_2_3_4_4_3: {type: Boolean},
    A5_2_3_4_5: {type: Number},
    A5_2_3_4_6: {type: Number},
    A5_2_3_4_7: {type: Number},
});

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
})

var SN2_2 = new Schema({
    B0 : {type:  Schema.Types.ObjectId, ref: 'SN2_2P0' },
    B1_1 : {type:  Boolean},
    B1_2 : {type:  Number},
    B1_3 : [{type:  Schema.Types.ObjectId, ref: 'SN2_2P1_3'}],
    B1_4_1 : {type:  Boolean},
    B1_4_2 : {type:  Boolean},
    B1_4_3 : {type:  Boolean},
    B1_5_1 : {type:  Boolean},
    B1_5_2 : {type:  Number},
    B1_5 : [{type:  Schema.Types.ObjectId,ref: 'SN2_2P1_5'}],
    B1_9 : {type:  Boolean},
    B1_10 : {type:  Boolean},
    B1_10_1 : {type:  Boolean},
    B1_10_2 : {type:  Boolean},
    B1_10_3 : {type:  Boolean},
    B1_10_4 : {type:  Boolean},
    B1_10_5 : {type:  Boolean},
    B1_10_6 : {type:  Boolean},
    B1_10_7 : {type:  Boolean},
    B1_10_8 : {type:  Boolean},
    B1_10_9 : {type:  Boolean},
    B1_10_10 : {type:  Boolean},
    B1_11 : {type:  Boolean},
    B1_11_1 : {type:  Boolean},
    B1_11_2 : {type:  Boolean},
    B1_11_3 : {type:  Boolean},
    B1_11_4 : {type:  Boolean},
    B1_11_4_1 : {type:  Boolean},
    B2_12 : {type:  Boolean},
    B2_12_1 : {type:  Number},
    B2_12_1_1 : [{type:  Schema.Types.ObjectId,ref: 'SN2_2P2_12'}],
})

var SN2_2P1_3 = new Schema({
    B1_3_1 : {type:  String},
    B1_3_2_1 : {type:  Boolean},
    B1_3_2_1_1 : {type:  Boolean},
    B1_3_2_1_2 : {type:  Boolean},
    B1_3_2_2 : {type:  Boolean},
    B1_3_2_3 : {type:  Boolean},
    B1_3_2_4 : {type:  Boolean},
    B1_3_2_4_1 : {type:  String},
    B1_3_3_1 : {type:  Number},
    B1_3_3_2_1 : {type:  Number},     
    B1_3_3_2_2 : {type:  Number},
    B1_3_3_2_3 : {type:  Number},
    B1_3_3_2_4 : {type:  Number},
    B1_3_3_3_1_1 : {type:  Number},
    B1_3_3_3_1_2 : {type:  Number},
    B1_3_3_3_1_3 : {type:  Number},
    B1_3_3_3_2_1 : {type:  Number},
    B1_3_3_3_2_2 : {type:  Number},
    B1_3_3_3_3 : {type:  Number},
})

var SN2_2P1_5 = new Schema({
    B1_5_2_1 : {type:  String},
    B1_5_2_1_1 : {type:  Boolean},
    B1_5_2_1_2 : {type:  Number},
    B1_5_2_1_3 : {type:  Boolean},
    B1_5_2_1_4 : {type:  Number},
    B1_5_2_1_5 : {type:  Number},
    B1_6 : {type:  Number},
    B1_7 : {type:  Number},
    B1_8 : {type:  Number},
    B1_8_2 : {type:  String},
})

var SN2_2P2_12 = new Schema({
    B2_12_1_1 : {type:  String},
    B2_13_1 : {type:  Number},
    B2_13_2 : {type:  Number},
    B2_13_3 : {type:  Number},
    B2_14 : {type:  Number},
    B2_15 : {type:  Number},
    B2_16 : {type:  Number},
    B2_17 : {type:  Number},
})
module.exports = mongoose.model('User', User);
module.exports = mongoose.model('Region', Region);
module.exports = mongoose.model('Changwat', Changwat);
module.exports = mongoose.model('Amphoe', Amphoe);
module.exports = mongoose.model('Tambon', Tambon);
module.exports = mongoose.model('District', District);
module.exports = mongoose.model('EnumerationArea', EnumerationArea);
module.exports = mongoose.model('WaterCensus1', WaterCensus1);
module.exports = mongoose.model('Building', Building);
module.exports = mongoose.model('Household', Household);
module.exports = mongoose.model('WaterCensus21', WaterCensus21);
module.exports = mongoose.model('WC21_1', WC21_1);
module.exports = mongoose.model('WC21_2', WC21_2);
module.exports = mongoose.model('WC21_3', WC21_3);
module.exports = mongoose.model('WC21_4', WC21_4);
module.exports = mongoose.model('WC21_5_1', WC21_5_1);
module.exports = mongoose.model('WC21_5_2', WC21_5_2);
module.exports = mongoose.model('WC21_5_3', WC21_5_3);
module.exports = mongoose.model('WC21_5_4', WC21_5_4);
module.exports = mongoose.model('WC21_5_5', WC21_5_5);
module.exports = mongoose.model('WC21_5_6', WC21_5_6);
module.exports = mongoose.model('WC21_5_7', WC21_5_7);
module.exports = mongoose.model('WC21_6', WC21_6);
module.exports = mongoose.model('Rice', Rice);
module.exports = mongoose.model('Plant', Plant);
module.exports = mongoose.model('Rubber', Rubber);
module.exports = mongoose.model('Perennial', Perennial);
module.exports = mongoose.model('Vegetable', Vegetable);
module.exports = mongoose.model('Garden', Garden);
module.exports = mongoose.model('Fish', Fish);
module.exports = mongoose.model('Shrimp', Shrimp);
module.exports = mongoose.model('Flog', Flog);
module.exports = mongoose.model('Crocodile', Crocodile);
module.exports = mongoose.model('S_turtle', S_turtle);
module.exports = mongoose.model('Other_animal', Other_animal);
module.exports = mongoose.model('Well', Well);
module.exports = mongoose.model('Pool_size', Pool_size);
module.exports = mongoose.model('Pool', Pool);
module.exports = mongoose.model('Pump', Pump);


