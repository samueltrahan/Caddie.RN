import React, {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom'
import axios from 'axios'

const CourseDetails = () => {
  const [courseDetails, setCourseDetails] = useState({})
  const {id} = useParams();

  useEffect(() => {
    const getCourseDetails = async (courseId) => {
      axios.get('/details', {
        params: {
          courseId: courseId,
        },
      })
      .then((response) => {
        setCourseDetails(response.data.result)
      })
      .catch((err) => console.log(err));
    }
    getCourseDetails(id);
  }, [id])
 
  console.log(courseDetails);
  

  // const reviews = courseDetails.reviews.map((review) => {
  //   return review
  // })

  return (
    <>
    <div>
     <h1><a href={courseDetails.website}>{courseDetails.name}</a></h1>
     <h2>{courseDetails.formatted_address}</h2>
     <h2>{courseDetails.formatted_phone_number}</h2>
    </div>
    </>
  )
}

export default CourseDetails;