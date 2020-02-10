/* eslint-disable no-console */
const express = require('express');
const bodyParser = require('body-parser');
const db = require('../database/index.js');
require('dotenv').config()
const helper = require('./helper.js');


const app = express();

app.use(express.static('client/public'));
app.use(bodyParser.json());

app.listen(process.env.PORT, () => {
  console.log('Listening on port 3003');
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
