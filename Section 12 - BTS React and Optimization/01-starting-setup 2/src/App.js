import React, {useState, useCallback} from 'react';
import Button from './components/UI/Button/Button';
import './App.css';
import DemoOutput from './components/Demo/DemoOutput';

function App() {
  const [showPara, setShowPara] = useState(false);
  const [allowToggle, setAllowToggle] = useState(false);


  console.log("APP RUNNING");

  /*
  useCallBack: 

  let obj1 = {}
  let obj2 = {}
  obj1 != obj2
  obj1 = obj2  // refrence
  obj1 === obj2

  - useCallBack saves a function of our choice in React internal storage and 
  always reuse the same function object again when this component function executes

  */
  /*
  - useCallback() will reuse the same function callback
  - needs an array of dependencies as second arg

  useCallback() Dependencies:
    - in javscript function are closures (close over values that are availiable in the enviornment)
    - 

  */
 /* 
 // React will not recreate this function because of useCallBack()
  const toggleParaHandler = useCallback(() => {
    if(allowToggle){
      setShowPara(prevShowPara => !prevShowPara);
    }
  }, []);
  */

  //now ill recreate function when allowToggle updates
  const toggleParaHandler = useCallback(() => {
    if(allowToggle){
      setShowPara(prevShowPara => !prevShowPara);
    }
  }, [allowToggle]);

  const allowToggleHandler = () => {
    setAllowToggle(true);
  };
  return (
    <div className="app">
      <h1>Hi there!</h1>
      {/* Component functions will get reexectued, look at console */}

      <DemoOutput show={showPara}/>
      <Button onClick={allowToggleHandler}>Allow Toggle</Button>
      <Button onClick={toggleParaHandler}>Show Para</Button>
    </div>
  );
}

export default App;
