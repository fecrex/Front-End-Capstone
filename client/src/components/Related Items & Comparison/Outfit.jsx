import React, { useState } from 'react';
import axios from 'axios';
import CloseIcon from '@material-ui/icons/Close';

function Outfit(props) {
  const [outfits, setOutfits] = useState([])

  const clickHandler = () => {
    axios.post('54.172.117.137:3000/details', {
      id: props.item[0].id
    })
    .then(resp => {
      if (outfits.length !== 0) {
        outfits.forEach(item => {
          if (!!item[resp.data.id]) {
            setOutfits(oldarr => [...oldarr, resp.data]);
          } else {
            alert('dont do that');
          }
        })
      } else {
        setOutfits([resp.data]);
      }
    })
    .catch(err => console.log('error in getting outfit: ', err))
  }

  const deleteHandler = (e) => {
    outfits.forEach((item, index) => {
      if (item.id === Number(e)) {
        let newarr = [...outfits];
        newarr.splice(index, 1);
        setOutfits(newarr);
      }
    })
  }

  return (
    <div className="wholeoutfit">
      <div className="outfit-card" onClick={() => clickHandler()}>
        <div className="plus"><p id = "addicon">+</p></div>
        <div className="addfit">Add to Outfit</div>
      </div>
    {outfits.map((item, index) => {
    return (
      <>
        <div className="related-item-card" key={index}>
        <CloseIcon onClick={() => deleteHandler(item.id)} />
        <img className="related-img" src={props.style.results[0].photos[0].thumbnail_url} />
        <div className="product-details">
          <div>{item.category}</div>
          <div>{item.name}</div>
          <div>${item.default_price}</div>
        </div>
        </div>
      </>
    )
  })}
    </div>
  )
}

export default Outfit;