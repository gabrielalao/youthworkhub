import React from 'react';

const Review = ({review}) => {
  let stars = []
  for (let i = 0; i < review.rating; i++) {
    stars.push( <i className="fa fa-star"
                   aria-hidden="true"
                   key={i}
                ></i>);
  }
  for (let j = 0; j < 5 - review.rating; j++) {
    stars.push( <i className="fa fa-star-o"
                   aria-hidden="true"
                   key={'0' + (j + (5 - review.rating))}
                ></i>);
  }

  return (
  <div className='review'>
    <h3>{stars}</h3>
    <p>{review.body}</p>
  </div>
)};

export default Review;
