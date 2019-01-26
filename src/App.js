import React, { Component } from 'react';
import {BrowserRouter, Route} from 'react-router-dom'

class App extends Component {

  state = {};

  componentDidMount() {
    console.log('program started');
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("program updated");
    console.log(prevProps);
    console.log(prevState);
  }

  render() {
    return (
      <BrowserRouter>
        <div className="container">
          
        </div>
      </BrowserRouter>
    );
  }
}
export default App;
