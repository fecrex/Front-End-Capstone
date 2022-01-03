import React from 'react';
import axios from 'axios';
import ReviewTile from './reviewTile.jsx';

class ReviewList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reviewData: [],
      displayData: [],
      loading: false,
      reviewCount: 2
    }
    this.showMoreReviews = this.showMoreReviews.bind(this);
  }

  componentDidMount() {
        this.getReviews();
      }

  getReviews = async() => {
    try {
      var resp = await axios.get('http://localhost:3000/reviews');
      this.setState({
        reviewData: resp.data,
        displayData: resp.data.results.slice(0, 2),
        reviewCount: this.state.reviewCount + 2,
        loading: true
      })
    } catch(err) {
      console.log('stupid error in the catch')
    }
  }

  showMoreReviews = function(e) {
    e.preventDefault();
    this.setState({
      reviewCount: this.state.reviewCount + 2,
      displayData: this.state.reviewData.results.slice(0, this.state.reviewCount)
    })
  }

  render () {
      return (
    <div>
      <h1 className="review-header">Reviews</h1>
        <div className="review-list">
        {this.state.loading ? this.state.displayData.map((review, index) => {
        return <ReviewTile key={index}starRating={review.rating} reviewDate={review.date} reviewSummary={review.summary} reviewBody={review.body} reviewRecommendation={review.recommend} reviewerName={review.reviewer_name} reviewResponse={review.response} reviewHelpfulness={review.helpfulness} reviewImages={review.photos}/>
          }) : null }
        </div>
        <div className="show-more-reviews">
          {this.state.loading && (this.state.reviewCount - 2 < this.state.reviewData.results.length) ?
          <button onClick={this.showMoreReviews}>Load More Reviews</button> : null}
        </div>
    </div>
    );
  }
}

export default ReviewList;