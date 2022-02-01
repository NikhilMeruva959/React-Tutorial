import ReactDOM from 'react-dom';

import './index.css';
import App from './App';

ReactDOM.render(<App />, document.getElementById('root'));

/*
- index.js first to render
- ReactDOM is a library in package.json
    - when you export something, ReactDOM imports that here and renders is using ReactDOM.render
- What do this mean: ReactDOM.render(<App />, document.getElementById('root'));  ???
    - goes into index.html in public folder and replaces <div id="root"></div> with App
-Components:
    - they are just javascript functions

-Passing data via props:
    - components cant use other data stored in other components
*/
