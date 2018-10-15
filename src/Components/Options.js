import React from 'react';
import Option from './Option';

class Options extends React.Component {
  handleRemoveAll() {
    console.log('Remove all');
  }
  render() {
    return (
      <div>
        <button onClick={this.handleRemoveAll}>Remove all</button>
        {this.props.options.map(option => (
          <Option key={option} optionText={option} />
        ))}
      </div>
    );
  }
}

export default Options;
