import React from 'react';

const ReviewCard = ({ name, title, reviewText, imageUrl }) => {
  return (
    <div className="reviews-section-card-one">
      <div className="reviews-section-card-heading">
        <div className="reviews-card-icon">
          <img src={imageUrl} loading="lazy" alt="" />
        </div>
        <div className="review-section-card-heading">
          <p className="text-small reviews-card-heading">{name}</p>
          <p className="text-small review-card-agency">{title}</p>
        </div>
      </div>
      <div className="reviews-section-card-lower-part">
        <p className="text-small reviews-section-card-paragraph">"{reviewText}"</p>
      </div>
    </div>
  );
};

export default ReviewCard;
