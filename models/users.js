var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var users = new Schema({
    USERID: { type: String, unique: true },
    FIRSTNAME: String,
    LASTNAME: String,
    EMAIL: String,
    PHONE: String,
    PID: String,
    PNAME: String,
    PASSWORD: String,
    USERNAME: String,
    STATUS: String,
    TITLE: String,
    SSN: String,
    LEVID: String,
    TID: String,
    LEVEL: String,
    TYPE_NAME: String,
    CWT: String,
    CWT_NAME: String,
}, { strict: false });

module.exports = mongoose.model('User', users);