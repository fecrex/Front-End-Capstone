import React from 'react';
import SizeSelector from './SizeSelector.jsx';
import QuantitySelector from './QuantitySelector.jsx';

function AddToCart(props) {
  return (
    <div className='size-quantity'>
      <SizeSelector />
      <QuantitySelector />
    </div>

  );
}

export default AddToCart;