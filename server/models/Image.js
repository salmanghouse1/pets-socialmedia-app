
    const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema({
    filename: String,
    data: String
}, { timestamps: true });

module.exports = mongoose.model('Post', PostSchema);