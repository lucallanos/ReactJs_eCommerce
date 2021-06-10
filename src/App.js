import React, { Component } from 'react';
import './App.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
//Components
import NavBar from './components/NavBar/NavBar';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <NavBar />
        <ItemListContainer greeting="Welcome to Minimum60" />
      </div>
    )
  }
}

export default App;