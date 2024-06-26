const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema({
    text: { type: String, required: true },
    image: { type: String },
    likes: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
    comments: [
        {
            user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
            text: { type: String, required: true }
        }
    ]
}, { timestamps: true });

module.exports = mongoose.model('Post', PostSchema);