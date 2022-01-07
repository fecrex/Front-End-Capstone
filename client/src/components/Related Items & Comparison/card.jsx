import React, {useEffect, useState, useRef, forwardRef, useImperativeHandle} from 'react';
import Modal from './cardModal.jsx';
import axios from 'axios';
import Rating from '@mui/material/Rating';
import StarBorderIcon from '@mui/icons-material/StarBorder';

function Card(props, ref) {
  const modal = useRef([]);
  const [relatedList, setRelatedList] = useState([]);
  const [relatedDetails, setDetails] = useState([]);
  const [relatedReviews, setRelatedReviews] = useState({});
  const [slicedList, setSlicedList] = useState([]);
  const [upperCards, setUpperCards] = useState(3);
  const [lowerCards, setLowerCards] = useState(0);


  useImperativeHandle(ref, () => ({
    left: () => {
      if (lowerCards !== 0) {
        setLowerCards(lowerCards-1)
        setUpperCards(upperCards-1)
      }
    },

    right: () => {
      if (upperCards !== relatedDetails.length) {
        setLowerCards(lowerCards+1)
        setUpperCards(upperCards+1)
      }
    }
  }))


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

  useEffect(() => {
    setSlicedList(relatedDetails.slice(lowerCards, upperCards));
  }, [relatedDetails, upperCards])

  if (relatedDetails) {
    return (
      slicedList.map((item, index) => {
        return(
          <>
          <Modal ref={s => modal.current[index] = s} related={slicedList[index]} original={props.relatedinfo[0]}/>
          <div className="related-item-card" key={index}>
          <StarBorderIcon onClick={() => modal.current[index].open()}/>
          <img className="related-img" src={props.styles[item.id][0].photos[0].thumbnail_url} />
          <div className="product-details">
            <div>{item.category}</div>
            <div>{item.name}</div>
            <div>${props.styles[item.id][0].sale_price ? props.styles[item.id][0].sale_price : props.styles[item.id][0].original_price}</div>
            <Rating className="review-star-rating" key={item.id} defaultValue={relatedReviews[item.id] ? relatedReviews[item.id] : 0} precision={0.25} readOnly />
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

export default forwardRef(Card);
