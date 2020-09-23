const express = require("express");
const app = express();
const port = 3001;
const axios = require("axios");
require("dotenv").config();
const bodyParser = require("body-parser");

const key = process.env.API_KEY;

// app.use(bodyParser.json());

app.get("/courses", (req, res) => {
  console.log(req.query.searchTerm + "!!!!!!");
  axios
    .get(
      `https://maps.googleapis.com/maps/api/place/textsearch/json?query=golf+courses+${req.query.searchTerm}&key=${key}`
    )
    .then((response) => {
      res.send(response);
    })
    .catch((err) => console.log(err));
});

app.listen(port, () => {
  console.log(`Listening on ${port}`);
});
