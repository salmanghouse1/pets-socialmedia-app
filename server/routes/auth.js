// routes/auth.js
const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const router = express.Router();

// Authentication route
router.post('/login', async (req, res) => {
   
    const {email,password}=req.body;

    if(!email||!password){
        throw Error('All fields must be filled');

    };



    const user =await findOne({email});

    if(!user){
        throw Error('Incorrect Email');
    };

    const match = await bcrypt.compare(password,user.password);

        if(!match){
throw Error('Incorrect Password');
        };

        return user;

});

module.exports = router;