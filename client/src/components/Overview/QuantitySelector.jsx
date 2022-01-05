import React from 'react';

class QuantitySelector extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      quantitySelected: undefined,
      sizeSelected: undefined,
    }

    this.buildOptionsGreater = this.buildOptionsGreater.bind(this);
    this.buildOptionsLess = this.buildOptionsLess.bind(this);
  }

  componentDidUpdate(prevProps) {
    if (this.props.sizeSelected !== prevProps.sizeSelected) {
      var skus = this.props.sizes[0].skus;
      var quantity;

      for (var key in skus) {
        if (skus[key].size === this.props.sizeSelected) {
          quantity = skus[key].quantity;
        }
      }

      this.setState({
        sizeSelected: this.props.sizeSelected,
        quantitySelected: quantity
      })
    }
  }

  buildOptionsGreater() {
    var options = [];

    for (var i = 1; i <= 15; i++) {
      options.push(<option key={i} value='{i}'>{i}</option>)
    }

    return options;
  }

  buildOptionsLess() {
    var options = [];

    for (var i = 1; i <= this.state.quantitySelected; i++) {
      options.push(<option key={i} value='{i}'>{i}</option>)
    }

    return options;
  }

  render() {
    return (
      <select className='quantity-selector'>

        {this.state.quantitySelected >= 15 ? this.buildOptionsGreater() : this.buildOptionsLess() }

      </select>
    );
  }
}

export default QuantitySelector;