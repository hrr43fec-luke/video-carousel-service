/* const getSomeVideos = (carousel) => {
  const newCarousel = {};
  const videos = [];
  newCarousel.user = {};
  newCarousel.user.id = carousel[0].user.id;
  newCarousel.user.username = carousel[0].user.username;
  for (let i = 0; i < 6; i += 1) {
    videos.push(carousel[0].videos[i]);
  }
  newCarousel.videos = videos;
  return newCarousel;
}; */


const getVideosByCategories = (carousel, category = 1) => {
  const newCarousel = {};
  const videos = [];
  newCarousel.user = {};
  newCarousel.user.id = carousel[0].user.id;
  newCarousel.user.username = carousel[0].user.username;
  for (let i = 0; i < 50; i += 1) {
    if (carousel[0].videos[i].category.id === category) {
      videos.push(carousel[0].videos[i]);
    }
  }
  newCarousel.videos = videos;
  return newCarousel;
};

module.exports = {
  // getSomeVideos,
  getVideosByCategories,
};
