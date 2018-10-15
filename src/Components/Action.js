import React from 'react';

const Action = props => {
  return (
    <div>
      <button onClick={props.handlePick} disabled={!props.hasOptions}>
        What To Do next?
      </button>
    </div>
  );
};

export default Action;
