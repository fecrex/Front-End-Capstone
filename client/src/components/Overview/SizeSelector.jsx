import React from 'react';

class SizeSelector extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      sizes: [],
      loaded: false
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props.selected !== prevProps.selected) {
      var selectedSizes = [];
      var selection = this.props.sizes[0];

      for (var key in selection.skus) {
        if (selection.skus[key].quantity !== 0) {
          selectedSizes.push(selection.skus[key].size)
        }
      }

      this.setState({
        sizes: selectedSizes,
        loaded: true
      })
    }
  }

  render() {
    return (


      <select className='size-selector'>
        <option>Select Size</option>



        {this.state.sizes.map((size, index) =>
          <option key={index} value={size}>{size}</option>
        )}

      </select>
    );
  }
}

export default SizeSelector;