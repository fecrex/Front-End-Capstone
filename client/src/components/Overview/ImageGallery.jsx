import React from 'react';
import axios from 'axios';

class ImageGallery extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      styles: [],
      loaded: false,
      imageShown: undefined,
      styleSelected: undefined
    }

    // this.getStyles = this.getStyles.bind(this);
    // this.setSelected = this.setSelected.bind(this);
    this.setShown = this.setShown.bind(this);
  }

  componentDidUpdate(prevProps) {
    if (this.props.imageSelected !== prevProps.imageSelected) {
      this.setShown();
    }
  }

  setShown() {
    this.setState({
      imageShown: this.props.imageSelected
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

  // setSelected() {
  //   this.setState({
  //     imageSelected: event.target.src,
  //     styleSelected: event.target.alt
  //   })
  // }

  render() {
    return (
      <div className='image-gallery-component'>
        <img id='product-image' src={this.state.imageShown}/>
      </div>
    );
  }
}

export default ImageGallery;