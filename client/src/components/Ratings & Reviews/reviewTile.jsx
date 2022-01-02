import React from 'react';
import Rating from '@mui/material/Rating';
import CheckRoundedIcon from '@mui/icons-material/CheckRounded';
import styled from 'styled-components';

const Checked = styled.div`
  color: green;
`;

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

  var reviewSummarizer = function(str) {
    var truncatedStr = str.slice(0, 251);
    return truncatedStr
  }

  var showFullReviewHandler = function(e) {
    e.preventDefault();
    console.log(e.target.innerHTML);
    console.log('HA HA! You clicked me loser!!!');
  }

  return (
    <div className="individual-review">
      <Rating className="review-star-rating" defaultValue={props.starRating} precision={0.5} />
      <div className="review-date">{monthConverter(props.reviewDate.substring(5, 7)) + ' ' + props.reviewDate.substring(8, 10) + ', ' + props.reviewDate.substring(0, 4)}</div>
      <div className="review-summary">{props.reviewSummary}</div>
      <div className="review-full-body">
        <div>
          {props.reviewBody.length <= 250 ?
          <div className="review-full-text">{props.reviewBody}</div> :
          <div>{reviewSummarizer(props.reviewBody)},
          <button onClick={showFullReviewHandler}>Show More</button></div>}
        </div>
        <div>
          {props.reviewImages.map((image) => {
            return <img className="review-images" key={image.id} src={image.url}></img>
          })}
        </div>
      </div>
      {props.reviewRecommendation ? <div>I recommend this product<Checked><CheckRoundedIcon/></Checked>
      </div> : null}
      <div className="reviewer-name">Username: {props.reviewerName}</div>
      <div className="response-from-seller">{(props.reviewResponse ? 'Response from Seller: ' : null)}</div>
      <div className="rating-helpfulness">Was this review helpful? Yes: {props.reviewHelpfulness}</div>
    </div>
  )
}

export default ReviewTile;