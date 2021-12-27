import React from 'react';
import ReactDOM from 'react-dom';
import QuestionsAnswers from './components/Questions & Answers/index.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {

    };
  }

  render() {
    return (
      // <h1>Hello world!</h1>
      <QuestionsAnswers />
    );
  }
}

export default App;

ReactDOM.render(<App />, document.getElementById('app'));
