const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/carouselvideo', { useNewUrlParser: true });

const { Schema } = mongoose;
const carousel = new Schema({
  user: { id: Number, username: String },
  videos: [{
    id: { type: Number, unique: true },
    title: String,
    description: String,
    created_at: Date,
    view_count: Number,
    thumbnail: String,
    url: String,
    category: String,
  }],
});

const Carousel = mongoose.model('Carousel', carousel);

const saveCarousel = (newCarousel, callback) => {
  Carousel.create(newCarousel, (err, result) => {
    if (err) {
      callback(err);
    } else {
      callback(null, result);
    }
  });
};

const deleteCarousel = (callback) => {
  Carousel.deleteOne({}, (err, result) => {
    if (err) {
      callback(err);
    }
    callback(null, result);
  });
};

const retrieveCarousel = (userId, callback) => {
  Carousel.find({ 'user.id': userId }, (err, result) => {
    if (err) {
      callback(err);
    }
    callback(null, result);
  });
};

module.exports = {
  saveCarousel,
  deleteCarousel,
  retrieveCarousel,
};
