const express = require('express');
const { createPost, getPosts } = require('../controllers/postController');
const { protect } = require('../controllers/authController');
const router = express.Router();

router.route('/')
    .get(getPosts)
    .post(protect, createPost);

module.exports = router;
