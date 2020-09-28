import React from "react";
import "./CourseList.css";
import {Link} from 'react-router-dom'

const CourseList = ({ course }) => {

  const courseId = course.place_id;
  return (
    <>
      <div className="course-list">
        <ul>
          <li className="course-name">{course.name}</li>
          <li className="course-address">{course.formatted_address}</li>
          <Link to={`/course-details/${courseId}`}  id="detail-btn" className="ui inverted gold button">Course Details</Link>
        </ul>
      </div>
    </>
  );
};

export default CourseList;
