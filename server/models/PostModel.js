const mongoose = require('mongoose');

const post = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true,
    },
    content: {
        type: String,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    }
})