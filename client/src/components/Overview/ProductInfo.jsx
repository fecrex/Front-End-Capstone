import React from 'react';
import axios from 'axios';

function ProductInfo(props) {
  return (
    <div className='product-info'>
      <div>Star Rating - # of Reviews</div>
      <div>Product Category</div>
      <div>Product Title</div>
      <div>Price</div>
      <div>Product Overview</div>
      <div>Share on Social Media</div>
    </div>
  );
}

export default ProductInfo;