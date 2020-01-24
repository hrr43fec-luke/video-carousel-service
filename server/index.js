const express = require('express');
const app = express();

app.use(express.static("client/public"));

app.listen(2020, () => {
  console.log("Listening on port 2020")
});



