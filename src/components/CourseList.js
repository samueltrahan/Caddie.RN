import React from "react";
import "./CourseList.css";

const CourseList = ({ course, getCourseDetails }) => {

  const courseId = course.place_id;
  return (
    <>
      <div className="course-list">
        <ul>
          <li className="course-name">{course.name}</li>
          <li className="course-address">{course.formatted_address}</li>
          <button onClick={(event) => getCourseDetails(event, courseId)} id="detail-btn" className="ui inverted gold button">Course Details</button>
        </ul>
      </div>
    </>
  );
};

export default CourseList;
