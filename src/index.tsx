import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom'
import {Provider} from 'react-redux';
import {createStore ,applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import reducer from './store/reducer';
import * as serviceWorker from './serviceWorker';

const store = createStore(reducer, applyMiddleware(thunk));
const app = (
  <Provider store ={store}>
    <React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </React.StrictMode>
  </Provider>
)

ReactDOM.render(app,document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
