var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/carouselvideo', {useNewUrlParser: true});

var db = mongoose.connection;

var Schema = mongoose.Schema;
var carousel = new Schema({
  user : { id: {type: Number, unique: true}, username: String},
  videos: [{
      id: {type: Number, unique: true},
      title: String,
      description: String,
      created_at: Date,
      view_count: Number,
      thumbnail: String,
      url: String,
      category: String
    }]
});

var Carousel = mongoose.model('Carousel', carousel);

var saveCarousel = (carousel, callback)  => {
  Carousel.create(carousel, (err, result) => {
    if (err) {
      console.error(err);
    } else {
      callback (null, result)
    }
  });
}

var deleteCarousel = (callback) => {
  Carousel.deleteOne({}, (err, result) => {
    if (err) {
      return handleError(err);
    } else {
      callback (null, result)
    }
  });
}

var retrieveCarousel = (callback) => {
  Carousel.find({}, (err, result) => {
    if (err) {
      return handleError(err);
    } else {
      callback (null, result)
    }
  });
}

module.exports = {
  saveCarousel: saveCarousel,
  deleteCarousel: deleteCarousel,
  retrieveCarousel: retrieveCarousel
};
