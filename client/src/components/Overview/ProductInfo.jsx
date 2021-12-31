import React from 'react';
import axios from 'axios';
import ImageGallery from './ImageGallery.jsx';
import StyleSelector from './StyleSelector.jsx';

class ProductInfo extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      rating: undefined,
      numberRatings: undefined
    }

    this.getStarRating = this.getStarRating.bind(this);
  }

  componentDidMount() {
    this.getStarRating();
  }

  getStarRating = async() => {
    try {
      var resp = await axios.get('http://localhost:3000/reviews');
      var countRatings = resp.data.count;
      var ratingTotal = 0;
      for (var i = 0; i < resp.data.results.length; i++) {
        ratingTotal += resp.data.results[i].rating;
      }
      var averageRating = Math.round((ratingTotal / countRatings) * 100) / 100;
      this.setState({
        rating: averageRating,
        numberRatings: countRatings
      })
    } catch (err) {
      console.log('There was an error in your catch block');
    }
  }

  render() {
    return (
      <div className='product-info'>
        <div className='star-rating'>
          {/* {[...Array(5)].map((star, index) => {
            return (
              <span key={index} className='star'>&#9733;</span>
            );
          })}  */}
          Star Rating : {this.state.rating} - Read all {this.state.numberRatings} reviews
        </div>
        <div id='product-category'>
          {this.props.products ? this.props.products.map((product) => {
            return product.category
          }) : 'Product Category'}
        </div>
        <div id='product-title'>
          {this.props.products ? this.props.products.map((product) => {
              return product.name
            }) : 'Product Title'}
        </div>
        <div id='product-price'>
          {this.props.products ? this.props.products.map((product) => {
                return '$' + product.default_price
              }) : 'Product Price'}
        </div>

        <ImageGallery />
        <StyleSelector />

        <div id='product-overview'>
          {this.props.products ? this.props.products.map((product) => {
                  return product.description
                }) : 'Product Description'}
        </div>
        <div id='share-social'>Share on Social Media</div>
      </div>
    );
  }
}

export default ProductInfo;