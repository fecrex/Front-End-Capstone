import React from 'react';
import axios from 'axios';
import ReviewTile from './reviewTile.jsx';


class ReviewList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }
  render () {
    return (
      <div>
        <h1>Reviews</h1>
        <ReviewTile/>
      </div>
    )
  }
}

export default ReviewList;