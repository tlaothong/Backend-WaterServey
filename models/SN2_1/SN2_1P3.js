var mongoose = require('mongoose'),
Schema = mongoose.Schema;

var SN2_1P3  = new Schema({
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

module.exports = mongoose.model('SN2_1P3', SN2_1P3);
