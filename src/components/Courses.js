import React from 'react';
import CourseList from './CourseList'

const Courses = ({courses, getCourseDetails}) => {
  return (
    <>
     {courses.map((course) => 
      <CourseList course={course} getCourseDetails={getCourseDetails}/>
     )}
    </>
  )
}

export default Courses