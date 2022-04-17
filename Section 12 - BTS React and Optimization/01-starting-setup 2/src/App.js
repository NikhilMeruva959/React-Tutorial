import React, {useState} from 'react';
import Button from './components/UI/Button/Button';
import './App.css';
import DemoOutput from './components/Demo/DemoOutput';

function App() {
  const [showPara, setShowPara] = useState(false);

  console.log("APP RUNNING");

  const toggleParaHandler = () => {
    setShowPara(prevShowPara => !prevShowPara);
  }
  return (
    <div className="app">
      <h1>Hi there!</h1>
      {/* Component functions will get reexectued, look at console */}

      <DemoOutput show={false}/>
      <Button onClick={toggleParaHandler}>Show Para</Button>
    </div>
  );
}

export default App;