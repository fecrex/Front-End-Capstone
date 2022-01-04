import React from 'react';
import Card from './card.jsx';

function RelatedProducts (props) {
  return (
    <Card relatedinfo={props.relatedinfo}/>
  )
}

export default RelatedProducts;