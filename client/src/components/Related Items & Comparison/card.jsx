import React, {useEffect, useState, useRef} from 'react';
import Modal from './cardModal.jsx';
import axios from 'axios';

function Card(props) {
  const modal = useRef(null);
  const [relatedList, setRelatedList] = useState([]);
  const [relatedDetails, setDetails] = useState([]);
  const [relatedReviews, setRelatedReviews] = useState({});
  const [currentCards, setCurrentCards] = useState(2);

  useEffect(() => {
    relatedList.forEach(item => {
      axios.post('http://localhost:3000/reviews/avg', {
        id: item
      })
      .then(response => {
        let newObj = {};
        newObj[item] = response.data;
        let pp = Object.assign(relatedReviews, newObj);
        setRelatedReviews(pp);
      })
      .catch(err => {console.log('error setting state', err)});
    })
  }, [relatedList])

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
        setDetails(oldarray => [...oldarray, response.data])
      })
      .catch(err => {console.log('error setting state', err)});
    })
  }, [relatedList])

  if (relatedDetails) {
    let carousel = relatedDetails.slice(0, currentCards);
    return (
      relatedDetails.map((item, index) => {
        return(
          <>
          <button onClick={() => modal.current.open()}>x</button>
          <Modal ref={modal} related={item} original={props.relatedinfo[0]}/>
          <div className="related-item-card" key={index}>
          <img src={props.styles[item.id][0].photos[0].thumbnail_url} />
          <div className="product-details">
            <div>{item.category}</div>
            <div>{item.name}</div>
            <div>${item.default_price}</div>
            <div>{relatedReviews[item.id]}</div>
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
