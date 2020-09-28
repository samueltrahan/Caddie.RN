import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import './CourseDetails.css'

const CourseDetails = () => {
  const [courseDetails, setCourseDetails] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const getCourseDetails = async (courseId) => {
      axios
        .get("/details", {
          params: {
            courseId: courseId,
          },
        })
        .then((response) => {
          setCourseDetails(response.data.result);
        })
        .catch((err) => console.log(err));
    };
    getCourseDetails(id);
  }, [id]);

  console.log(courseDetails);

  // const reviews = courseDetails.photos.map((photo) => {
  //   return photo
  // })

  return (
    <>
      <div>
        <h1 className="course-name">
          <a href={courseDetails.website}>{courseDetails.name}</a>
        </h1>
        <h2 className="course-address">{courseDetails.formatted_address}</h2>
        <h2 className="course-phone">{courseDetails.formatted_phone_number}</h2>
        <h3 className="course-rating">Course Rating: {courseDetails.rating}</h3>
      </div>
    </>
  );
};

export default CourseDetails;
