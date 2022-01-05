import React from 'react';

class QuantitySelector extends React.Component {
  constructor(props) {
    super(props);

    this.state = {

      loaded: false
    }
  }

  componentDidUpdate(prevProps) {

  }

  render() {
    return (
      <select className='quantity-selector'>
        <option>One Quantity Option</option>
        <option>Two Quantity Option</option>
        <option>Three Quantity Option</option>
      </select>
    );
  }
}

export default QuantitySelector;