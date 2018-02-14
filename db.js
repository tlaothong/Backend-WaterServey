//import { type } from 'os';

var mongoose = require('mongoose'),
Schema = mongoose.Schema;
var test = new Schema({
    _1: {type: Number, default: 0 },
    _2: {type: Number, default: 1 },
    _3: {type: Number, default: 2 },
    _4_1: {type: Number, default: 3 },
    _4_2: {type: Number, default: 4 }
})

var Test  = mongoose.model('Test', test);
var Account = new Schema({
    username: { type: String },
    date_created: { type: Date, default: Date.now },
    visits: { type: Number, default: 0 },
    active: { type: Boolean, default: false },
    //wtr :   [wtr_source],
    test1 :  { type: Schema.Types.ObjectId, ref: 'Test' }
    }); 

module.exports = mongoose.model('Accounts', Account);
module.exports = mongoose.model('Test', test);

/*
mongoose.connect('mongodb://146.148.39.207:27017/test');
mongoose.connection.on('open', function() {
    console.log('Mongoose connected.');
    console.log(mongoose.connection.readyState);
});


module.exports 

var AccountModel = mongoose.model('Account', Account);
module.exports = AccountModel ;
var newUser = new AccountModel({ username: 'asdasd' });
newUser.save();
console.log(newUser.username);
console.log(newUser.date_created);
console.log(newUser.visits);
console.log(newUser.active);
*/
var wtr_census_1 = new Schema({
    id: { type: String } ,
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
    listing_date: { type: Date },
    check_date: { type: Date },
    FI_ID: { type: Number },
    FS_ID: { type: Number },
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
    P1: { type: Number},
    P2: { type: Number},
    P3: { type: Number},
    P4: { type: Number},
    A11: { type: String},
    H3: { type: Number},
    H4: { type: Number},
    H5_1: { type: Number},
    H5_2: { type: Number},
    H5_3: { type: Number},
    G1: { type: Boolean},
    G2: { type: Boolean},
    G3: { type: Boolean},
    G4: { type: Boolean}
});

var  wtr_census_2_1 = new Schema({
    id: { type: String},
    ea_id: { type: Number},
    A1: { type: Number},
    H3: { type: Number},
    listing_date: { type: Date},
    check_date: { type: Date},
    FI_ID: { type: Number},
    FS_ID: { type: Number},
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
    _2_1_1: { type: Boolean},
    _2_1_2: { type: Number},
    _2_2_1: { type: Boolean},
    _2_2_2: { type: Number},
    _2_3_1: { type: Boolean},
    _2_3_2: { type: Number},
    _2_4_1: { type: Boolean},
    _2_4_2: { type: Number},
    _2_5_1: { type: Boolean},
    _2_5_2: { type: Number},
    _2_6_1: { type: Boolean},
    _2_6_2: { type: Number},
    _2_7_1: { type: Boolean},
    _2_7_2: { type: Number},
    _2_8_1: { type: Boolean},
    _2_8_1_1: { type: Boolean},
    _2_8_1_2: { type: Boolean},
    _2_8_1_3: { type: Boolean},
    _2_8_1_4: { type: Boolean},
    _2_8_1_5: { type: Boolean},
    _2_8_1_6: { type: Boolean},
    _3_1: {type: String},
    _3_2: {type: String},
    _3_3: {type: String},
    _3_4: {type: String},
    _3_5: {type: Number},
    _3_6: {type: Number},
    _3_7: {type: String},
    _3_8: {type: Boolean},
    _3_9: {type: Boolean},
    _3_10: {type: Boolean},
    _4_1: {type: String},
    _4_2: {type: String},
    _4_3: {type: String},
    _4_4: {type: String},
    _4_5: {type: Number},
    _4_6_1_1: {type: Number},
    _4_6_1_2: {type: Number},
    _4_6_1_3: {type: Number},
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
    _5_1_1_1_1: {type: Boolean},
    _5_1_1_1_2: {type: String},
    _5_1_1_1_3: {type: String},
    _5_1_1_2_1: {type: Boolean},
    _5_1_1_2_2: {type: String},
    _5_1_1_2_3: {type: String},
    _5_1_1_3_1: {type: Boolean},
    _5_1_1_3_2: {type: String},
    _5_1_1_3_3: {type: String},
    _5_1_2_1: {type: Number},
    _5_1_2_2: {type: Number},
    _5_1_2_3: {type: Number},
    _5_1_2_4: {type: Number},
    _5_1_2_5: {type: Number},
    _5_1_3: {type: Number},
    _5_2_1: {type: Boolean},
    _5_2_2: {type: Number},
    _5_2_3: {type: Number},
    _5_2_4: {type: Boolean},
    _5_3_1: {type: Boolean},
    _5_3_2: {type: Number},
    _5_3_3: {type: Boolean},
    _5_3_4: {type: Number},
    _5_4_1: {type: Number},
    _5_4_2: {type: Boolean},
    _5_4_3: {type: Number},
    _5_4_4_1: {type: Number},
    _5_4_4_2: {type: Number},
    _5_4_4_3: {type: Number},
    _5_4_4_4: {type: Number},
    _5_4_4_5: {type: Number},
    _5_4_4_6: {type: Number},
    _5_4_5: {type: String},
    _5_5_1: {type: Number},
    _5_5_2: {type: Boolean},
    _5_5_3: {type: Number},
    _5_5_4_1: {type: Number},
    _5_5_4_2: {type: Number},
    _5_5_4_3: {type: Number},
    _5_5_4_4: {type: Number},
    _5_5_4_5: {type: Number},
    _5_5_4_6: {type: Number},
    _5_5_5: {type: String},
    _5_6_1_1: {type: String},
    _5_6_1_2: {type: String},
    _5_6_1_3: {type: String},
    _5_6_1_4: {type: String},
    _5_6_1_5: {type: String},
    _5_6_2_1: {type: String},
    _5_6_2_2: {type: String},
    _5_6_2_3: {type: String},
    _5_6_2_4: {type: String},
    _5_6_2_5: {type: String},
    _5_7_1_1: {type: String},
    _5_7_1_2: {type: String},
    _5_7_1_3: {type: String},
    _5_7_1_4: {type: String},
    _5_7_1_5: {type: String},
    _6_1: {type: String},
    _6_2_1: {type: String},
    _6_2_2: {type: String},
    _6_2_3: {type: String},
    _6_2_4: {type: String},
    _6_2_5: {type: String}
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

var staff = new Schema({
    user_id: {type: Number},
    firsname: {type: String},
    lastname: {type: String},
    email: {type: String},
    phone: {type: Number},
    province: {type: String},
    role: {type: String},
    image_url: {type: String},
    password: {type: String},
    ea_id: {type: String}
});

var area = new Schema({
    reg: {type: Number},
    reg_name: {type: String},
    cwt: {type: Number},
    cwt_name: {type: String},
    tam_name: { type: String },
    tam: { type: Number},
    district: {type: Number},
    mun: {type: Number},
    mun_name: {type: String},
    tao: {type: Number},
    tao_name: {type: String},
    ea: {type: Number},
    vil: { type: Number},
    vil_name: { type: String },
    map_status: {type: Number},
    building: {type: Number},
    household: {type: Number},
    agricultural_hh: {type: String},
    es_busi: {type: String},
    es_indus: {type: String},
    es_hotel: {type: String},
    es_pv_hos: {type: String},
    remark: {type: String}
});


var rice = new Schema({
    _1_1: {type: String},
    _1_2: {type: String},
    _1_3: {type: String},
    _2: {type: Number},
    _3: {type: Number},
    _4: {type: String},
    _5: {type: String},
    _6: {type: Number},
    _7: {type: Number},
    _8: {type: Boolean},
    _9: {type: String}
});

var plant = new Schema({
    _1_1: {type: String},
    _1_2: {type: String},
    _1_3: {type: String},
    _2: {type: Number},
    _3: {type: Boolean},
    _4: {type: String},
    _5: {type: String}
});

var rubber = new Schema({
    _1_1: {type: String},
    _1_2: {type: String},
    _1_3: {type: String},
    _2: {type: Number},
    _3: {type: Boolean},
    _4: {type: String}
});

var perennial = new Schema({
    _1_1: {type: String},
    _1_2: {type: String},
    _1_3: {type: String},
    _2: {type: Number},
    _3: {type: Boolean},
    _4: {type: String},
    _5: {type: String}
   
});

var vegetable = new Schema({
    _1_1: {type: String},
    _1_2: {type: String},
    _1_3: {type: String},
    _2: {type: Number},
    _3: {type: Boolean},
    _4: {type: String},
    _5: {type: String},
    _6: {type: String}
   
});

var garden = new Schema({
    _1_1: {type: String},
    _1_2: {type: String},
    _1_3: {type: String},
    _2: {type: Number},
    _3: {type: Boolean},
    _4: {type: String},
    _5: {type: String},
    _6: {type: String}
   
});

var fish = new Schema({
    _1: {type: String},
    _2: {type: Number},
    _2_1: {type: Boolean},
    _2_2_1: {type: Number},
    _2_2_2: {type: Number},
    _2_2_3_1: {type: Number},
    _2_2_3_2: {type: Number},
    _3: {type: Number},
    _4: {type: String},
   
});

var shrimp = new Schema({
    _1: {type: String},
    _2: {type: Number},
    _2_1: {type: Boolean},
    _2_2_1: {type: Number},
    _2_2_2: {type: Number},
    _2_2_3_1: {type: Number},
    _2_2_3_2: {type: Number},
    _3: {type: Number},
    _4: {type: String},
   
});

var flog = new Schema({
    _1: {type: String},
    _2: {type: Number},
    _2_1: {type: Boolean},
    _2_2_1: {type: Number},
    _2_2_2: {type: Number},
    _2_2_3_1: {type: Number},
    _2_2_3_2: {type: Number},
    _3: {type: Number},
    _4: {type: String},
   
});

var crocodile = new Schema({
    _1: {type: String},
    _2: {type: Number},
    _2_1: {type: Boolean},
    _2_2_1: {type: Number},
    _2_2_2: {type: Number},
    _2_2_3_1: {type: Number},
    _2_2_3_2: {type: Number},
    _3: {type: Number},
    _4: {type: String},
   
});

var s_turtle = new Schema({
    _1: {type: String},
    _2: {type: Number},
    _2_1: {type: Boolean},
    _2_2_1: {type: Number},
    _2_2_2: {type: Number},
    _2_2_3_1: {type: Number},
    _2_2_3_2: {type: Number},
    _3: {type: Number},
    _4: {type: String},
   
});

var other = new Schema({
    _1: {type: String},
    _2: {type: Number},
    _2_1: {type: Boolean},
    _2_2_1: {type: Number},
    _2_2_2: {type: Number},
    _2_2_3_1: {type: Number},
    _2_2_3_2: {type: Number},
    _3: {type: Number},
    _4: {type: String},
   
});

var well = new Schema({
    _1: {type: Number},
    _2: {type: Boolean},
    _3: {type: Number},
    _4: {type: String},
    _5_1: {type: Number},
    _5_2: {type: Number},
    _5_3: {type: Number},
    _5_4: {type: Number},
    _5_5: {type: Number},
    _5_6: {type: Number},
    _6: {type: String}
});

var pool_size = new Schema({
    _1: {type: Number},
    _2: {type: Number},
    _3_1: {type: Number},
    _3_2: {type: Number}
   
});

var pool = new Schema({
    _1: {type: Number},
    _2: {type: Boolean},
    _3: {type: Number},
    _4: {type: String},
    _5_1: {type: Number},
    _5_2: {type: Number},
    _5_3: {type: Number},
    _5_4: {type: Number},
    _5_5: {type: Number},
    _5_6: {type: Number},
    _6: {type: String},
});

var well = new Schema({
    _1: {type: Number},
    _2: {type: Number},
    _3: {type: Number},
    _4: {type: String},
    _5_1: {type: Number},
    _6: {type: String}
});