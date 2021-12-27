import React from 'react';
import axios from 'axios';

function ProductInfo(props) {
  return (
    <div className='product-info'>
      <div className='star-rating'>
        {[...Array(5)].map((star) => {
          return (
            <span className='star'>&#9733;</span>
          );
        })} Star Rating
      </div>
      <div id='product-title'>Product Category</div>
      <div id='product-title'>Product Title</div>
      <div id='product-price'>Price</div>
      <div id ='product-overview'>Product Overview</div>
      <div id='share-social'>Share on Social Media</div>
    </div>
  );
}

export default ProductInfo;