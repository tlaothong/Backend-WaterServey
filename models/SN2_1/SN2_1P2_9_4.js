var mongoose = require('mongoose'),
Schema = mongoose.Schema;

var SN2_1P2_9_4  = new Schema({
    A2_E9_1_4_1_1: {type: Boolean},
    A2_E9_1_4_1_2: {type: Boolean},
    A2_E9_1_4_1_2_1: {type: String},
    A2_E9_1_4_2: {type: Number},
    A2_E9_1_4_2_1: {type: Boolean},
    A2_E9_1_4_2_2:[{ type: Schema.Types.ObjectId, ref: 'Pool' }],
    A2_E9_1_4_3: {type: Number},
    A2_E9_1_4_4_1: {type: Boolean},
    A2_E9_1_4_4_2: {type: Boolean},
    A2_E9_1_4_4_3: {type: Boolean},
    A2_E9_1_4_4_4: {type: Boolean},
    A2_E9_1_4_4_5: {type: Boolean},
    A2_E9_1_4_4_6: {type: Boolean},
    A2_E9_1_4_4_7: {type: Boolean},
    A2_E9_1_4_4_8:{type: Boolean},
    A2_E9_1_4_4_9: {type: Boolean},
    A2_E9_1_4_4_9_1: {type:String}
});

module.exports = mongoose.model('SN2_1P2_9_4', SN2_1P2_9_4);
