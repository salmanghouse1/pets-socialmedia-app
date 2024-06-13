// routes/auth.js
const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('./../controllers/users');
const router = express.Router();

// Authentication route
router.post('/login', async (req, res) => {
   
    const {email,password}=req.body;
const User(email,password);
    

});

module.exports = router;