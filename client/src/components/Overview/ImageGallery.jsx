import React from 'react';
import axios from 'axios';

class ImageGallery extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loaded: false,
      imageShown: undefined,
      styleSelected: undefined,
      styleSelectedImages: []
    }

    // this.getStyles = this.getStyles.bind(this);
    // this.setSelected = this.setSelected.bind(this);
    this.setShown = this.setShown.bind(this);
    // this.updateImageSet = this.updateImageSet.bind(this);
  }

  componentDidUpdate(prevProps) {
    if (this.props.imageSelected !== prevProps.imageSelected) {
      this.setShown();
    }
  }

  // updateImageSet() {
  //   var imagesForStyle = [];
  //   var styleImages = resp.data.results[0].photos;

  //   for (var i = 0; i < styleImages.length; i++) {
  //     imagesForStyle.push(styleImages[i].thumbnail_url);
  //   }

  //   this.setState({
  //     styleSelectedImages: imagesForStyle
  //   })
  // }


  setShown() {
    this.setState({
      imageShown: this.props.imageSelected,
      styleSelectedImages: this.props.styleImageSet
    })
  }

  // getStyles = async() => {
  //   try {
  //     var resp = await axios.post('http://localhost:3000/styles', {id: this.props.products.id});
  //     this.setState({
  //       styles: resp.data,
  //       loaded: true,
  //       imageSelected: resp.data.results[0].photos[0].thumbnail_url,
  //       styleSelected: resp.data.results[0].name
  //     })
  //   } catch (err) {
  //     console.log('There was an error in your catch block');
  //   }
  // }


  render() {
    return (
      <div className='parent-image-gallery-component'>
        <div className='slide-reel'>
          <img id='product-image' src={this.state.imageShown}/>
        </div>
      </div>
    );
  }
}

export default ImageGallery;