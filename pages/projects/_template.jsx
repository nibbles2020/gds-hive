import React from 'react';

export default (props) => {
  return (
    <div>
      <div>projects</div>
      <div>{props.children}</div>
    </div>
  );
};
