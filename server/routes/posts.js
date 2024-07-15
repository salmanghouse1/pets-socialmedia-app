// routes/posts.js
const express = require('express');
const { check, validationResult } = require('express-validator');
const auth = require('../middleware/auth');
const {getPosts} = require('../controllers/postController');
const User = require('../models/User');
const router = express.Router();



router.post('/posts', async (req, res) => {
    try {
      const { title, imageId } = req.body;
      const newPost = new Post({ title, imageId });
      await newPost.save();
      res.send({ status: 'success', postId: newPost._id });
    } catch (err) {
      res.status(400).send({ status: 'fail', message: err.message });
    }
  });
// Create a post
// router.post('/send', [auth, [
//     check('text', 'Text is required').not().isEmpty()
// ]], async (req, res) => {
//     const errors = validationResult(req);
//     if (!errors.isEmpty()) {
//         return res.status(400).json({ errors: errors.array() });
//     }

//     try {
//         const user = await User.findById(req.user.id).select('-password');
//         const newPost = new Post({
//             text: req.body.text,
//             user: req.user.id,
//             image: req.body.image,
//             paypalUserid:req.body.paypaluser_id
//         });

//         const post = await newPost.save();
//         res.json(post);
//     } catch (err) {
//         res.status(500).send('Server error');
//     }
// });
router.get('/posts/:id', async (req, res) => {
    try {
      const post = await Post.findById(req.params.id).populate('imageId');
      if (!post) {
        return res.status(404).send({ status: 'fail', message: 'Post not found' });
      }
      res.send({
        status: 'success',
        post: {
          title: post.title,
          image: post.imageId,
        },
      });
    } catch (err) {
      res.status(400).send({ status: 'fail', message: err.message });
    }
  });
// Get all posts
router.get('/',getPosts);

module.exports = router;
