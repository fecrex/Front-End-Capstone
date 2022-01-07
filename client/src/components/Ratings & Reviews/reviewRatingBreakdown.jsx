import React from 'react';
import Rating from '@mui/material/Rating';

class ReviewRatingBreakdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      numberOfReviews: null,
      averageRating: null,
      percentRecommend: null
    }
  }



  render () {
    return (
      <div>
        <div>{3.5 + '  '}
          <Rating className="review-star-breakdown" defaultValue={3.5} precision={0.25} readOnly />
        <div>{5} Total Reviews</div>
        </div>
      <div>Rating Breakdown</div>
      <div>{30}% recommend this product</div>
    </div>
    )
  }
}

export default ReviewRatingBreakdown;