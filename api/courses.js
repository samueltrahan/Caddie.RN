import axios from 'axios'

const key = process.env.API_KEY;

function getCourses(req, res) {
  axios
  .get(
    `https://maps.googleapis.com/maps/api/place/textsearch/json?query=golf+courses+${req.query.searchTerm}&key=${key}`
  )
  .then((response) => {
    res.send(response.data);
  })
  .catch((err) => console.log(err));
}

export default getCourses