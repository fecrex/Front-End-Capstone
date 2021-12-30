import React from 'react';

function Thumbnail(props) {
  return (
    <div className='thumbnail'>
      <img className='thumbnail-pic' src={props.pic} />
    </div>
  );
};

export default Thumbnail;