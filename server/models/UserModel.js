const mongoose = require('mongoose');

const user = new mongoose.Schema({
    id: {
        type: String,
        required: true,
        trim: true,
    },
    password: {
        type: String,
        required: true,
    },
    nick: {
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
})