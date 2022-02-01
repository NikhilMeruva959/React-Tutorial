import React from "react";
// CSS Modules:
// - will take those css classes in css file and changes the className to be unique
import styles from './Button.module.css';

// import styled from "styled-components";
// import './Button.css';

// Called tag template literal: javascript feature that is a method of styled component
// Instead of styled.button() -> style.button``
// const Button = styled.button`
//   font: inherit;
//   padding: 0.5rem 1.5rem;
//   border: 1px solid #8b005d;
//   color: white;
//   background: #8b005d;
//   box-shadow: 0 0 4px rgba(0, 0, 0, 0.26);
//   cursor: pointer;
//   width:100%;

//   @media (min-width: 768px){
//     width: auto;
//   }

//   /* & will tell when button.focus */  
//   &:focus {
//     outline: none;
//   }

//   &:hover,
//   &:active {
//     background: #ac0e77;
//     border-color: #ac0e77;
//     box-shadow: 0 0 8px rgba(0, 0, 0, 0.26);
//   }
// `;

// Essentially made Button for styling which is type of practice
const Button = props => {
  return (
    <button type={props.type} className={styles.button} onClick={props.onClick}>
      {props.children}
    </button>
  );
};

export default Button;
