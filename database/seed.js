const db = require('./');
const generateFakeData = require('./dataGenerator.js');
console.log(db);

var seedDb = () => {
  db.deleteCarousel((err, result) => {
    db.saveCarousel(generateFakeData(), (err, result) => {
      if (err) {
        console.error(err);
      } else {
        console.log("Data generated...");
        console.log(result);
      }
    });
  });
}

seedDb();

module.exports = seedDb;