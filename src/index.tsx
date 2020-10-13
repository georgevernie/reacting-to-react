import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

const appProps = {
    name: "Hermon",
    city: 'Lynchburg',
    loaded: false,
    hasLoaded: true,
    onChange: "Help I am testing Props!"
  };


ReactDOM.render(
    <div>
    <App 
        name={appProps.name}
        city={appProps.city}
        loaded={appProps.loaded}
        hasLoaded={appProps.hasLoaded}
        onChange={appProps.onChange}
    />
    <App 
        name={appProps.name}
        city={appProps.city}
        loaded={appProps.loaded}
        hasLoaded={appProps.hasLoaded}
        onChange={appProps.onChange}
    />
    </div>,
    document.getElementById("root"));


