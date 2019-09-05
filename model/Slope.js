const mongoose = require('mongoose');

const Slope = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  level: {
    type: String,
  },
  image: {
    type: String,
  }
  averageRating: {
    type: Number,
  }
  comments: {
    type: Array,
  }
});

module.exports = mongoose.model('Slopes', Slope);