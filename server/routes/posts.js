// routes/posts.js
const express = require('express');
const { check, validationResult } = require('express-validator');
const auth = require('../middleware/auth');
const {getPosts} = require('../controllers/postController');
const User = require('../models/User');
const router = express.Router();

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

// Get all posts
router.get('/',getPosts);

module.exports = router;
