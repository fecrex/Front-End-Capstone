import React from 'react';
import axios from 'axios';

function Card(props) {
  return (
  <div className="related-item-card">
    <img src="https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1632925545-t-shirts-2021-jgt-ok-1632923427.jpg?crop=1xw:1xh;center,top&resize=768:*" />
    <div className="product-details">
      <div>Category</div>
      <div>Expanded Product Name With Extra Text</div>
      <div>Price</div>
      <div>Review</div>
    </div>
  </div>
  )
}

export default Card;