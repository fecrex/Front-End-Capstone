import React from 'react';
import axios from 'axios';
import ImageSlide from './ImageSlide.jsx';
// import Arrow from './Arrow.jsx';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';


class ImageGallery extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loaded: false,
      imageShown: undefined,
      styleSelected: undefined,
      styleSelectedImages: [],
      currentImageIndex: 0
    }

    // this.getStyles = this.getStyles.bind(this);
    // this.setSelected = this.setSelected.bind(this);
    this.setShown = this.setShown.bind(this);
    this.nextSlide = this.nextSlide.bind(this);
    this.previousSlide = this.previousSlide.bind(this);
    this.changeIndex = this.changeIndex.bind(this);
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

  previousSlide() {
    var lastIndex = this.state.styleSelectedImages.length - 1;
    var { currentImageIndex } = this.state;
    var shouldResetIndex = currentImageIndex === 0;
    var index = shouldResetIndex ? lastIndex : currentImageIndex - 1;

    this.setState({
      currentImageIndex: index
    });
  }

  nextSlide() {
    var lastIndex = this.state.styleSelectedImages.length - 1;
    var { currentImageIndex } = this.state;
    var shouldResetIndex = currentImageIndex === lastIndex;
    var index = shouldResetIndex ? 0 : currentImageIndex + 1;

    this.setState({
      currentImageIndex: index
    });
  }

  changeIndex() {
    // console.log(event.target)
    var index = this.state.styleSelectedImages.indexOf(event.target.src);
    // console.log(index);
    this.setState({
      currentImageIndex: index
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
        {/* <div className='slide-reel'>
          <img id='product-image' src={this.state.imageShown}/>
        </div> */}



        <ImageSlide url={ this.state.styleSelectedImages[this.state.currentImageIndex] }
        thumbnails={this.state.styleSelectedImages} changeIndex={this.changeIndex}
        />

        {/* <Arrow
          direction='left'
          clickFunction={ this.previousSlide }
          glyph='&#9664;' />

        <Arrow
          direction='right'
          clickFunction={ this.nextSlide }
          glyph='&#9654;' /> */}
        <div className='image-arrows'>
          <ChevronLeftIcon onClick={this.previousSlide}/>
          <ChevronRightIcon onClick={this.nextSlide}/>
        </div>
      </div>
    );
  }
}

export default ImageGallery;