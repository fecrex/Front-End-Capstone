import React from 'react';
import SizeSelector from './SizeSelector.jsx';
import QuantitySelector from './QuantitySelector.jsx';

class AddToCart extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      styleSelected: undefined,
      styles: undefined,
      sizes: []
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props.styleSelected !== prevProps.styleSelected) {
      var selectedSizes = []

      this.props.styles.results.forEach((result) => {
        if (result.name === this.props.styleSelected) {
          selectedSizes.push(result);
        }
      });

      this.setState({
        styleSelected: this.props.styleSelected,
        styles: this.props.styles,
        sizes: selectedSizes
      })
    }
  }

  render() {
    return (
      <div className='size-quantity'>
        <SizeSelector selected={this.state.styleSelected}
        sizes={this.state.sizes}
        />
        <QuantitySelector selected={this.state.styleSelected}
        sizes={this.state.sizes}
        />
      </div>

    );
  }
}

export default AddToCart;