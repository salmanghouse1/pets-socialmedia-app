const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const validator = require('validator'); // Assuming you want to use validator for email and password validation
require('dotenv').config();

const UserSchema = new mongoose.Schema({
    
    username: { type: String,required:true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true }
});

// Static signup method
UserSchema.statics.signup = async function(username,email, password) {
    if (!username||!email || !password) {
        throw new Error('All Fields must be filled');
    }
    if (!validator.isEmail(email)) {
        throw new Error('Email is not valid');
    }
    if (!validator.isStrongPassword(password)) {
        throw new Error('Password is not strong enough');
    }

    const exists = await this.findOne({ email });
    const exists2 = await this.findOne({ username });
    if (exists) {
        throw new Error('Email Already in Use');
    }
    if (exists2) {
        throw new Error('Username Already in Use');
    }

    const salt = await bcrypt.genSalt(10);    
    const hash = await bcrypt.hash(password, salt);

    const user = await this.create({ username,email, password: hash });

    return user;
}

// Static login method
UserSchema.statics.login = async function(email, password) {
    if (!email || !password) {
        throw new Error('All fields must be filled');
    }

    const user = await this.findOne({ email });

    if (!user) {
        throw new Error('Incorrect Email');
    }

    const match = await bcrypt.compare(password, user.password);

    if (!match) {
        throw new Error('Incorrect Password');
    }

    return user;
}

module.exports = mongoose.model('User', UserSchema);
