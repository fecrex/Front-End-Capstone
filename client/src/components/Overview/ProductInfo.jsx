import React from 'react';
import axios from 'axios';
import ImageGallery from './ImageGallery.jsx';

class ProductInfo extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      rating: 0
    }
  }

  render() {
    return (
      <div className='product-info'>
        <div className='star-rating'>
          {[...Array(5)].map((star, index) => {
            return (
              <span key={index} className='star'>&#9733;</span>
            );
          })} Star Rating
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
                return product.default_price
              }) : 'Product Price'}
        </div>
        <ImageGallery />
        <div id ='product-overview'>
          {this.props.products ? this.props.products.map((product) => {
                  return product.description
                }) : 'Product Description'}
          {/* Product Overview - This is a test paragraph for the product overview. */}
        </div>
        <div id='share-social'>Share on Social Media</div>
      </div>
    );
  }
}

export default ProductInfo;