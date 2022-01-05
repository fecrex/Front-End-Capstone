import React from 'react';

class QuantitySelector extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      sizeSelected: undefined,
      loaded: false
    }
  }

  componentDidUpdate(prevProps) {

  }

  render() {
    return (
      <select className='quantity-selector'>


      </select>
    );
  }
}

export default QuantitySelector;