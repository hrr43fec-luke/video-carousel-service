const db = require('./');
const generateFakeData = require('./dataGenerator.js');
console.log(db);

var seedDb = () => {

  db.deleteCarousel((err, result) => {
    if (err) {
      console.error(err);
    } else {
      console.log("after deleted", result);
      generateFakeData((err, carousel) => {
        if (err) {
          console.error(err);
        } else {
            db.saveCarousel(carousel, (err, result) => {
              if (err) {
                console.error(err);
              } else {
                console.log("Script generated Data generated");
                console.log(result);
              }
            });
          }
      });
    }
  });
}

seedDb();

module.exports = seedDb;