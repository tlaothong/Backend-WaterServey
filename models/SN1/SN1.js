var mongoose = require('mongoose'),
Schema = mongoose.Schema;

var SN1 = new Schema({
    SN1P1 : { type: Schema.Types.ObjectId,ref: 'SN1P1' },
    SN1P2 : [{ type: Schema.Types.ObjectId,ref: 'SN1P2' }],
    status_approve : Number ,
    status_data : Number ,
    messeges : [{
        date: {type: Date},
        massage: {type: String}
    }]
});

module.exports = mongoose.model('SN1', SN1);