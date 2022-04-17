import React from "react";
import MyPara from "./MyPara";

const DemoOutput = (props) => {
    console.log("DEMOPUTPUT Running")
    return <MyPara>{props.show ? "This is new!" : ""}</MyPara>;
};
/* 
- React.memo allows us to optimze functional components
- react.memo tells react, for this component, react should look at the props this component gets
  and check the new value of the prop and compare prev value of the prop. Only if value of prop 
  chenge, then only reexecute component

- react.memo comes at a cost
    - whenever App component changes, it should come to this component and compare new vs prev prop value
    - need to store prev prop value and make comparision
    - performance cost

- use memo when u have a big component tree and need to break it up and certain components
*/
export default React.memo(DemoOutput);