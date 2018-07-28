import React, { Component } from 'react';
import './App.css';

import WeatherContainer from './Components/WeatherContainer/WeatherContainer';

class App extends Component {
  render() {
    return (
      <div className="app">
        <WeatherContainer />
      </div>
    );
  }
}

export default App;
