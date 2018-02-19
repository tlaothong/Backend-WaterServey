var mongoose = require('mongoose'),
Schema = mongoose.Schema;

var Region = new Schema({
    reg: { type: Number },
    reg_name: { type: String }
    }); 
module.exports = mongoose.model('Regions', Region);

var Changwat = new Schema({
    reg : Number,
    cwt : { type: Number },
    cwt_name : { type: String}    
})

var Amphoe = new Schema({
    reg :Number,
    cwt : Number,
    amp : { type: Number },
    amp_name : { type: String}    
})

var Tambon = new Schema({
    reg :Number,
    cwt : Number,
    amp : { type: Number },
    tmb : { type: Number },
    tmb_name : { type: String}    
})

var District = new Schema({
    reg :Number,
    cwt : Number,
    amp : { type: Number },
    tmb : { type: Number },
    district : Number,
    mun_tao : Number,
    district_name : { type: String} 
})

var EnumerationArea = new Schema({
    reg :Number,
    cwt : Number,
    amp : Number ,
    tmb : Number ,
    district : Number,
    mun_tao : Number,
    ea : Number
})