import React from 'react';

class Action extends React.Component {
  handleClick() {}
  render() {
    return (
      <div>
        <button onClick={this.handleClick}>What To Do next?</button>
      </div>
    );
  }
}

export default Action;
