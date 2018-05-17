var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var users = new Schema({
}, { strict: false });

module.exports = mongoose.model('User', users);
