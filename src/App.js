import React, { Component } from 'react';
import './App.css';
//Components
import NavBar from './components/NavBar/NavBar';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <NavBar />
      </div>
    )
  }
}

export default App;