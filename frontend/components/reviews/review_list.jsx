import React from 'react';

import Review from './review';

import { connect } from 'react-redux';

class ReviewList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showing: 3
    }
  }

  render() {
    const reviewArray = this.props.reviewArray;

    if (reviewArray.length === 0) {
      return ("");
    } else {
      let sum = 0;
      reviewArray.forEach((r) => {
        sum += r.rating;
      })
      const avg = (sum / reviewArray.length).toFixed(1);

      const visibleReviews = reviewArray.slice(0, this.state.showing);

      const reviews = visibleReviews.map((r) => (
        <Review key={r.id} review={r} />
      ));


      return (
        <div className='review-list'>
          <h3>Average Rating: {avg} / 5 stars</h3>
          {reviews}
        </div>
      );
    }
  }
}

const mapStateToProps = state => ({
  reviewArray: state.workerDetail.reviews.reverse()
});

export default connect(mapStateToProps)(ReviewList);
