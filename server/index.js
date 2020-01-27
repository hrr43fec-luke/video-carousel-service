const db = require('../database/index.js');
const express = require('express');
const app = express();

app.use(express.static("client/public"));

app.listen(2020, () => {
  console.log("Listening on port 2020")
});

app.get('/videos', (req, res) => {
  db.retrieveCarousel((err, result) => {
    if (err) {
      console.error(err);
    } else {
      res.json(result);
    }
  });
});



