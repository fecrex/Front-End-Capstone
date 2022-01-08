import React from 'react';
import ReactDOM from 'react-dom';
// import loadable from '@loadable/component';

import QuestionsAnswers from './components/Questions & Answers/QuestionsAnswersModule.jsx';
import ProductInfo from './components/Overview/ProductInfo.jsx';

import Overview from './components/Overview/Overview.jsx';
// const Overview = loadable(() => import('./components/Overview/Overview.jsx'));

import Card from './components/Related Items & Comparison/card.jsx';
import ReviewList from './components/Ratings & Reviews/reviewList.jsx';
import RelatedProducts from './components/Related Items & Comparison/relatedProducts.jsx';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      products: []
    };

    this.getProducts = this.getProducts.bind(this);
  }

  componentDidMount() {
    this.getProducts();
  }

  getProducts() {
    axios.get('54.172.117.137:3000/home')
    .then(results => {
      this.setState({
        products: results.data
      })
    })
    .catch(err => {
      console.log('There was an error getting products from the API: ', err);
    })
  }

  render() {
    return (
      <>
      <div className='project-title'>
        <h1>FEC - Project Catwalk</h1>
      </div>

      <Overview products={this.state.products}/>
      <div className="bigrelatedcontainer">
        <RelatedProducts relatedinfo={this.state.products}/>
      </div>
      <QuestionsAnswers product={this.state.products[0]}/>
      <div id="review-modal-root">
      <ReviewList productId={this.state.products.map((product) => {
      return product.id})}/>
      </div>
      </>
    );
  }
}

export default App;

ReactDOM.render(<App />, document.getElementById('app'));