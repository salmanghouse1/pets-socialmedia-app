// routes/auth.js
const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('./../controllers/users');
const router = express.Router();

// Authentication route
router.post('/login', async (req, res) => {
   
    const {email,password}=req.body;
  
    try{
        const user = await User.login(email,password);
       
       const token=createToken(user._id);
        res.status(200).json({email,token});
    }
    catch(error){
    res.status(400).json({error:error.message});    
    }
});

module.exports = router;