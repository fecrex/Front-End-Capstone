import React from 'react';
import ReactDOM from 'react-dom';
import QuestionsAnswers from './components/Questions & Answers/QuestionsAnswersModule.jsx';
import ProductInfo from './components/Overview/ProductInfo.jsx';
import Card from './components/Related Items & Comparison/card.jsx';
import ReviewList from './components/Ratings & Reviews/reviewList.jsx';
import Modal from './components/Related Items & Comparison/cardModal.jsx';
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
      <ProductInfo products={this.state.products}/>
      <div className="related-container">
        <Card relatedinfo={this.state.products}/>
      </div>
      <ReviewList relatedinfo={this.state.results}/>
      <QuestionsAnswers />
      <ReviewList />
      <Modal />
      </>
    );
  }
}

export default App;

ReactDOM.render(<App />, document.getElementById('app'));
