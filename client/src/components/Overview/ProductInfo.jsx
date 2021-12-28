import React from 'react';
import axios from 'axios';

class ProductInfo extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      rating: 0
    }
  }

  render() {
    var product = this.props.products[0];
    return (
      <div className='product-info'>
        <div className='star-rating'>
          {[...Array(5)].map((star, index) => {
            return (
              <span key={index} className='star'>&#9733;</span>
            );
          })} Star Rating
        </div>
        <div id='product-category'>Product Category</div>
        <div id='product-title'>Product Title</div>
        <div id='product-price'>Price</div>
        <div id ='product-overview'>
          Product Overview - This is a test paragraph for the product overview.
        </div>
        <div id='share-social'>Share on Social Media</div>
      </div>
    );
  }
}

export default ProductInfo;