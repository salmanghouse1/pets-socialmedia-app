const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema({
    text: { type: String, required: true },
    user:{type:String,required:true},
    image: { type: String },
    likes: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
    comments: [
        {
            user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
            text: { type: String, required: true }
        }
    ]
    ,
    image_data: {type:Buffer},
    image_hash: {type:String}
}, { timestamps: true });

module.exports = mongoose.model('Post', PostSchema);