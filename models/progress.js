var mongoose = require('mongoose'),
Schema = mongoose.Schema;

var Progress = new Schema({
    ea : { type: Schema.Types.ObjectId,ref : 'Area' },
    max_Building : {type : Number} ,
    max_Household : {type : Number} ,
    max_Agricultural_HH : {type : Number} ,
    value_Building : {type : Number} ,
    value_Household : {type : Number} ,
    value_Agricultural_HH : {type : Number} ,
    progresses : { type: Schema.Types.ObjectId , ref : 'Progress'}
});

module.exports = mongoose.model('Progress', Progress);