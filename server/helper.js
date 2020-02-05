
const getVideosByCategories = (carousel, category = 1) => {

  const newCarousel = {};
  const videos = [];
  newCarousel.videoId = carousel.videoId;
  const inputVideos = carousel.videos;
  for (let i = 0; i < inputVideos.length; i += 1) {
    if (inputVideos[i].category.id === category) {
      videos.push(carousel.videos[i]);
    }
  }
  newCarousel.videos = videos;
  return newCarousel;
};

module.exports = {

  getVideosByCategories,
};
