import React from 'react';

const ReviewTile = function(props) {
  return (
    <div className="individual-review">
      <div className="review-star-rating">Rating: {props.starRating}</div>
      <div className="review-date">Review Date: {props.reviewDate}</div>
      <div className="review-summary">Review Summary: {props.reviewSummary}</div>
      <div className="review-full-body">Full Review: {props.reviewBody}</div>
      <div className="recommend-this-product">I Recommend this Product: {props.reviewRecommendation}</div>
      <div className="reviewer-name">Username: {props.reviewerName}</div>
      <div className="response-from-seller">Response from Seller: {props.reviewResponse}</div>
      <div className="rating-helpfulness">Was this review helpful? {props.reviewHelpfulness}</div>
    </div>
  )
}

export default ReviewTile;


// const ReviewTile = function(props) {
//   return (
//     <div className="individual-review">
//       <div className="review-star-rating">Star Rating: *</div>
//       <div className="review-date">Review Date: October, 11th, 2021</div>
//       <div className="review-summary">Review Summary: This thing sucks</div>
//       <div className="review-full-body">Full Review: This thing sucks. It incapacitated my mailman which lead to me being unable to recieve the news that I had been summoned for jury service, so now I am writing this review from behind bars. Thanks a lot.</div>
//       <div className="recommend-this-product"></div>
//       <div className="reviewer-name">Username: NoobMaster69</div>
//       <div className="response-from-seller">Response from seller: No one cares</div>
//       <div className="rating-helpfulness">Was this review helpful? Yes 36 No 33</div>
//     </div>
//   )
// }