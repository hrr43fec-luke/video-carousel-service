const faker = require('faker');

const thumbnailsUrls = [
  'https://static-cdn.jtvnw.net/s3_vods/77ef7aa945d537365df2_ninja_35086893728_1261601978/thumb/thumb0-320x180.jpg',
  'https://static-cdn.jtvnw.net/s3_vods/97cb389e37654e49717d_ninja_35074984224_1260857521/thumb/thumb0-320x180.jpg',
  'https://static-cdn.jtvnw.net/s3_vods/a3865242e3f3bf6a60c6_ninja_35051961856_1259418343/thumb/thumb0-320x180.jpg',
  'https://static-cdn.jtvnw.net/s3_vods/e003a19a7f93f0e31aef_ninja_34966100464_1254051066/thumb/thumb0-320x180.jpg',
  'https://static-cdn.jtvnw.net/s3_vods/a3865242e3f3bf6a60c6_ninja_35051961856_1259418343/thumb/thumb0-320x180.jpg',
  'https://static-cdn.jtvnw.net/s3_vods/60add15bdda6ac9d5111_ninja_35004420752_1256446473/thumb/thumb0-320x180.jpg',
  'https://static-cdn.jtvnw.net/s3_vods/b14cbb1c1f70b8edb63c_ninja_34951018416_1253108219/thumb/thumb0-320x180.jpg',
  'https://static-cdn.jtvnw.net/s3_vods/ada377bb4d2cda6cb188_nf_eternai_36769507104_1366846897/thumb/thumb0-320x180.jpg',
  'https://static-cdn.jtvnw.net/s3_vods/e205a686f1419a917f8f_nf_eternai_36745682608_1365356424/thumb/thumb0-320x180.jpg',
  'https://static-cdn.jtvnw.net/s3_vods/05aa531e5f_ninja_23359947360_528667600//thumb/thumb93927303-320x180.jpg',
  'https://static-cdn.jtvnw.net/s3_vods/d59484effa408a86feee_mrfreshasian_36764757056_1366549651/thumb/thumb0-320x180.jpg',
  'https://static-cdn.jtvnw.net/s3_vods/b27d81233994012f79ef_ninja_32638765248_1108548259//thumb/thumb378008253-320x180.jpg',
  'https://static-cdn.jtvnw.net/s3_vods/0ee970a6e68b38a5520e_ninja_32261821904_1084989302//thumb/thumb366521045-320x180.jpg',
  'https://static-cdn.jtvnw.net/s3_vods/6bd0d87bdb6d8ceec276_mrfreshasian_36721488272_1363842520/thumb/thumb0-320x180.jpg',
  'https://static-cdn.jtvnw.net/s3_vods/069c7e12a32bd3156096_mrfreshasian_36774233376_1367142499/thumb/thumb0-320x180.jpg',
  'https://static-cdn.jtvnw.net/s3_vods/bde90a9b857ec2119389_mrfreshasian_36764553440_1366536917/thumb/thumb0-320x180.jpg',
  'https://static-cdn.jtvnw.net/s3_vods/16c0e5c1c882b2df3b5b_mrfreshasian_36737437552_1364840441/thumb/thumb0-320x180.jpg',
  'https://static-cdn.jtvnw.net/s3_vods/67a4ead0a62096f2bc7c_ninja_with_no_l_36779488384_1367471336/thumb/thumb0-320x180.jpg',
];

const videoUrls = [
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
  'https://www.youtube.com/watch?v=6uG9vtckp1U',
];

const categories = [[1, 'Featured'], [2, 'Past Broadcasts'], [3, 'Past Premieres'], [4, 'Collections']];

const games = [[1, 'Fortnite', 'https://static-cdn.jtvnw.net/ttv-boxart/Fortnite-40x56.jpg']];

const generateFakeData = () => {
  const carousels = [];
  for (let i = 1; i <= 100; i += 1) {
    const carousel = {};
    carousel.videoId = i;
    const relatedVideosMax = Math.floor(Math.random() * 100);
    const videos = [];
    for (let j = 1; j <= relatedVideosMax; j += 1) {
      const video = {};
      video.game = {};
      video.username = faker.internet.userName();
      video.title = faker.lorem.words();
      video.description = faker.lorem.sentence();
      video.created_at = faker.date.past();
      video.view_count = faker.random.number();
      video.thumbnail = thumbnailsUrls[Math.floor(Math.random() * categories.length)];
      video.url = videoUrls[Math.floor(Math.random() * videoUrls.length)];

      const [categoryId, categoryName] = categories[Math.floor(Math.random() * categories.length)];
      video.category = {};
      video.category.id = categoryId;
      video.category.name = categoryName;

      const [gameId, gameName, gameThumbnail] = games[0];
      video.game = {};
      video.game.id = gameId;
      video.game.name = gameName;
      video.game.thumbnail = gameThumbnail;

      videos.push(video);
    }
    carousel.videos = videos;
    carousels.push(carousel);
  }

  return carousels;
};

module.exports = generateFakeData;
