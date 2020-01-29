/* eslint-disable no-console */
const db = require('./');
const generateFakeData = require('./dataGenerator.js');

const seedDb = () => {
  db.deleteCarousel((err, result) => {
    if (err) {
      console.error('Carousel Deleted', result);
    } else {
      db.saveCarousel(generateFakeData(), (error, results) => {
        if (error) {
          console.error(error);
        } else {
          console.log('Data generated...');
          console.log(results);
        }
      });
    }
  });
};

seedDb();
module.exports = seedDb;
