const Post = require('../models/Post')

const createPost = async (req, res) => {
    try {
        const newPost = await Post.create({ content: req.body.content, user: req.user._id })
        res.status(201).json({ status: 'success', data: { post: newPost } })
    } catch (err) {
        res.status(400).json({ status: 'fail', message: err.message })
    }
}

const getPosts = async (req, res) => {
    try {
        const posts = await Post.find({}).sort({createdAt:-1})
        res.status(200).json(posts);
    } catch (error) {
        console.error('Error fetching posts:', error);
        res.status(500).json({ message: 'Server error' });
    }
};

const getPost = async (req,res)=>{
    const {id}= req.params

    const post = await Post.findById(id)

    if(!post){
        res.status(404).json({error:"no such post"})
    }
    res.status(200).json(post)
}

module.exports={
    getPost,
    getPosts,
    createPost
}