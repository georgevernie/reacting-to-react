import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

let hasLoaded = true;

ReactDOM.render(<App name="James" city="Elks Town" onChange="Hello Joe." hasLoaded={hasLoaded}/>, document.getElementById("root"));


