import React from 'react';

class Counter extends React.Component {
  state = {
    count: 0
  };

  handleAddOne = () => {
    this.setState(prevState => {
      return {
        count: prevState.count + 1
      };
    });
  };
  handleMinusOne = () => {
    this.setState(prevState => {
      if (prevState.count !== 0) {
        return {
          count: prevState.count - 1
        };
      } else {
        alert('at least at one');
      }
    });
  };
  handleReset = () => {
    this.setState(() => {
      return {
        count: 0
      };
    });
  };

  render() {
    return (
      <div>
        <h1>Count: {this.state.count}</h1>
        <button onClick={this.handleAddOne}>+1</button>
        <button onClick={this.handleMinusOne}>-1</button>
        <button onClick={this.handleReset}>reset</button>
      </div>
    );
  }
}

export default Counter;
