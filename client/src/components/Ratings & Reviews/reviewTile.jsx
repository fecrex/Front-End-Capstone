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
      showMoreText: 'Show More',
      isImgClicked: false,
      clickYesCount: null,
      clickNoCount: null,
      hasYesVoted: false,
      hasNoVoted: false
    };
    this.showFullReviewHandler = this.showFullReviewHandler.bind(this);
    this.handleImageClick = this.handleImageClick.bind(this);
    this.handleYesVote = this.handleYesVote.bind(this);
    this.handleNoVote = this.handleNoVote.bind(this);
  }

  componentDidMount() {
    if ((this.state.clickYesCount === null) && (this.props.reviewHelpfulness)) {
      this.setState({
        clickYesCount: this.props.reviewHelpfulness
      })
    }
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

handleImageClick = function(e) {
  if (this.state.isImgClicked === false) {
    this.setState({
      isImgClicked: true
    })
  } else {
    this.setState({
      isImgClicked: false
    })
  }
}

handleYesVote = function(e) {
  if ((this.state.hasYesVoted === false) && (this.state.hasNoVoted === false)) {
    this.setState({
      clickYesCount: this.state.clickYesCount + 1,
      hasYesVoted: true
    })
  } else if ((this.state.hasYesVoted === true) && (this.state.hasNoVoted === false)) {
    this.setState({
      clickYesCount: this.state.clickYesCount - 1,
      hasYesVoted: false
    })
  } else if ((this.state.hasYesVoted === false) && (this.state.hasNoVoted === true)) {
    this.setState({
      clickYesCount: this.state.clickYesCount + 1,
      clickNoCount: this.state.clickNoCount - 1,
      hasYesVoted: true,
      hasNoVoted: false
    })
  }
}

handleNoVote = function(e) {
  if ((this.state.hasNoVoted === false) && (this.state.hasYesVoted === false)) {
    this.setState({
      clickNoCount: this.state.clickNoCount + 1,
      hasNoVoted: true
    })
  } else if ((this.state.hasNoVoted === true) && (this.state.hasYesVoted === false)) {
    this.setState({
      clickNoCount: this.state.clickNoCount - 1,
      hasNoVoted: false
    })
  } else if ((this.state.hasNoVoted === false) && (this.state.hasYesVoted === true)) {
    this.setState({
      clickNoCount: this.state.clickNoCount + 1,
      clickYesCount: this.state.clickYesCount - 1,
      hasNoVoted: true,
      hasYesVoted: false
    })
  }
}

  render () {
    return (
    <div className="individual-review">
      <Rating className="review-star-rating" defaultValue={this.props.starRating} precision={0.5} readOnly />
      <div className="review-summary">{this.props.reviewSummary}</div>
      <div className="review-date">{this.monthConverter(this.props.reviewDate.substring(5, 7)) + ' ' + this.props.reviewDate.substring(8, 10) + ', ' + this.props.reviewDate.substring(0, 4)}</div>
      <div className="review-full-body">
        <div>
          {this.props.reviewBody.length <= 250 ?
          <div className="review-full-text">{this.props.reviewBody}</div> :
          <div>{this.state.reviewText.length === 0 ? this.reviewSummarizer(this.props.reviewBody) : this.state.reviewText},
          <button onClick={this.showFullReviewHandler}>{this.state.showMoreText}</button></div>}
        </div>
        <div className="review-image-block">
          {this.state.isImgClicked ?
          <div>
          {this.props.reviewImages.map((image) => {
            return <img onClick={this.handleImageClick} className="review-images" key={image.id} src={image.url}></img>})}
          </div> :
          <div>
          {this.props.reviewImages.map((image) => {
            return <img onClick={this.handleImageClick} className="review-thumbnail-images" key={image.id} src={image.url}></img>})}
          </div>}
        </div>
      </div>
      {this.props.reviewRecommendation ? <div className="recommend-this-product">I recommend this product<div className="review-check"><CheckRoundedIcon/></div>
      </div> : null}
      <div className="reviewer-name">Username: {this.props.reviewerName}</div>
      <div className="response-from-seller">{(this.props.reviewResponse ? 'Response from Seller: ' + this.props.reviewResponse.substring(1, this.props.reviewResponse.length -1) : null)}</div>
      <div className="rating-helpfulness">Was this review helpful?
        <div className="review-helpful-buttons">
          <button onClick={this.handleYesVote} className="review-yes-button">Yes </button>{this.state.clickYesCount}
          <button onClick={this.handleNoVote} className="review-no-button">No </button>{this.state.clickNoCount}
        </div>
      </div>
    </div>
    )
  }
}

export default ReviewTile;