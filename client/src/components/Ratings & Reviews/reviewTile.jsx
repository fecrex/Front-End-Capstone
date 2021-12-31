import React from 'react';
import Rating from '@mui/material/Rating';
import CheckRoundedIcon from '@mui/icons-material/CheckRounded';

const ReviewTile = function(props) {

  var monthConverter= function(num) {
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
    };
    return monthsObj[num.toString()];
  }

  return (
    <div className="individual-review">
      <Rating className="review-star-rating" defaultValue={props.starRating} precision={0.5} />
      <div className="review-date">{monthConverter(props.reviewDate.substring(5, 7)) + ' ' + props.reviewDate.substring(8, 10) + ', ' + props.reviewDate.substring(0, 4)}</div>
      <div className="review-summary">Review Summary: {props.reviewSummary}</div>
      <div className="review-full-body">Full Review: {props.reviewBody}</div>
      {props.reviewImages.map((image) => {
        return <img className="review-images" key={image.id} src={image.url}></img>
      })}
      <div className="recommend-this-product">{(props.reviewRecommendation ? 'I Recommend this Product \u2713' : null)}</div>
      <div className="reviewer-name">Username: {props.reviewerName}</div>
      <div className="response-from-seller">{(props.reviewResponse ? 'Response from Seller: ' : null)}</div>
      <div className="rating-helpfulness">Was this review helpful? Yes: {props.reviewHelpfulness}</div>
    </div>
  )
}

export default ReviewTile;
