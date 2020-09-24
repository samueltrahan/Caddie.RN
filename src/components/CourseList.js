import React from 'react';
import './CourseList.css'

const CourseList = ({course}) => {
  return (
    <>
    <div className="course-list">
      <ul>
      <li>{course.name}</li>
      <li>{course.formatted_address}</li>
      </ul>
    </div>
    </>
  )
}

export default CourseList