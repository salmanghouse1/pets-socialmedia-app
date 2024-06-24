const Post = require('../models/postModel');

exports.createPost = async (req, res) => {
    try {
        const newPost = await Post.create({ content: req.body.content, user: req.user._id });
        res.status(201).json({ status: 'success', data: { post: newPost } });
    } catch (err) {
        res.status(400).json({ status: 'fail', message: err.message });
    }
};

exports.getPosts = async (req, res) => {
    try {
        const posts = await Post.find().populate('user');
        res.status(200).json({ status: 'success', results: posts.length, data: { posts } });
    } catch (err) {
        res.status(400).json({ status: 'fail', message: err.message });
    }
};
