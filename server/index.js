/* eslint-disable no-console */
const express = require('express');
const bodyParser = require('body-parser');
const db = require('../database/index.js');
const helper = require('./helper.js');

const app = express();

app.use(express.static('client/public'));
app.use(bodyParser.json());

app.listen(3003, () => {
  console.log('Listening on port 3003');
});

app.get('/videos/:userId', (req, res) => {
  console.log(req.params);
  db.retrieveCarousel(req.params.userId, (err, result) => {
    if (err) {
      console.error(err);
    } else {
      res.json(helper.getSomeVideos(result));
    }
  });
});

module.exports = app;
