import React, { Component } from 'react';
import Carousel from '../components/Carousel'
import NavBar from '../components/NavBar'

class App extends Component {
  render() {
    return (
      <div className="App">
      <NavBar/>
      Restaurant Roulette
      <Carousel/>
      </div>
    );
  }
}

export default App;
