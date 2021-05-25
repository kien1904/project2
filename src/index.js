import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { store } from './assets/store';
// import Routers from './routers/Router';
import App from './routers/App';


ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
    <App/>
  </React.StrictMode>

  </Provider>
  ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vital