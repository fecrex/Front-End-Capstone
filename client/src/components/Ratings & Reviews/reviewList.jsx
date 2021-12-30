import React from 'react';
import axios from 'axios';
import ReviewTile from './reviewTile.jsx';

class ReviewList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reviewData: [],
      loading: false
    }
  }

  componentDidMount() {
        this.getReviews();
      }

  getReviews = async() => {
    try {
      var resp = await axios.get('http://localhost:3000/reviews');
      this.setState({
        reviewData: resp.data,
        loading: true
      })
    } catch(err) {
      console.log('stupid error in the catch')
    }
  }

  render () {
      return (
        <div>
    <h1>Reviews</h1>
    {this.state.loading ? this.state.reviewData.results.map((review, index) => {
    return <ReviewTile key={index}starRating={review.rating} reviewDate={review.date} reviewSummary={review.summary} reviewBody={review.body} reviewRecommendation={review.recommend} reviewerName={review.reviewer_name} reviewResponse={review.response} reviewHelpfulness={review.helpfulness} reviewImages={review.photos}/>
      }) : null };
      </div>
    );
  }
}

export default ReviewList;