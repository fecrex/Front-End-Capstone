import React, {useState, useEffect, useRef} from 'react';
import Card from './card.jsx';
import axios from 'axios';
import Outfit from './Outfit.jsx';
import Larrow from '@material-ui/icons/ChevronLeft';
import Rarrow from '@material-ui/icons/ChevronRight';

function RelatedProducts (props) {
  const [test, setTest] = useState([]);
  const [mainStyle, setMainStyle] = useState();
  const [relatedStyles, setRelatedStyles] = useState();
  const carousel = useRef(null);
  const [initUpperCards, setInitUpperCards] = useState(3);
  const [initCards, setInitCards] = useState(0);

  useEffect(() => {
    if (props.relatedinfo[0]) {
      axios.post('54.172.117.137:3000/related', {
        id: props.relatedinfo[0].id
      })
      .then(relprod => {
        setTest(relprod.data);
      })
      .catch(err => {
        console.log('error getting related list: ', err);
      })

      axios.post('54.172.117.137:3000/styles', {
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
        return axios.post('54.172.117.137:3000/styles', {
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

      {initCards === 0 ? null : <Larrow onClick={()=> {carousel.current.left(); setInitCards(initCards - 1); setInitUpperCards(initUpperCards - 1)}} />}

      <Card ref={carousel} relatedinfo={props.relatedinfo} styles={relatedStyles}/>

      {initUpperCards === test.length ? null : <Rarrow onClick={()=> {carousel.current.right(); setInitCards(initCards + 1); setInitUpperCards(initUpperCards + 1)}} />}

    </div>

      <div className="outfit-container">
    <Outfit item={props.relatedinfo} style={mainStyle}/>
      </div>

    </>

    )
  } else {
    return <div>loading</div>
  }
}

export default RelatedProducts;