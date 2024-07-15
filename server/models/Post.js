const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema({
    text: { type: String, required: true },
    user:{type:String,required:true},
    likes: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
    comments: [
        {
            user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
            text: { type: String, required: true }
        }
    ]
    ,imageId: { type: mongoose.Schema.Types.ObjectId, ref: 'Image' },
    paypal_email:{type:String}
}, { timestamps: true });

module.exports = mongoose.model('Post', PostSchema);