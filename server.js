const express = require('express')
const app = express()
const port = 3001
const axios = require('axios')

const key = process.env.REACT_APP_API_KEY


app.get('/', (req, res) => {
  res.send(axios.get(`https://maps.googleapis.com/maps/api/place/textsearch/json?query=golf+courses+${req.body.term}&key=${key}`))
  .then(response => {res.json(response)})
  .catch(err => console.log(err))
})

app.listen(port, () => {
  console.log(`Listening on ${port}`)
})

