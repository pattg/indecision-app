import React, { Component } from 'react';
import './App.css';
import Header from '../src/Components/Header';
import Action from '../src/Components/Action';
import AddOption from '../src/Components/AddOption';
import Options from '../src/Components/Options';

class App extends Component {
  state = {
    options: this.props.options
  };

  handleDeleteOptions = () => {
    this.setState(() => {
      return {
        options: []
      };
    });
  };

  handlePick = () => {
    const randomNum = Math.floor(Math.random() * this.state.options.length);
    const option = this.state.options[randomNum];
    alert(option);
  };
  handleAddOption = option => {
    if (!option) {
      return 'Enter valid value to add item';
    } else if (this.state.options.indexOf(option) > -1) {
      return 'this option already exists';
    }

    this.setState(prevState => {
      return {
        options: prevState.options.concat(option)
      };
    });
  };

  render() {
    const subtitle = 'What to do next?';

    return (
      <div className="App">
        <Header subtitle={subtitle} />
        <Action
          hasOptions={this.state.options.length > 0}
          handlePick={this.handlePick}
        />
        <Options
          options={this.state.options}
          handleDeleteOptions={this.handleDeleteOptions}
        />
        <AddOption handleAddOption={this.handleAddOption} />
      </div>
    );
  }
}

App.defaultProps = {
  options: []
};

export default App;
