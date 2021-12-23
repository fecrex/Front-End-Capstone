import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {

    };
  }

  render() {
    return (
      <h1>Hello world!</h1>
    );
  }
}

export default App;

ReactDOM.render(<App />, document.getElementById('app'));
