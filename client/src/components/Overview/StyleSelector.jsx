import React from 'react';
import axios from 'axios';

class StyleSelector extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      styles: []
    }

    this.getStyles = this.getStyles.bind(this);
  }

  componentDidMount() {
    // update styles state
    this.getStyles();
  }

  getStyles() {
    axios.get('http://localhost:3000/styles')
    .then(results => {
      this.setState({
        styles: results.data
      })
    })
    .catch(err => {
      console.log('There was an error loading the styles: ', err);
    })
  }

  render() {
    return (
      <div className='style-selector'>
        <h2>Placeholder for Style Selector</h2>
      </div>
    );
  }

}

export default StyleSelector;