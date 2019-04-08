import React, { Component } from 'react';
import CardsPage from "./containers/CardsPage.js";
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Cards</h1>
          <CardsPage/>
        </header>
      </div>
    );
  }
}

export default App;
