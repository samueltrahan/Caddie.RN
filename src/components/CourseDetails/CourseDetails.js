import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import './CourseDetails.css'
import Reviews from './Reviews'

const CourseDetails = () => {
  const [courseDetails, setCourseDetails] = useState({});
  const [reviews, setReviews] = useState([])
  const { id } = useParams();

  useEffect(() => {
    const getCourseDetails = async (courseId) => {
      axios
        .get("/details", {
          params: {
            courseId: courseId,
          },
        })
        .then(function(response) {
          setCourseDetails(response.data.result);
          setReviews(response.data.result.reviews)
        })
        .catch((err) => console.log(err));
      };
      getCourseDetails(id);
    }, [id]);
    
console.log(courseDetails)

  

  return (
    <>
      <div>
        <h1 className="course-name">
          <a href={courseDetails.website}>{courseDetails.name}</a>
        </h1>
        <h2 className="course-address">{courseDetails.formatted_address}</h2>
        <h2 className="course-phone">{courseDetails.formatted_phone_number}</h2>
        <h3 className="course-rating">Course Rating: {courseDetails.rating}</h3>
        <Reviews reviews={reviews}/>
      </div>
    </>
  );
};

export default CourseDetails;
