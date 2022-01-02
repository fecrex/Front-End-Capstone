import React from 'react';
import ProductInfo from './ProductInfo.jsx';


class Overview extends React.Component {
  constructor(props) {
    super(props);

    this.state = {

    }
  }


  render() {
    return (
      <div>
        <ProductInfo products={this.props.products}/>
      </div>
    );
  }
}

export default Overview;