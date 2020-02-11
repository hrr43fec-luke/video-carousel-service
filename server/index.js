/* eslint-disable no-console */
const express = require('express');
const bodyParser = require('body-parser');
const db = require('../database/index.js');
require('dotenv').config();
const helper = require('./helper.js');

const { PORT } = process.env;
const app = express();

app.use(express.static('client/public'));
app.use(bodyParser.json());

db.connect()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Listening on port ${PORT}`);
    });
  }).catch((err) => {
    console.error(err);
  });

app.get('/videos/:videoId', (req, res) => {
  console.log(req.params);
  db.retrieveCarousel(req.params.videoId, (err, result) => {
    if (err) {
      console.error(err);
    } else {
      res.json(helper.getVideosByCategories(result));
    }
  });
});

app.get('/filter/:videoId/:categoryId', (req, res) => {
  console.log(req.params);
  db.retrieveCarousel(req.params.videoId, (err, result) => {
    if (err) {
      console.error(err);
    } else {
      res.json(helper.getVideosByCategories(result, parseInt(req.params.categoryId, 10)));
    }
  });
});

module.exports = app;
