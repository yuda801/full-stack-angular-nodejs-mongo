const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    name: String,
    id: Number
}, {
    timestamps: true
});

module.exports = mongoose.model('User', UserSchema);