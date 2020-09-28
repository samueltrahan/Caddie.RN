const express = require("express");
const app = express();
const port = 3001;
const axios = require("axios");
require("dotenv").config();

const key = process.env.API_KEY;

app.get("/courses", (req, res) => {
  axios
    .get(
      `https://maps.googleapis.com/maps/api/place/textsearch/json?query=golf+courses+${req.query.searchTerm}&key=${key}`
    )
    .then((response) => {
      res.send(response.data);
    })
    .catch((err) => console.log(err));
});

app.get('/details', (req, res) => {
  axios.get(
    `https://maps.googleapis.com/maps/api/place/details/json?place_id=${req.query.courseId}&key=${key}`
  )
  .then((response) => {
    res.send(response.data);
  })
  .catch((err) => console.log(err))
})

app.listen(port, () => {
  console.log(`Listening on ${port}`);
});
