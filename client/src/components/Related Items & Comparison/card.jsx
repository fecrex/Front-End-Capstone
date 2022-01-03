import React, {useEffect, useState, useRef} from 'react';
import Modal from './cardModal.jsx';
import axios from 'axios';

function Card(props) {
  const modal = useRef(null);
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
      axios.post('http://localhost:3000/details', {
        id: item
      })
      .then(response => {
        setDetails(oldarray => [...oldarray, response])
      })
      .catch(err => {console.log('error setting state', err)})
    })
  }, [relatedList])

  if (relatedDetails) {
    return (
      relatedDetails.map((item, index) => {
        return(
          <>
          <button onClick={() => modal.current.open()}>x</button>
          <Modal ref={modal} related={item.data} original={props.relatedinfo[0]}/>
          <div className="related-item-card" key={index}>
          <img src="https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1632925545-t-shirts-2021-jgt-ok-1632923427.jpg?crop=1xw:1xh;center,top&resize=768:*" />
          <div className="product-details">
            <div>{item.data.category}</div>
            <div>{item.data.description}</div>
            <div>${item.data.default_price}</div>
            <div>Star rating</div>
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
