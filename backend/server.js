const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json()); // parse JSON requests

// Connect to MongoDB (replace with your MongoDB URL)
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Hotel Schema
const hotelSchema = new mongoose.Schema({
  name: String,
  rating: Number,
  description: String,
  img: String,
});

const Hotel = mongoose.model('Hotel', hotelSchema);

// Routes
app.get('/', (req, res) => {
  res.send('Backend is running 🚀');
});

// Get all hotels
app.get('/hotels', async (req, res) => {
  const hotels = await Hotel.find();
  res.json(hotels);
});

// Add a new hotel
app.post('/hotels', async (req, res) => {
  const newHotel = new Hotel(req.body);
  await newHotel.save();
  res.json(newHotel);
});

// Start server
if (require.main === module) {
  app.listen(5000, () => console.log('Server running on port 5000'));
}

module.exports = app;
