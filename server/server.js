// server.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();
const donationRoutes = require('./routes/donationRoutes');

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
    useCreateIndex: true,
    useFindAndModify: false
}).then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

 
// Define routes
app.use('/api/users', require('./routes/users'));


app.use('/api/v1/auth', authRoutes);
app.use('/api/v1/donations', donationRoutes);
app.use('/api/v1/posts', postRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));




mongoose.connect(DB, {
}).then(() => console.log('DB connection successful'));

const port = process.env.PORT || 3000