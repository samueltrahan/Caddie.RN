import React from 'react';

const CourseList = ({course}) => {
  return (
    <>
    <div>
      <ul>
      <li>{course.name}</li>
      <li>{course.formatted_address}</li>
      </ul>
    </div>
    </>
  )
}

export default CourseList