import React from 'react';

class SizeSelector extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      sizes: [],
      loaded: false,
      sizeSelected: 'Select Size'
    }

    this.setSizeSelected = this.setSizeSelected.bind(this);
    this.handleChange = this.handleChange.bind(this);
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

  setSizeSelected(event) {
    this.setState({
      sizeSelected: event.target.value
    })
  }

  handleChange() {

  }

  render() {
    return (


      <select className='size-selector' value={this.state.sizeSelected} onChange={this.handleChange} >
        <option>Select Size</option>



        {this.state.sizes.map((size, index) =>
          <option key={index} onClick={this.setSizeSelected} value={size}>{size}</option>
        )}

      </select>
    );
  }
}

export default SizeSelector;