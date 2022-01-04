import React from 'react';
import axios from 'axios';
import ImageGallery from './ImageGallery.jsx';
import StyleSelector from './StyleSelector.jsx';
import Rating from '@mui/material/Rating';

class ProductInfo extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      rating: undefined,
      numberRatings: undefined
    }

    this.getStarRating = this.getStarRating.bind(this);
  }

  componentDidUpdate(prevProps) {
    if (this.props.products !== prevProps.products) {
      this.getStarRating();
    }
  }

  getStarRating = async() => {
    try {
      var resp = await axios.post('http://localhost:3000/reviews', {id: this.props.products[0].id});
      var countRatings = resp.data.count;
      var ratingTotal = 0;
      for (var i = 0; i < resp.data.results.length; i++) {
        ratingTotal += resp.data.results[i].rating;
      }
      var averageRating = ratingTotal / countRatings
      this.setState({
        rating: averageRating.toFixed(2),
        numberRatings: countRatings
      })
    } catch (err) {
      console.log('There was an error in your catch block');
    }
  }

  render() {
    return (
      <div className='product-info'>

        <div className='product-info-star-rating'>
          { this.state.numberRatings ?
          <Rating defaultValue={Number(this.state.rating)} precision={0.25} readOnly/> : null}
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

        <ImageGallery products={this.props.products[0]}/>
        <StyleSelector products={this.props.products[0]}/>

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