import React from 'react';
import ReactDOM from 'react-dom';
import ReviewList from './components/Ratings & Reviews/reviewList.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {

    };
  }

  render() {
    return (
      <div>
      <h1>Hello world!</h1>
        <ReviewList/>
      </div>
    );
  }
}

export default App;

ReactDOM.render(<App />, document.getElementById('app'));
