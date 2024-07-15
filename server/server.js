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


const storage = multer.diskStorage({
  destination: './uploads',
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}_${file.originalname}`);
  },
});

const upload = multer({
  storage: storage,
  limits: { fileSize: 1000000 }, // Limit file size to 1MB
  fileFilter: (req, file, cb) => {
    const filetypes = /jpeg|jpg|png|gif/;
    const mimetype = filetypes.test(file.mimetype);
    const extname = filetypes.test(path.extname(file.originalname).toLowerCase());

    if (mimetype && extname) {
      return cb(null, true);
    } else {
      cb('Error: Images Only!');
    }
  },
});


const app = express();
app.use(cors());
app.use(express.json());
app.use(express.raw({ type: '*/*' }));

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
app.use('/api/v1/images', imageRoutes);



const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));




