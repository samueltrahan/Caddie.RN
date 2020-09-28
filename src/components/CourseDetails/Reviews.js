import React from 'react';

const Reviews = ({reviews}) => {
return (
  <>
  <h1>Reviews</h1>
  {reviews.map((review) => 
  <div>
    <h2>{review.author_name}</h2>
    <h4>{review.text}</h4>
  <h5>{review.relative_time_description}</h5>
  </div>
  )}
  </>
)
}


export default Reviews