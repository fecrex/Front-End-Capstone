import React from 'react';
import Rating from '@mui/material/Rating';
import LinearProgress from '@mui/material/LinearProgress';

class ReviewRatingBreakdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      numberOfReviews: null,
      averageRating: null,
      percentRecommend: null,
      loaded: false
    }
    this.getBarPercent = this.getBarPercent.bind(this);
  }

  componentDidMount() {
    this.getReviewCount();
    this.getAverageRating();
    this.getPercent();
  }

  getReviewCount = function() {
    var reviewValues = Object.values(this.props.reviewRatings);
    var sumStrNums = function(arr) {
      var sum = 0;
      for (var i = 0; i < arr.length; i++) {
        sum += Number(arr[i]);
      }
      return sum;
    }
    this.setState({
      numberOfReviews: sumStrNums(reviewValues)
    })
  }

  getAverageRating = function() {
    var reviewValues = Object.values(this.props.reviewRatings);
    var getAvg = function(arr) {
      var total = 0;
      var totalValue = 0;
      var result = 0;
      for (var i = 0; i < arr.length; i++) {
        total += Number(arr[i]);
      }
      for (var j = 0; j < arr.length; j++) {
        var currentNum = Number(arr[j])
        var multiplier = j + 1;
        totalValue += (currentNum * multiplier);
      }
      result = Math.round((totalValue/total) * 10) / 10;
      return result;
    }
    this.setState({
      averageRating: getAvg(reviewValues),
      loaded: true
    })
  }

  getPercent = function() {
    var getRecRating = function(obj) {
      var trueVal = Number(obj.true);
      var falseVal = Number(obj.false);
      var totalVal = trueVal + falseVal;
      return Math.round((trueVal/totalVal) * 100);
    }
    this.setState({
      percentRecommend: getRecRating(this.props.reviewRecommendations)
    })
  }

  getBarPercent = function(str, num) {
    var trueVal = Number(str);
    var totalVal = num;
    return Math.round((trueVal/totalVal) * 100);
  }

  render () {
    return (
      <div>
        <div>{this.state.averageRating + '  '}
          {this.state.loaded ?
          <Rating className="review-star-breakdown" defaultValue={this.state.averageRating} precision={0.25} readOnly />
          : null}
        <div>{this.state.numberOfReviews} Total Reviews</div>
        </div>
      <div>Rating Breakdown
        <div className="progress-5-star">{this.getBarPercent(this.props.reviewRatings['5'], this.state.numberOfReviews)}
        <LinearProgress color="primary" variant="determinate" value={this.getBarPercent(this.props.reviewRatings['5'], this.state.numberOfReviews)} />
        </div>
        <div className="progress-4-star">{this.getBarPercent(this.props.reviewRatings['4'], this.state.numberOfReviews)}
          <LinearProgress color="primary" variant="determinate" value={this.getBarPercent(this.props.reviewRatings['4'], this.state.numberOfReviews)} />
        </div>
        <div className="progress-3-star">{this.getBarPercent(this.props.reviewRatings['3'], this.state.numberOfReviews)}
          <LinearProgress color="primary" variant="determinate" value={this.getBarPercent(this.props.reviewRatings['3'], this.state.numberOfReviews)} />
        </div>
        <div className="progress-2-star">{this.getBarPercent(this.props.reviewRatings['2'], this.state.numberOfReviews)}
          <LinearProgress color="primary" variant="determinate" value={this.getBarPercent(this.props.reviewRatings['2'], this.state.numberOfReviews)} />
        </div>
        <div className="progress-1-star">{this.getBarPercent(this.props.reviewRatings['1'], this.state.numberOfReviews)}
          <LinearProgress color="primary" variant="determinate" value={this.getBarPercent(this.props.reviewRatings['1'], this.state.numberOfReviews)} />
        </div>
      </div>
      <div>{this.state.percentRecommend}% recommend this product</div>
    </div>
    )
  }
}

export default ReviewRatingBreakdown;