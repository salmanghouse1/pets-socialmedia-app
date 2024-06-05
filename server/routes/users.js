const express = require('express');
const bcrypt = require('bcryptjs');
const createToken =require('./../utils/token');
const User = require('../models/User');
const router = express.Router();
const jwt = require('jsonwebtoken');


// Registration route
router.post('/register', async (req, res) => {
  
  
    const {username,email,password}=req.body;

    try{
        const user = await User.signup(username,email,password);
        console.log('User created:', user);
       const token=createToken(user._id);
        res.status(200).json({email,token});
    }
    catch(error){
    res.status(400).json({error:error.message});    
    }



});

module.exports = router;
