const db = require('../database/index.js');
const express = require('express');
const app = express();

app.use(express.static("client/public"));

app.listen(3003, () => {
  console.log("Listening on port 3003")
});

app.get('/videos/:userId', (req, res) => {
  db.retrieveCarousel(req.params.userId, (err, result) => {
    if (err) {
      console.error(err);
    } else {
      res.json(result);
    }
  });
});



