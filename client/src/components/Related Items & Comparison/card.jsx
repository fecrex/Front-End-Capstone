import React, {useEffect, useState} from 'react';
import axios from 'axios';

function Card(props) {
  const [relatedList, setRelatedList] = useState([]);
  const [relatedDetails, setDetails] = useState([]);

  useEffect(() => {
    if (props.relatedinfo[0]) {
      axios.post('http://localhost:3000/related', {
        id: props.relatedinfo[0].id
      })
      .then(relprod => {
        setRelatedList(relprod.data);
      })
      .catch(err => {
        console.log('error getting related list: ', err);
      })
    }
  }, [props.relatedinfo]);

  useEffect(() => {
    relatedList.forEach(item => {
      axios.get()
    })
  })

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
