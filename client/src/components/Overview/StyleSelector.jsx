import React from 'react';
import axios from 'axios';
import Thumbnail from './Thumbnail.jsx';
import AddToCart from './AddToCart.jsx';
import ImageGallery from './ImageGallery.jsx';


class StyleSelector extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      styles: [],
      loaded: false,
      imageSelected: undefined,
      styleSelected: undefined,
      styleSelectedImages: []
    }

    this.getStyles = this.getStyles.bind(this);
    this.setSelected = this.setSelected.bind(this);
  }

  componentDidUpdate() {
    // update styles state
    if (this.props.products && this.state.styles.length === 0) {
      this.getStyles();
    }
  }

  getStyles = async() => {
    try {
      var resp = await axios.post('http://localhost:3000/styles', { id: this.props.products.id});

      var defaultPhotos = [];
      for (var i = 0; i < resp.data.results[0].photos.length; i++) {
        defaultPhotos.push(resp.data.results[0].photos[i].url);
      }

      this.setState({
        styles: resp.data,
        loaded: true,
        imageSelected: resp.data.results[0].photos[0].thumbnail_url,
        styleSelected: resp.data.results[0].name,
        styleSelectedImages: defaultPhotos
      })
    } catch (err) {
      console.log('There was an error in your catch block');
    }
  }

  setSelected() {
    var imagesForStyle = [];

    var styles = this.state.styles.results

    for (var i = 0; i < styles.length; i++) {
      if (styles[i].name === event.target.alt) {
        for (var j = 0; j < styles[i].photos.length; j++) {
          imagesForStyle.push(styles[i].photos[j].url);
        }
      }
    }

    this.setState({
      imageSelected: event.target.src,
      styleSelected: event.target.alt,
      styleSelectedImages: imagesForStyle
    })
  }

  render() {
    // console.log(this.state.styles.results);
    return (
      <div className='image-gallery-style-selector-container'>

        <div className='image-gallery-container'>
          <ImageGallery products={this.props.products} imageSelected={this.state.imageSelected}
          styleImageSet={this.state.styleSelectedImages}
          />
        </div>

        <div className='style-selector'>
          <h2>Style - {this.state.styleSelected}</h2>
          <div className='thumbnail-container'>
            {this.state.loaded ? this.state.styles.results.map((style, index) => {
              return <Thumbnail key={index} pic={this.state.styles.results[index].photos[0].thumbnail_url}
              setSelected={this.setSelected} imageSelected={this.state.imageSelected}
              name={this.state.styles.results[index].name}
              />
            }) : null}
          </div>
          <AddToCart styles={this.state.styles} imageSelected={this.state.imageSelected}
          styleSelected={this.state.styleSelected}
          />
        </div>
      </div>

    );
  }

}

export default StyleSelector;