const mongoose = require('mongoose');

const user = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        trim: true,
    },
    password: {
        type: String,
        required: true,
    },
    nickname: {
        type: String,
        required: true,
    },
    provider: {
        type: String,
    },
    snsId: {
        type: String,
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
});

const userModel = mongoose.model('User', user);

module.exports = userModel;