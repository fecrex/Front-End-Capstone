import React from 'react';
import axios from 'axios';
import Thumbnail from './Thumbnail.jsx';

class StyleSelector extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      styles: [],
      loaded: false,
      imageSelected: undefined
    }

    this.getStyles = this.getStyles.bind(this);
    this.setSelected = this.setSelected.bind(this);
  }

  componentDidMount() {
    // update styles state
    this.getStyles();
  }

  getStyles = async() => {
    try {
      var resp = await axios.get('http://localhost:3000/styles');
      this.setState({
        styles: resp.data,
        loaded: true
      })
    } catch (err) {
      console.log('There was an error in your catch block');
    }
  }

  setSelected() {
    this.setState({
      imageSelected: event.target.src
    })
  }

  render() {
    // console.log(this.state.styles.results);
    return (
      <div className='style-selector'>
        <h2>Style > Selected Style</h2>
        <div className='thumbnail-container'>
          {this.state.loaded ? this.state.styles.results.map((style, index) => {
            return <Thumbnail pic={this.state.styles.results[index].photos[0].thumbnail_url}
            setSelected={this.setSelected} imageSelected={this.state.imageSelected}
            />
          }) : null}
        </div>
      </div>
    );
  }

}

export default StyleSelector;