const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/carouselvideo', { useNewUrlParser: true, useUnifiedTopology: true });

const { Schema } = mongoose;
const carousel = new Schema({
  videoId: Number,
  videos: [{
    username: String,
    title: String,
    description: String,
    created_at: Date,
    view_count: Number,
    thumbnail: String,
    url: String,
    category: { id: Number, name: String },
    game: { id: Number, name: String, thumbnail: String },
  }],
});

const Carousel = mongoose.model('Carousel', carousel);

const saveCarousel = (carousels, callback) => {
  Carousel.create(carousels, (err, result) => {
    if (err) {
      callback(err);
    } else {
      callback(null, result);
    }
  });
};

const deleteCarousel = (callback) => {
  Carousel.deleteMany({}, (err, result) => {
    if (err) {
      callback(err);
    }
    callback(null, result);
  });
};

const retrieveCarousel = (videoId, callback) => {
  Carousel.findOne({ videoId }, (err, result) => {
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
