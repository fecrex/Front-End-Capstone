import React from 'react';
import Rating from '@mui/material/Rating';
import LinearProgress from '@mui/material/LinearProgress';
import Slider from '@mui/material/Slider';

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
    this.getBreakdownRating = this.getBreakdownRating.bind(this);
    this.getBreakDownValue = this.getBreakDownValue.bind(this);
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

  getBreakdownRating = function(str) {
    var strVal = Number(str);
    return Math.round((strVal/5) * 100);
  }

  getBreakDownValue = function(str, num) {
    var fitObj = {
      size: {
        1: 'A size too small',
        2: '½ a size too small',
        3: 'Perfect',
        4: '½ a size too big',
        5: 'A size too wide'
      },
      width: {
        1: 'Too narrow',
        2: 'Slightly narrow',
        3: 'Perfect',
        4: 'Slightly wide',
        5: 'Too wide'
      },
      comfort: {
        1: 'Uncomfortable',
        2: 'Slightly uncomfortable',
        3: 'Ok',
        4: 'Comfortable',
        5: 'Perfect'
      },
      quality: {
        1: 'Poor',
        2: 'Below average',
        3: 'What I expected',
        4: 'Pretty great',
        5: 'Perfect'
      },
      length: {
        1: 'Runs Short',
        2: 'Runs slightly short',
        3: 'Perfect',
        4: 'Runs slightly long',
        5: 'Runs long'
      },
      fit: {
        1: 'Runs tight',
        2: 'Runs slightly tight',
        3: 'Perfect',
        4: 'Runs slightly long',
        5: 'Runs long'
      }
    }
    return fitObj[str][num.toString()];
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
        <div className="progress-5-star">
        <Rating className="review-star-breakdown" defaultValue={5} precision={0.25} readOnly />
        {this.props.reviewRatings['5']}
        <LinearProgress color="primary" variant="determinate" value={this.getBarPercent(this.props.reviewRatings['5'], this.state.numberOfReviews)} />
        </div>
        <div className="progress-4-star">
        <Rating className="review-star-breakdown" defaultValue={4} precision={0.25} readOnly />
          {this.props.reviewRatings['4']}
          <LinearProgress color="primary" variant="determinate" value={this.getBarPercent(this.props.reviewRatings['4'], this.state.numberOfReviews)} />
        </div>
        <div className="progress-3-star">
        <Rating className="review-star-breakdown" defaultValue={3} precision={0.25} readOnly />
          {this.props.reviewRatings['3']}
          <LinearProgress color="primary" variant="determinate" value={this.getBarPercent(this.props.reviewRatings['3'], this.state.numberOfReviews)} />
        </div>
        <div className="progress-2-star">
        <Rating className="review-star-breakdown" defaultValue={2} precision={0.25} readOnly />
          {this.props.reviewRatings['2']}
          <LinearProgress color="primary" variant="determinate" value={this.getBarPercent(this.props.reviewRatings['2'], this.state.numberOfReviews)} />
        </div>
        <div className="progress-1-star">
        <Rating className="review-star-breakdown" defaultValue={1} precision={0.25} readOnly />
          {this.props.reviewRatings['1']}
          <LinearProgress color="primary" variant="determinate" value={this.getBarPercent(this.props.reviewRatings['1'], this.state.numberOfReviews)} />
        </div>
      </div>
      <div>{this.state.percentRecommend}% recommend this product</div>
      <div>{' '}</div>
      <div className="product-breakdown-block">
        <h1>Product Breakdown</h1>
      <div>Comfort: {this.getBreakDownValue('comfort', Math.floor(this.props.characteristics.Comfort.value))}
      <Slider defaultValue={this.getBreakdownRating(this.props.characteristics.Comfort.value)} disabled />
      </div>
      <div>Fit: {this.getBreakDownValue('fit', Math.floor(this.props.characteristics.Fit.value))}
      <Slider defaultValue={this.getBreakdownRating(this.props.characteristics.Fit.value)} disabled />
      </div>
      <div>Length: {this.getBreakDownValue('length', Math.floor(this.props.characteristics.Length.value))}
      <Slider defaultValue={this.getBreakdownRating(this.props.characteristics.Length.value)} disabled />
      </div>
      <div>Quality: {this.getBreakDownValue('quality', Math.floor(this.props.characteristics.Quality.value))}
      <Slider defaultValue={this.getBreakdownRating(this.props.characteristics.Quality.value)} disabled />
      </div>
      </div>
    </div>
    )
  }
}

export default ReviewRatingBreakdown;