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
      this.setState({
        sizes: this.props.sizes,
        loaded: true
      })
    }
  }

  render() {
    return (


      <select className='size-selector'>
        <option>Select Size</option>



        {/* {this.state.loaded ? Object.keys(this.state.sizes.skus).forEach((key) => {
          var sku = this.state.sizes.skus[key]
          var size = sku.size;
          return <option>{size}</option>
        }) : <option></option>} */}

      </select>
    );
  }
}

export default SizeSelector;