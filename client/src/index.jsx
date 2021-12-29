import React from 'react';
import ReactDOM from 'react-dom';
import QuestionsAnswers from './components/Questions & Answers/QuestionsAnswersModule.jsx';
import ProductInfo from './components/Overview/ProductInfo.jsx';
import Card from './components/Related Items & Comparison/card.jsx';
import ReviewList from './components/Ratings & Reviews/reviewList.jsx';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {

    };
  }

  componentDidMount() {
    axios.get('https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/products/40348/related', {
      headers: {
        Authorization: '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'
      }
    })
    .then(results => {
      this.setState({results: results.data});
    })
    .catch(err => {
      console.log(err);
    })
  }

  render() {
    return (
      <>
      <h1>FEC - Project Catwalk</h1>
      <ProductInfo />
      <div className="related-container">
        <Card relatedinfo={this.state.results}/>
      </div>
      <QuestionsAnswers />
      <ReviewList />
      </>
    );
  }
}

export default App;

ReactDOM.render(<App />, document.getElementById('app'));
