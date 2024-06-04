const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
require('dotenv').config();

const User = require('../models/User');
const Post = require('../models/Post');

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('MongoDB connected');
}).catch(err => {
  console.log('MongoDB connection error:', err);
});

// Seed Data
const users = [
  {
    username: 'user1',
    email: 'user1@example.com',
    password: bcrypt.hashSync('password1', 10)
  },
  {
    username: 'user2',
    email: 'user2@example.com',
    password: bcrypt.hashSync('password2', 10)
  }
];

const posts = [
  {
    text: 'This is the first post',
    image: 'https://via.placeholder.com/150',
    user: null // to be set later
  },
  {
    text: 'This is the second post',
    image: 'https://via.placeholder.com/150',
    user: null // to be set later
  }
];

// Insert Seed Data
const seedDatabase = async () => {
  try {
    // Clear existing data
    await User.deleteMany({});
    await Post.deleteMany({});

    // Insert users
    const createdUsers = await User.insertMany(users);

    // Assign user to posts
    posts[0].user = createdUsers[0]._id;
    posts[1].user = createdUsers[1]._id;

    // Insert posts
    await Post.insertMany(posts);

    console.log('Database seeded successfully');
    mongoose.connection.close();
  } catch (err) {
    console.log('Error seeding database:', err);
    mongoose.connection.close();
  }
};

seedDatabase();
