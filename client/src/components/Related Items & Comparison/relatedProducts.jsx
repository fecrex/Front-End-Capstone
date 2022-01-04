import React, {useState, useEffect} from 'react';
import Card from './card.jsx';
import axios from 'axios';

function RelatedProducts (props) {
  const [test, setTest] = useState([]);
  const [relatedStyles, setRelatedStyles] = useState();


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
    return (<Card relatedinfo={props.relatedinfo} styles={relatedStyles}/>)
  } else {
    return <div>loading</div>
  }
}

export default RelatedProducts;