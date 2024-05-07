import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.css';
import {AppConnected} from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import store from './store/store';

ReactDOM.render(
  <Provider store={ store }>
    <React.StrictMode>
      <AppConnected var1="value_var_1"/>
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);

reportWebVitals();
