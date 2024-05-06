import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import store from './store/store';

ReactDOM.render(
  <Provider store={ store }>
    <React.StrictMode>
      <App var1="value_var_1"/>
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);

reportWebVitals();
