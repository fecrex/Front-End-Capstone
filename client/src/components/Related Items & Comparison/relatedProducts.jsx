import React, {useState, useEffect, useRef} from 'react';
import Card from './card.jsx';
import axios from 'axios';
import Outfit from './Outfit.jsx';

function RelatedProducts (props) {
  const [test, setTest] = useState([]);
  const [mainStyle, setMainStyle] = useState();
  const [relatedStyles, setRelatedStyles] = useState();
  const carousel = useRef(null);

  useEffect(() => {
    if (props.relatedinfo[0]) {
      axios.post('http://localhost:3000/related', {
        id: props.relatedinfo[0].id
      })
      .then(relprod => {
        setTest(relprod.data);
      })
      .catch(err => {
        console.log('error getting related list: ', err);
      })

      axios.post('http://localhost:3000/styles', {
        id: props.relatedinfo[0].id
      })
      .then(resp => {
        setMainStyle(resp.data);
      })
      .catch(err => {
        console.log(err);
      })
    }
  }, [props.relatedinfo]);

  useEffect(() => {
    if (test.length !== 0) {
      let calls = test.map(item => {
        return axios.post('http://localhost:3000/styles', {
          id: item
        })
      })

      Promise.all(calls)
      .then(response => {
        let x = {};
        response.forEach(item => {
          x[item.data.product_id] = item.data.results;
        })
        setRelatedStyles(x);
      })
    }
  }, [test])

  if (relatedStyles) {
    return (
    <>
    <div className="related-container">
      <button onClick={()=> carousel.current.left()}>left</button>
      <Card ref={carousel} relatedinfo={props.relatedinfo} styles={relatedStyles}/>
      <button onClick={()=> carousel.current.right()}>right</button>
    </div>
    <Outfit item={props.relatedinfo} style={mainStyle}/>
    </>

    )
  } else {
    return <div>loading</div>
  }
}

export default RelatedProducts;