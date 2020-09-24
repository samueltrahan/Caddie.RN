import React from 'react';
import CourseList from './CourseList'

const Courses = ({courses}) => {
  return (
    <>
     {courses.map((course) => 
      <CourseList course={course}/>
     )}
    </>
  )
}

export default Courses