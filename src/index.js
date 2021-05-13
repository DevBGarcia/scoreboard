import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from './components/Context'; //Node will look for index.js file and find Provider 
import App from './components/App';
import './index.css';

/**
 *  We're using Create React App instead of CDN links. 
 *  This is better than using BABEL directly with JSX, because babel is larg!
 *  This will use compiling as part of the build process to avoid overhead
 * 
 * npx create-react-app scoreboard
 * cd scoreboard
 * npm start
 * 
*/ 

/**
 * indjex.js is the entry file to the application
 */

ReactDOM.render(
  <Provider>  
    <App /> 
  </Provider>,
  document.getElementById('root')
);
