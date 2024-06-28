// server.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();
const donationRoutes = require('./routes/donationRoutes');
const authRoutes = require('./routes/auth');
const postRoutes=require('./routes/posts');
const uploadRouter = require('./routes/upload');
const userRouter = require('./routes/users');

const app = express();
app.use(cors());
app.use(express.json());
const mongoURI = process.env.MONGO_URI;

console.log(mongoURI);
if (!mongoURI) {
  console.error('Mongo URI is not defined');
  process.exit(1); // Exit the process if the URI is not defined
}


mongoose.connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    
}).then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

 
// Define routes
app.use('/users', userRouter);
app.use('/upload', uploadRouter);

app.use('/api/v1/auth', authRoutes);
app.use('/api/v1/donations', donationRoutes);
app.use('/api/v1/posts', postRoutes);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));




