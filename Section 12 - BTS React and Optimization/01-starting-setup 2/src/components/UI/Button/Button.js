import React from 'react';

import classes from './Button.module.css';

const Button = (props) => {
  return (
    <button
      type={props.type || 'button'}
      className={`${classes.button} ${props.className}`}
      onClick={props.onClick}
      disabled={props.disabled}
    >
      {props.children}
    </button>
  );
};
/*
-functions are just objects in javascript
  - new function object is created when the App.js runs
  - toggleParaHandler is passed into function object as a prop
  - therefore, button compares props.onClick === props.previous.onClick
      - REMEBER, in javscript [1,2,3] != [1,2,3]
      - even if they have the same content, NEVER the same
      - that is how React.memo knows the values change
*/

export default React.memo(Button);
