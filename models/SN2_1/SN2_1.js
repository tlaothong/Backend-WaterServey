var mongoose = require('mongoose'),
Schema = mongoose.Schema;

var  SN2_1 = new Schema({
    A1 : {type : Schema.Types.ObjectId, ref: 'SN2_1P1'},
    A2 : {type : Schema.Types.ObjectId, ref: 'SN2_1P2'},
    A3 : {type : Schema.Types.ObjectId, ref: 'SN2_1P3'},
    A4 : {type : Schema.Types.ObjectId, ref: 'SN2_1P4'},
    A5 : {type : Schema.Types.ObjectId, ref: 'SN2_1P5'},
    A6 : {type : Schema.Types.ObjectId, ref: 'SN2_1P6'},
    status : { type : Number},
    status_approve : { type : Number},
    status_data : { type : Number},
    messeges : [{
        date: {type: Date},
        massage: {type: String}
    }]
});

module.exports = mongoose.model('SN2_1', SN2_1);

