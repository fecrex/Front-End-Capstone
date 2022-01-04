import React from 'react';
import ReactDOM from 'react-dom';
import QuestionsAnswers from './components/Questions & Answers/QuestionsAnswersModule.jsx';
import ProductInfo from './components/Overview/ProductInfo.jsx';
import Overview from './components/Overview/Overview.jsx';
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
    axios.get('http://localhost:3000/home')
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
      <h1>FEC - Project Catwalk</h1>
      <Overview products={this.state.products}/>
      <div className="related-container">
        <RelatedProducts relatedinfo={this.state.products}/>
      </div>
      <QuestionsAnswers product={this.state.products[0]}/>
      <ReviewList productId={this.state.products.map((product) => {
      return product.id})}/>
      </>
    );
  }
}

export default App;

ReactDOM.render(<App />, document.getElementById('app'));