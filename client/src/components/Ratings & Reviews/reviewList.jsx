import React from 'react';
import axios from 'axios';
import ReviewTile from './reviewTile.jsx';
import ReviewSubmission from './reviewSubmission.jsx';
import ReviewSubmitModal from './reviewSubmissionModal.jsx';
import ReviewRatingBreakdown from './reviewRatingBreakdown.jsx';

class ReviewList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reviewData: [],
      displayData: [],
      loading: false,
      metaLoading: false,
      reviewForm: false,
      reviewCount: 2,
      sort: 'relevant',
      reviewMetaData: []
    }
    this.showMoreReviews = this.showMoreReviews.bind(this);
    this.handleReviewSubmit = this.handleReviewSubmit.bind(this);
    this.getReviews = this.getReviews.bind(this);
    this.getMetaReviewData = this.getMetaReviewData.bind(this);
    this.handleReviewSort = this.handleReviewSort.bind(this);
  }

  componentDidUpdate() {
      if (this.props.productId[0] && this.state.reviewData.length === 0) {
        this.getReviews('relevant');
      }
      if (this.props.productId[0] && this.state.reviewMetaData.length === 0) {
        this.getMetaReviewData();
      }
  }

  getReviews = async(inputSort) => {
    try {
      var resp = await axios.post(`54.172.117.137:3000/reviews`, { id: this.props.productId[0], sort: inputSort});
      this.setState({
        reviewData: resp.data,
        displayData: resp.data.results.slice(0, 2),
        reviewCount: 4,
        loading: true,
        sort: inputSort
      })
    } catch(err) {
      console.log('error in the review catch block')
    }
  }

  getMetaReviewData = async() => {
    try {
      var resp = await axios.post(`54.172.117.137:3000/metareviews`, { id: this.props.productId[0]});
      this.setState({
        reviewMetaData: resp.data,
        metaLoading: true
      })
    } catch(err) {
      console.log('error in the meta review catch block')
    }
  }

  showMoreReviews = function(e) {
    this.setState({
      reviewCount: this.state.reviewCount + 2,
      displayData: this.state.reviewData.results.slice(0, this.state.reviewCount)
    })
  }

  handleReviewSubmit = function(e) {
    if (this.state.reviewForm === false) {
      this.setState({
        reviewForm: true
      })
    } else {
      this.setState({
        reviewForm: false
      })
    }
  }

  handleReviewSort = function(e) {
    this.getReviews(e.target.value);
  }

  render () {
      return (
    <div className="ratings-and-reviews">
        <div className="review-list-and-review-breakdown">
          <div className="review-rating-breakdown">
            <h1 className="reviews-glance-header">Reviews at a Glance</h1>
            {this.state.metaLoading ?
            <ReviewRatingBreakdown key={this.state.reviewMetaData.product_id} characteristics={this.state.reviewMetaData.characteristics} reviewRatings={this.state.reviewMetaData.ratings} reviewRecommendations={this.state.reviewMetaData.recommended}/>
             : null}
          </div>
          <div className="entire-review-list">
          <h1 className="review-list-header">Reviews List</h1>
          <div className="review-sort">
          <select onChange={this.handleReviewSort}>
            <option>{null}</option>
            <option value="helpful">Helpful</option>
            <option value="newest">Newest</option>
            <option value="relevant">Relevant</option>
          </select>
        </div>
          <div className="review-list">
            {this.state.loading ? this.state.displayData.map((review, index) => {
            return <ReviewTile key={index} starRating={review.rating} reviewDate={review.date} reviewSummary={review.summary} reviewBody={review.body} reviewRecommendation={review.recommend} reviewerName={review.reviewer_name} reviewResponse={review.response} reviewHelpfulness={review.helpfulness} reviewImages={review.photos}/>
              }) : null}
          </div>
          <div className="show-and-submit-review-buttons">
            <div className="review-button-child">
              <div className="show-more-reviews">
                {this.state.loading && (this.state.reviewCount - 2 < this.state.reviewData.results.length) ?
                <button onClick={this.showMoreReviews}>Load More Reviews</button> : null}
              </div>
            </div>
            <div className="review-button-child">
              <div className="submit-review">
                <ReviewSubmitModal>
                  <ReviewSubmission/>
                </ReviewSubmitModal>
              </div>
            </div>
          </div>
          </div>
        </div>
    </div>
    );
  }
}

export default ReviewList;