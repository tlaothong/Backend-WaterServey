//import { type } from 'os';

var mongoose = require('mongoose'),
Schema = mongoose.Schema;

var Account = new Schema({
    username: { type: String },
    date_created: { type: Date, default: Date.now },
    visits: { type: Number, default: 0 },
    active: { type: Boolean, default: false }
    }); 

var User = new Schema({
    user_id: {type: Number ,unique: true},
    firstname: {type: String},
    lastname: {type: String},
    email: {type: String},
    phone: {type: String},
    province: {type: String },
    role: {type: String },
    image_url: {type: String },
    password: {type: String},
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
    a1: { type: Number },
    a2: { type:  String},
    a3: { type:  String},
    a4: { type:  String},
    a5: { type:  Number},
    a6: { type:  Number},
    a7: { type:  Number},
    a8: { type:  Number},
    a9: { type:  Number},
    a10: { type:  Number},
    h1_1: { type:  Number},
    h1_2: { type:  Number},
    h1_3: { type:  Number},
    h1_4: { type:  Number},
    n: { type:  Number},
    n0: { type: Number},
    n1: { type: Number},
    p1: { type: Boolean},
    p2: { type: Boolean},
    p3: { type: Boolean},
    p4: { type: Boolean},
    a11: { type: String},
    households:[{ type: Schema.Types.ObjectId, ref: 'Household' }]
});

var Household =  new Schema({
    bd_id:{ type: Schema.Types.ObjectId, ref: 'Building' },
    h3: { type: Number},
    h4: { type: Number},
    h5_1: { type: Number},
    h5_2: { type: Number},
    h5_3: { type: Number},
    g1: { type: Boolean},
    g2: { type: Boolean},
    g3: { type: Boolean},
    g4: { type: Boolean},
    a11 : String
});

var  WaterCensus21 = new Schema({
    hh_id:{ type: Schema.Types.ObjectId, ref: 'Household' },
    a1: { type: Schema.Types.ObjectId, ref: 'Household' },
    listing_date: { type: Date},
    check_date: { type: Date},
    fs_id:{ type: Schema.Types.ObjectId, ref: 'User' },
    fi_id:{ type: Schema.Types.ObjectId, ref: 'User' },
    wc21_1:{ type: Schema.Types.ObjectId, ref: 'WC21_1' },
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
    msg : String
});

var WC21_1 = new Schema({
    wc2_1_id:{ type: Schema.Types.ObjectId, ref: 'WaterCensus21' },
    _1_1: { type: String},
    _1_2: { type: Number},
    _1_2_1: { type: Number},
    _1_2_1_m: { type: Number},
    _1_2_1_f: { type: Number},
    _1_2_2: { type: Number},
    _1_2_2_m: { type: Number}, 
    _1_2_2_f: { type: Number},
    _1_2_3: { type: Number},
    _1_2_3_m: { type: Number},
    _1_2_3_f: { type: Number},
    _1_3: { type: Boolean},
    _1_4: { type: String},
    _1_4_other: { type: String},
});

var WC21_2 = new Schema({
    wc2_1_id:{ type: Schema.Types.ObjectId, ref: 'WaterCensus21' },
    _2_1_1: { type: Boolean},
    _2_1_2: { type: Number},
    rice_id:[{ type: Schema.Types.ObjectId, ref: 'Rice' }],
    _2_2_1: { type: Boolean},
    _2_2_2: { type: Number},
    plant_id:[{ type: Schema.Types.ObjectId, ref: 'Plant' }],
    _2_3_1: { type: Boolean},
    _2_3_2: { type: Number},
    rubber_id:[{ type: Schema.Types.ObjectId, ref: 'Rubber' }],
    _2_4_1: { type: Boolean},
    _2_4_2: { type: Number},
    parennial_id:[{ type: Schema.Types.ObjectId, ref: 'Parennial' }],
    _2_5_1: { type: Boolean},
    _2_5_2: { type: Number},
    vegetable_id:[{ type: Schema.Types.ObjectId, ref: 'Vegetable' }],
    _2_6_1: { type: Boolean},
    _2_6_2: { type: Number},
    garden_id:[{ type: Schema.Types.ObjectId, ref: 'Garden' }],
    _2_7_1: { type: Boolean},
    _2_7_2_1: { type: Number},
    _2_7_2_2: { type: Number},
    _2_7_2_3: { type: Number},
    _2_7_2_4: { type: Number},
    _2_7_2_5: { type: Number},
    _2_7_2_6: { type: Number},
    _2_7_2_7: { type: Number},
    _2_7_2_8: { type: Number},
    _2_7_2_9: { type: Number},
    _2_7_2_10_1: {type: String},
    _2_7_2_10_2: { type: Number},
    _2_7_3: { type: Number},
    _2_7_3_other: { type: String},
    _2_8_1: { type: Boolean},
    _2_8_1_1: { type: Boolean},
    fish_id:{ type: Schema.Types.ObjectId, ref: 'Fish' },
    _2_8_1_2: { type: Boolean},
    shrimp_id:{ type: Schema.Types.ObjectId, ref: 'Shrimp' },
    _2_8_1_3: { type: Boolean},
    flog_id:{ type: Schema.Types.ObjectId, ref: 'Flog' },
    _2_8_1_4: { type: Boolean},
    crocodile_id:{ type: Schema.Types.ObjectId, ref: 'Crocodile' },
    _2_8_1_5: { type: Boolean},
    s_turtle_id:{ type: Schema.Types.ObjectId, ref: 'S_turtle' },
    _2_8_1_6: { type: String},
    other_animal_id:{ type: Schema.Types.ObjectId, ref: 'Other_animal' }
});
var WC21_3 = new Schema({
    wc2_1_id:{ type: Schema.Types.ObjectId, ref: 'WaterCensus21' },
    _3_1: {type: String},
    _3_2_tel: {type: String},
    _3_2_fax: {type: String},
    _3_2_mail: {type: String},  
    _3_2_web: {type: String},
    _3_3_1: {type: String},
    _3_3_2: {type: String},
    _3_4: {type: String},
    _3_5: {type: Number,ref: 'Building.a8'},
    _3_6: {type: Number},
    _3_7: {type: String},
    _3_7_other:{ type: String},
    _3_8: {type: Boolean},
    _3_9: {type: Boolean},
    _3_10: {type: Boolean}
});
var WC21_4 = new Schema({
    wc2_1_id:{ type: Schema.Types.ObjectId, ref: 'WaterCensus21' },
    _4_1: {type: String},
    _4_2_tel: {type: String},
    _4_2_fax: {type: String},
    _4_2_mail: {type: String},
    _4_2_web: {type: String},
    _4_3_1: {type: String},
    _4_3_2: {type: String},
    _4_4: {type: String},
    _4_5: {type: Number},
    _4_6_1_1: {type: Number},
    _4_6_1_2: {type: Number},
    _4_6_1_3: {type: Number},
    _4_6_1_4: {type: Number},
    _4_6_1_5: {type: Number},
    _4_6_1_6: {type: Number},
    _4_6_1_7: {type: Number},
    _4_6_2_1: {type: Number},
    _4_6_2_2: {type: Number},
    _4_6_3_1: {type: Number},
    _4_6_3_2: {type: Number},
    _4_6_4_1: {type: Number},
    _4_6_4_2: {type: Number},
    _4_6_4_3: {type: Number},
    _4_6_5_1: {type: Number},
    _4_6_6_1: {type: Number},
    _4_7: {type: String},
    _4_7_other: {type: String}
});
var WC21_5_1 = new Schema({
    wc2_1_id:{ type: Schema.Types.ObjectId, ref: 'WaterCensus21' },
    _5_1_1_1_1: {type: Boolean},
    _5_1_1_1_2: {type: Boolean},
    _5_1_1_1_2_1: {type: String},
    _5_1_1_1_3_1: {type: Number},
    _5_1_1_1_3_2: {type: Number},
    _5_1_1_2_1: {type: Boolean},
    _5_1_1_2_2: {type: Boolean},
    _5_1_1_2_2_1: {type: String},
    _5_1_1_2_3_1: {type: Number},
    _5_1_1_2_3_2: {type: Number},
    _5_1_1_3_1: {type: Boolean},
    _5_1_1_3_2: {type: Boolean},
    _5_1_1_3_2_1: {type: String},
    _5_1_1_3_3_1: {type: Number},
    _5_1_1_3_3_2: {type: Number},
    _5_1_2_1_1: {type: Number},
    _5_1_2_1_2: {type: Number},
    _5_1_2_2_1: {type: Number},
    _5_1_2_2_2: {type: Number},
    _5_1_2_3_1: {type: Number},
    _5_1_2_3_2: {type: Number},
    _5_1_2_4_1: {type: Number},
    _5_1_2_4_2: {type: Number},
    _5_1_2_5_1: {type: Number},
    _5_1_2_5_2: {type: Number},
    _5_1_3: {type: Number}
});
var WC21_5_2 = new Schema({
    wc2_1_id:{ type: Schema.Types.ObjectId, ref: 'WaterCensus21' },
    _5_2_1: {type: Boolean},
    _5_2_2_1: {type: Number},
    _5_2_2_2: {type: Number},
    well_id:[{ type: Schema.Types.ObjectId, ref: 'Well' }],
    _5_2_4: {type: Boolean},
    _5_2_4_1: {type: Number},
    _5_2_4_2: {type: Boolean},
    _5_2_4_3: {type: Number},
    pump_id:[{ type: Schema.Types.ObjectId, ref: 'Pump' }],
    _5_2_5_1: {type: Number},
    _5_2_5_2: {type: Number},
    _5_2_5_3: {type: Number},
    _5_2_5_4: {type: Number},
    _5_2_5_5: {type: Number},
    _5_2_5_6: {type: Number},
    _5_2_6_1: {type: Boolean},
    _5_2_6_2: {type: String}
});
var WC21_5_3 = new Schema({
    wc2_1_id:{ type: Schema.Types.ObjectId, ref: 'WaterCensus21' },
    _5_3_1: {type: Boolean},
    _5_3_2: {type: Number},
    _5_3_3: {type: Boolean},
    _5_3_4: {type: Number},
    pool_id:[{ type: Schema.Types.ObjectId, ref: 'Pool' }],
    _5_3_5_1: {type: Number},
    _5_3_5_2: {type: Number},
    _5_3_5_3: {type: Number},
    _5_3_5_4: {type: Number},
    _5_3_5_5: {type: Number},
    _5_3_5_6: {type: Number},
    _5_3_6: {type: Boolean},
    _5_3_6_1: {type: String}
});
var WC21_5_4 = new Schema({
    wc2_1_id:{ type: Schema.Types.ObjectId, ref: 'WaterCensus21' },
    _5_4_1: {type: Number},
    _5_4_2: {type: Boolean},
    _5_4_3: {type: Number},
    pump_id:[{ type: Schema.Types.ObjectId, ref: 'Pump' }],
    _5_4_4_1: {type: Number},
    _5_4_4_2: {type: Number},
    _5_4_4_3: {type: Number},
    _5_4_4_4: {type: Number},
    _5_4_4_5: {type: Number},
    _5_4_4_6: {type: Number},
    _5_4_5: {type: Boolean},
    _5_4_5_1: {type: String}
});
var WC21_5_5 = new Schema({
    wc2_1_id:{ type: Schema.Types.ObjectId, ref: 'WaterCensus21' },
    _5_5_1: {type: Number},
    _5_5_2: {type: Boolean},
    _5_5_3: {type: Number},
    pump_id:[{ type: Schema.Types.ObjectId, ref: 'Pump' }],
    _5_5_4_1: {type: Number},
    _5_5_4_2: {type: Number},
    _5_5_4_3: {type: Number},
    _5_5_4_4: {type: Number},
    _5_5_4_5: {type: Number},
    _5_5_4_6: {type: Number},
    _5_5_5: {type: Boolean},
    _5_5_5_1: {type : String}
});
var WC21_5_6 = new Schema({
    wc2_1_id:{ type: Schema.Types.ObjectId, ref: 'WaterCensus21' },
    _5_6_1_1: {type: String},
    _5_6_1_1_1: {type: Number},
    _5_6_1_1_2: {type: Number},
    _5_6_1_2: {type: String},
    _5_6_1_2_1: {type: Number},
    _5_6_1_2_2: {type: Number},
    _5_6_1_3: {type: String},
    _5_6_1_3_1: {type: Number},
    _5_6_1_3_2: {type: Number},
    _5_6_1_4: {type: String},
    _5_6_1_4_1: {type: Number},
    _5_6_1_4_2: {type: Number},
    _5_6_1_5: {type: String},
    _5_6_1_5_1: {type: Number},
    _5_6_1_5_2: {type: Number},
    _5_6_2_1: {type: Number},
    _5_6_2_2: {type: Number},
    _5_6_2_3: {type: Number},
    _5_6_2_4: {type: Number},
    _5_6_2_5: {type: Number}
});
var WC21_5_7 = new Schema({
    wc2_1_id:{ type: Schema.Types.ObjectId, ref: 'WaterCensus21' },
    _5_7_1_1: {type: String},
    _5_7_1_1_1: {type: Number},
    _5_7_1_1_2: {type: Number},
    _5_7_1_1_3: {type: Number},
    _5_7_1_1_4: {type: Number},
    _5_7_1_1_5: {type: Number},
    _5_7_1_2: {type: String},
    _5_7_1_2_1: {type: Number},
    _5_7_1_2_2: {type: Number},
    _5_7_1_2_3: {type: Number},
    _5_7_1_2_4: {type: Number},
    _5_7_1_2_5: {type: Number},
    _5_7_1_3: {type: String},
    _5_7_1_3_1: {type: Number},
    _5_7_1_3_2: {type: Number},
    _5_7_1_3_3: {type: Number},
    _5_7_1_3_4: {type: Number},
    _5_7_1_3_5: {type: Number},
    _5_7_1_4: {type: String},
    _5_7_1_4_1: {type: Number},
    _5_7_1_4_2: {type: Number},
    _5_7_1_4_3: {type: Number},
    _5_7_1_4_4: {type: Number},
    _5_7_1_4_5: {type: Number},
    _5_7_1_5: {type: String},
    _5_7_1_5_1: {type: Number},
    _5_7_1_5_2: {type: Number},
    _5_7_1_5_3: {type: Number},
    _5_7_1_5_4: {type: Number},
    _5_7_1_5_5: {type: Number}

});
var WC21_6 = new Schema({
    wc2_1_id:{ type: Schema.Types.ObjectId, ref: 'WaterCensus21' },
    _6_1: {type: Boolean},
    _6_2_1: {type: Number},
    _6_2_1_1: {type: Number},
    _6_2_1_2: {type: Number},
    _6_2_1_3: {type: Number},
    _6_2_1_4: {type: Number},
    _6_2_2: {type: Number},
    _6_2_2_1: {type: Number},
    _6_2_2_2: {type: Number},
    _6_2_2_3: {type: Number},
    _6_2_2_4: {type: Number},
    _6_2_3: {type: Number},
    _6_2_3_1: {type: Number},
    _6_2_3_2: {type: Number},
    _6_2_3_3: {type: Number},
    _6_2_3_4: {type: Number},
    _6_2_4: {type: Number},
    _6_2_4_1: {type: Number},
    _6_2_4_2: {type: Number},
    _6_2_4_3: {type: Number},
    _6_2_4_4: {type: Number},
    _6_2_5: {type: Number},
    _6_2_5_1: {type: Number},
    _6_2_5_2: {type: Number},
    _6_2_5_3: {type: Number},
    _6_2_5_4: {type: Number}
});

var wtr_census_2_2 = new Schema({
    id: {type: String},
    reg: { type: String } ,
    reg_id: { type: Number},
    cwt: { type: String } ,
    cwt_id: { type: Number},
    amp: { type: String },
    amp_id: { type: Number},
    tmb : { type: String },
    tmb_id: { type: Number},
    area: { type: String },
    area_id: { type: Number },
    mun_tao: { type: String },
    ea: { type: Number},
    vil: { type: Number},
    vil_name: { type: String },
    basin: {type: Number},
    listing_date: { type: Date },
    check_date: { type: Date },
    FI_ID: { type: Number },
    FS_ID: { type: Number },
    _1: {type: Boolean},
    _2: {type: Number},
    _4_1: {type: Boolean},
    _4_2: {type: Boolean},
    _4_3: {type: Boolean},
    _5_1: {type: Number},
    _5_2: {type: Number},
    _6: {type: Boolean},
    _7: {type: Boolean},
    _8: {type: String},
    _9: {type: Boolean},
    _10: {type: String},
    _11: {type: String},
    _12: {type: Boolean},
    _13: {type: Number},
    _14: {type: Number},
    _15: {type: Number},
    _16: {type: Number},
    _17: {type: Number},
});

var wtr_source = new Schema({
    _1: {type: String},
    _2: {type: String},
    _3: {type: String},
    _4_1: {type: String},
    _4_2: {type: String}
   
});


var Rice = new Schema({
    wc21_2_id:{ type: Schema.Types.ObjectId, ref: 'WC21_2' },
    _1_1: {type: String},
    _1_2: {type: String},
    _1_3: {type: String},
    _2: {type: Number},
    _2_1: {type: Number},
    _3: {type: Number},
    _4: {type: Number},
    _4_1: {type: Number},
    _4_1_1: {type: Number},
    _4_2: {type: Number},
    _4_2_1: {type: Number},
    _4_3: {type: Number},
    _4_3_1: {type: Number},
    _4_4: {type: Number},
    _4_4_1: {type: Number},
    _5_1: {type: String},
    _5_1_1: {type: String},
    _6_1: {type: Number},
    _7_1: {type: Number},
    _5_2: {type: String},
    _5_2_1: {type: String},
    _6_2: {type: Number},
    _7_2: {type: Number},
    _5_3: {type: String},
    _5_3_1: {type: String},
    _6_3: {type: Number},
    _7_3: {type: Number},
    _5_4: {type: String},
    _5_4_1: {type: String},
    _6_4: {type: Number},
    _7_4: {type: Number},
    _8: {type: Boolean},
    _9: {type: String},
    _9_other: String
});

var Plant = new Schema({
    wc21_2_id:{ type: Schema.Types.ObjectId, ref: 'WC21_2' },
    _1_1: {type: String},
    _1_2: {type: String},
    _1_3: {type: String},
    _2: {type: Number},
    _2_1: {type: Number},
    _3: {type: Boolean},
    _4: {type: String},
    _5: {type: String},
    _5_other: {type: String}
});

var Rubber = new Schema({
    wc21_2_id:{ type: Schema.Types.ObjectId, ref: 'WC21_2' },
    _1_1: {type: String},
    _1_2: {type: String},
    _1_3: {type: String},
    _2: {type: Number},
    _2_1: {type: Number},
    _3: {type: Boolean},
    _4: {type: String},
    _4_other: {type: String}
});

var Perennial = new Schema({
    wc21_2_id:{ type: Schema.Types.ObjectId, ref: 'WC21_2' },
    _1_1: {type: String},
    _1_2: {type: String},
    _1_3: {type: String},
    _2: {type: Number},
    _2_1: {type: Number},
    _3: {type: Boolean},
    _4: {type: String},
    _5: {type: String},
    _5_other: {type: String},
   
});

var Vegetable = new Schema({
    wc21_2_id:{ type: Schema.Types.ObjectId, ref: 'WC21_2' },
    _1_1: {type: String},
    _1_2: {type: String},
    _1_3: {type: String},
    _2: {type: Number},
    _2_1: {type: Number},
    _3: {type: Boolean},
    _4: {type: String},
    _5: {type: String},
    _6: {type: String},
    _6_other: {type: String}
});

var Garden = new Schema({
    wc21_2_id:{ type: Schema.Types.ObjectId, ref: 'WC21_2' },
    _1_1: {type: String},
    _1_2: {type: String},
    _1_3: {type: String},
    _2: {type: Number},
    _2_1: {type: Number},
    _3: {type: Boolean},
    _4: {type: String},
    _5: {type: Boolean},
    _5_1 :{type : String},
    _6: {type: String},
    _6_other: {type: String}
   
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
    wc21_5_3_id:{ type: Schema.Types.ObjectId, ref: 'WC21_5_3' },
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

var Pump = new Schema({
    _1: {type: Number},
    _2: {type: Number},
    _3: {type: Number},
    _4: {type: String},
    _5_1: {type: Number},
    _6: {type: Number},
    _6_1: {type: String}
});


module.exports = mongoose.model('Account', Account);
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


