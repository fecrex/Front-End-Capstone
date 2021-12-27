import React from 'react';
import ReactDOM from 'react-dom';
<<<<<<< HEAD
import ProductInfo from './Overview/ProductInfo.jsx';
=======
import Card from './components/Related Items & Comparison/card.jsx';
>>>>>>> 686d87cada5334fa07913ce66fa144d501207167

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
<<<<<<< HEAD
      <ProductInfo />
=======
      <Card />
      </>
>>>>>>> 686d87cada5334fa07913ce66fa144d501207167
    );
  }
}

export default App;

ReactDOM.render(<App />, document.getElementById('app'));
