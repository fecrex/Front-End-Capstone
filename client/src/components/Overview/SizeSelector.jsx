import React from 'react';
import QuantitySelector from './QuantitySelector.jsx';


class SizeSelector extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      sizes: [],
      loaded: false,
      sizeSelected: 'Select Size'
    }

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

  handleChange() {
    this.setState({
      sizeSelected: event.target.value
    })
  }

  render() {
    return (

      <div className='size-quantity-container'>
        <select className='size-selector' value={this.state.sizeSelected} onChange={this.handleChange} >
        <option>Select Size</option>



        {this.state.sizes.map((size, index) =>
          <option key={index} value={size}>{size}</option>
        )}

        </select>

      <div className='quantity-selector-container'>
        <QuantitySelector selected={this.props.selected} sizes={this.props.sizes}
        sizeSelected={this.state.sizeSelected}
        />
      </div>

      </div>


    );
  }
}

export default SizeSelector;