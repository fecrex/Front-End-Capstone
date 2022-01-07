import React from 'react';

const ImageSlide = ({ url, thumbnails, changeIndex }) => {
  const styles = {
    backgroundImage: `url(${url})`,
    // backgroundSize: 'cover',
    backgroundPosition: 'center',

  };

  return (
    <div className='product-image-slide' style={styles}>
      <div className='product-image-slide-thumbnail-container'>
        {thumbnails.map((thumbnail, index) => {
          return <img key={index} className='thumbnail-overlay' src={thumbnails[index]} onClick={changeIndex}/>
        })}
      </div>


      {/* <img className='thumbnail-overlay' src={thumbnails[1]}/> */}

    </div>
  );
}

// class ImageSlide extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = {

//     }
//   }

//   const styles = {
//     backgroundImage: `url(${url})`,
//     // backgroundSize: 'cover',
//     backgroundPosition: 'center',

//   };

//   render() {
//     return (
//       <div className='product-image-slide' style={styles}></div>
//     );
//   }
// }

export default ImageSlide;