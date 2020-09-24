import React from 'react';
import './CourseList.css'

const CourseList = ({course}) => {
  return (
    <>
    <div className="course-list">
      <ul>
      <li className="course-name">{course.name}</li>
      <li className="course-address">{course.formatted_address}</li>
      </ul>
    </div>
    </>
  )
}

export default CourseList