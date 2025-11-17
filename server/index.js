const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const studentRoutes = require('./routes/studentRoutes');

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());


//MongoDB connection
mongoose.connect("mongodb://localhost:27017/Sbit", {
 useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected successfully'))
.catch(err => console.error('MongoDB connection error:', err));

// Optional: handle runtime DB errors
mongoose.connection.on('error', err => {
  console.error('MongoDB runtime error:', err);
});

// Routes
app.use('/Student', studentRoutes);

// Start server
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

// Optional: handle unhandled promise rejections
process.on('unhandledRejection', err => {
  console.error('Unhandled Promise Rejection:', err);
  process.exit(1);
});