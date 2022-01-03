import React from 'react';
import Rating from '@mui/material/Rating';
import CheckRoundedIcon from '@mui/icons-material/CheckRounded';
import styled from 'styled-components';


class ReviewTile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reviewText: '',
      reviewSum: '',
      reviewShown: false,
      showMoreText: 'Show More'
    };
    this.showFullReviewHandler = this.showFullReviewHandler.bind(this);
  }

  monthConverter= function(num) {
    var monthsObj = {
      '01': 'January',
      '02': 'February',
      '03': 'March',
      '04': 'April',
      '05': 'May',
      '06': 'June',
      '07': 'July',
      '08': 'August',
      '09': 'September',
      '10': 'October',
      '11': 'November',
      '12': 'December'
    }
    return monthsObj[num.toString()];
  };


reviewSummarizer = function(str) {
  var truncatedStr = str.slice(0, 251);
  return truncatedStr
}

showFullReviewHandler = function(e) {
  e.preventDefault();
  if (this.state.reviewShown === false) {
    this.setState({
      reviewText: this.props.reviewBody,
      reviewShown: true,
      showMoreText: 'Show Less'
    })
  } else {
    this.setState({
      reviewText: this.reviewSummarizer(this.props.reviewBody),
      reviewShown: false,
      showMoreText: 'Show More'
    })
  }
}

  render () {
    return (
    <div className="individual-review">
      <Rating className="review-star-rating" defaultValue={this.props.starRating} precision={0.5} />
      <div className="review-date">{this.monthConverter(this.props.reviewDate.substring(5, 7)) + ' ' + this.props.reviewDate.substring(8, 10) + ', ' + this.props.reviewDate.substring(0, 4)}</div>
      <div className="review-summary">{this.props.reviewSummary}</div>
      <div className="review-full-body">
        <div>
          {this.props.reviewBody.length <= 250 ?
          <div className="review-full-text">{this.props.reviewBody}</div> :
          <div>{this.state.reviewText.length === 0 ? this.reviewSummarizer(this.props.reviewBody) : this.state.reviewText},
          <button onClick={this.showFullReviewHandler}>{this.state.showMoreText}</button></div>}
        </div>
        <div>
          {this.props.reviewImages.map((image) => {
            return <img className="review-images" key={image.id} src={image.url}></img>
          })}
        </div>
      </div>
      {this.props.reviewRecommendation ? <div>I recommend this product<div className="review-check"><CheckRoundedIcon/></div>
      </div> : null}
      <div className="reviewer-name">Username: {this.props.reviewerName}</div>
      <div className="response-from-seller">{(this.props.reviewResponse ? 'Response from Seller: ' : null)}</div>
      <div className="rating-helpfulness">Was this review helpful? Yes: {this.props.reviewHelpfulness}</div>
    </div>
    )
  }
}

export default ReviewTile;