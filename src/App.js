import React, { Component } from 'react';
import './App.css';
//Components
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <NavBar />
        <ItemListContainer greeting={'Welcome to Minimum60'} />
      </div>
    )
  }
}

export default App;