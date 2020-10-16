import axios from 'axios'


const key = process.env.REACT_APP_API_KEY;

function getDetails(req, res) {
  axios.get(
    `https://maps.googleapis.com/maps/api/place/details/json?place_id=${req.query.courseId}&key=${key}`
  )
  .then((response) => {
    res.send(response.data);
  })
  .catch((err) => console.log(err))
}

export default getDetails