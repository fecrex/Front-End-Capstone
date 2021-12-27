import React from 'react';
import ReactDOM from 'react-dom';
import Card from './components/Related Items & Comparison/card.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {

    };
  }

  render() {
    return (
      <>
      <h1>Hello world!</h1>
      <Card />
      </>
    );
  }
}

export default App;

ReactDOM.render(<App />, document.getElementById('app'));
