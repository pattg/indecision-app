import React, { Component } from 'react';
import './App.css';
import Header from '../src/Components/Header';
import Action from '../src/Components/Action';
import AddOption from '../src/Components/AddOption';
import Options from '../src/Components/Options';

class App extends Component {
  render() {
    const title = 'Indecision App';
    const subtitle = 'What to do next';
    const options = ['one', 'two', 'three'];

    return (
      <div className="App">
        <Header title={title} subtitle={subtitle} />
        <Action />
        <Options options={options} />
        <AddOption />
      </div>
    );
  }
}

export default App;
