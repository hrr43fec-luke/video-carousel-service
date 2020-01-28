var faker = require('faker');

var thumbnailsUrls = [
  'https://unsplash.com/photos/o4c2zoVhjSw',
  'https://unsplash.com/photos/Sb2FkPFiadg',
  'https://unsplash.com/photos/_R95VMWyn7A',
  'https://unsplash.com/photos/5HbMSoTRGIg',
  'https://unsplash.com/photos/MCihFA2S-A4',
  'https://unsplash.com/photos/6ZR-f5bkrGE',
  'https://unsplash.com/photos/tloFnD-7EpI',
  'https://unsplash.com/photos/6yjAC0-OwkA',
  'https://unsplash.com/photos/8I-ht65iRww',
  'https://unsplash.com/photos/_ILG-Acpx7Q',
  'https://unsplash.com/photos/n-2_KHgeAy0',
  'https://unsplash.com/photos/7Zf9ujK6y14',
  'https://unsplash.com/photos/6eL_lMJDwjM',
  'https://unsplash.com/photos/eZkexsYgnUY',
  'https://unsplash.com/photos/2LXgkTqB2Vg',
  'https://unsplash.com/photos/j5MCxwaP0R0',
  'https://unsplash.com/photos/zZ6uR3uJriM',
  'https://unsplash.com/photos/zufXg9Zc9Ig',
  'https://unsplash.com/photos/MAqmEdUCq4k',
  'https://unsplash.com/photos/s7PhRjUJNeA'
];

var videoUrls = [
  'https://www.youtube.com/watch?v=o0Ks1ySNkD0',
  'https://www.youtube.com/watch?v=blpWr7_822o',
  'https://www.youtube.com/watch?v=KF4hH8wUXWw',
  'https://www.youtube.com/watch?v=Qu2LN5Gn5ao',
  'https://www.youtube.com/watch?v=9rnB4is9nX8',
  'https://www.youtube.com/watch?v=v2Bco2UatUM',
  'https://www.youtube.com/watch?v=auPN7WjNdB8',
  'https://www.youtube.com/watch?v=kh4Z7J9F8mA',
  'https://www.youtube.com/watch?v=lkUi5DGmP0o',
  'https://www.youtube.com/watch?v=rRzdU1bt0a8',
  'https://www.youtube.com/watch?v=0z9rOYx8CZM',
  'https://www.youtube.com/watch?v=eEhPQIcyeUU',
  'https://www.youtube.com/watch?v=Trp8ewUVoiU',
  'https://www.youtube.com/watch?v=GkAnI6Ya8gs',
  'https://www.youtube.com/watch?v=mM4s7Zm9_eY',
  'https://www.youtube.com/watch?v=td8laG5TLR0',
  'https://www.youtube.com/watch?v=RBMaC_xcbs8',
  'https://www.youtube.com/watch?v=ViZ3_Juu0Yw',
  'https://www.youtube.com/watch?v=ce4yBeqPj9w',
  'https://www.youtube.com/watch?v=6uG9vtckp1U'
];

categories = ['Featured', 'Past Broadcasts', 'Past Premieres', 'Collections'];

var generateFakeData = () => {
  var carousel = {};
  carousel.user = {};
  carousel.user.id = 1;
  carousel.user.username = faker.internet.userName();
  var videos = []
  var video;
  for (var i = 0; i < 100; i++) {
    video = {};
    video.title = faker.lorem.words();
    video.description = faker.lorem.sentence();
    video.created_at =  faker.date.past();
    video.view_count = faker.random.number();
    video.thumbnail = thumbnailsUrls[Math.floor(Math.random() * categories.length)]
    video.url = videoUrls[Math.floor(Math.random() * videoUrls.length)];
    video.category =  categories[Math.floor(Math.random() * categories.length)];
    videos.push(video);
  }
  carousel.videos = videos;
  return carousel;

}

module.exports = generateFakeData;
