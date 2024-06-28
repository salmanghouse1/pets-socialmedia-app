const express = require('express');
const multer = require('multer');
const crypto = require('crypto');
const mongoose = require('mongoose');
const Post = require('../models/Post');

const router = express.Router();
const upload = multer({ dest: 'uploads/' });


router.post('/', upload.single('image'), async (req, res) => {
    try {
        const img = require('fs').readFileSync(req.file.path);
        const image_hash = crypto.createHash('sha256').update(img).digest('hex');

        const newImage = new Post({
            image_data: img,
            image_hash
        });

        await newImage.save();
        res.json({ message: 'Post uploaded and saved successfully', image_hash, image_id: newImage._id });
    } catch (error) {
        res.status(500).json({ message: 'An error occurred', error });
    }
});

router.get('/:id', async (req, res) => {
    try {
        const image = await POst.findById(req.params.id);
        if (image) {
            res.contentType('image/jpeg');
            res.send(image.image_data);
        } else {
            res.status(404).json({ message: 'Post not found' });
        }
    } catch (error) {
        res.status(500).json({ message: 'An error occurred', error });
    }
});

module.exports = router;
