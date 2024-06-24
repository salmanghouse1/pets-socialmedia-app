const express = require('express');
const bcrypt = require('bcryptjs');
const createToken =require('./../utils/token');
const User = require('../models/User');
const router = express.Router();
const jwt = require('jsonwebtoken');
const Stripe = require('stripe');
const dotenv = require('dotenv');

dotenv.config();

const stripe = Stripe(process.env.STRIPE_SECRET_KEY);



const loginUser=async(req,res)=>{

}

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


router.get('/api/account', async (req, res) => {
    try {
        const account = await stripe.accounts.retrieve();
        res.json({ accountId: account.id });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;
