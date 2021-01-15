import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import './CourseDetails.css'
import Reviews from './Reviews'
import GoogleMaps from '../GoogleMaps/GoogleMaps'

const CourseDetails = () => {
  const [courseDetails, setCourseDetails] = useState({});
  const [reviews, setReviews] = useState([])
  const { id } = useParams();
  const [lat, setLat] = useState('');
  const [lng, setLng] = useState('');

  useEffect(() => {
    const getCourseDetails = async (courseId) => {
      axios
        .get("/api/details", {
          params: {
            courseId: courseId,
          },
        })
        .then(function(response) {
          setCourseDetails(response.data.result);
          setLat(response.data.result.geometry.location.lat);
          setLng(response.data.result.geometry.location.lng)
          setReviews(response.data.result.reviews)
        })
        .catch((err) => console.log(err));
      };
      getCourseDetails(id);
    }, [id]);
    
console.log(courseDetails)



  

  return (
    <>
      <div className="details">
        <h1 className="course-name">
          {courseDetails.name}
        </h1>
        <h2 className="course-address">{courseDetails.formatted_address}</h2>
        <a href="tel:{courseDetails.formatted_phone_number}" className="course-phone">{courseDetails.formatted_phone_number}</a>
        <h3 ><a className="tee-time" href={courseDetails.website}>Schedule a Tee Time</a></h3>
        <h3 className="course-rating">Course Rating: {courseDetails.rating} / 5 </h3>
      </div>
      <GoogleMaps lat={lat} lng={lng}/>
        <Reviews reviews={reviews}/>
    </>
  );
};

export default CourseDetails;
