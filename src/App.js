import React, { Component } from 'react';
import init from './init';
import './App.css';

class App extends Component {
  componentDidMount = () => {
    console.log(init);
  }
  
  render() {
    const num = Date.now();
    return (
      <div className="App">
        <header className="App-header">
          <img src="https://m.media-amazon.com/images/M/MV5BMTkyOTkwNDc1N15BMl5BanBnXkFtZTgwNzkyMzk3NjM@._V1_.jpg" className="App-logo" alt="logo" />
          <p>Num: <span>{num}</span></p>
          <p>Init: <span>{init(num)}</span></p>
        </header>
      </div>
    );
  }
}

export default App;
