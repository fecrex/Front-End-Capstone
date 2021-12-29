import React, {useEffect, useState} from 'react';
import axios from 'axios';

function Card(props) {
  const [relatedDetails, setDetails] = useState([]);
  useEffect(() => {
    if (props.relatedinfo) {
      props.relatedinfo.forEach(element => {
        axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/products/${element}`, {
          headers: {
            Authorization: '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'
          }
        })
        .then(data => {
          setDetails(oldArray => [...oldArray, data.data]);
        })
      })
    }
  }, [props.relatedinfo]);

  if (relatedDetails) {
    return (
      relatedDetails.map((item, index) => {
        return(
          <>
          <button>x</button>
          <div className="related-item-card" key={index}>
          <img src="https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1632925545-t-shirts-2021-jgt-ok-1632923427.jpg?crop=1xw:1xh;center,top&resize=768:*" />
          <div className="product-details">
            <div>{item.category}</div>
            <div>{item.description}</div>
            <div>{item.default_price}</div>
            <div>Review</div>
          </div>
          </div>
          </>
        )
      })
    )
  } else {
    return <div>loading...</div>
  }
}

export default Card;
