import React from "react";
import "./Reviews.css";

const Reviews = ({ reviews }) => {
  return (
    <>
      <h1 className="review-header">Reviews</h1>
      {reviews.map((review) => (
        <div className="review-cards">
        <div className="row">
          <div className="col s12 m6">
            <div className="card blue-grey darken-1">
              <div className="card-content white-text">
                <span className="card-title">{review.author_name}</span>
                <h4>{review.text}</h4>
                <h5>{review.relative_time_description}</h5>
              </div>
            </div>
          </div>
        </div>
        </div>
      ))}
    </>
  );
};

export default Reviews;
