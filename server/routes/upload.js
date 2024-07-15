const express = require('express');
const multer = require('multer');
const crypto = require('crypto');
const mongoose = require('mongoose');
const Post = require('../models/Post');
const Image = require('../models/Image');
const router = express.Router();



router.post('/', upload.single('image'), async (req, res) => {
  try {
    const { filename, data } = req.body;
    const newImage = new Image({ filename, data });
    await newImage.save();
    res.send({ status: 'success', imageId: newImage._id });
  } catch (err) {
    res.status(400).send({ status: 'fail', message: err.message });
  }
});




router.get('/:id', async (req, res) => {
    try {
        const image = await Image.findById(req.params.id);
    
        if (!image) {
          return res.status(404).json({ success: false, message: 'Image not found' });
        }
    
        // Send the base64 encoded image data as a response
        res.send(image.data);
      } catch (err) {
        console.error('Error fetching image:', err);
        res.status(500).json({ success: false, message: 'Failed to fetch image' });
      }
    }
);

module.exports = router;
