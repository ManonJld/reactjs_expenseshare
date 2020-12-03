import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from "react-router-dom";
import {applyMiddleware, createStore} from "redux";
import thunk from "redux-thunk";
import { Provider } from 'react-redux';
import { composeWithDevTools} from "redux-devtools-extension";
import reducer from "./reducers/reducer";
import {fetchEvent, fetchExpenses, fetchNewEvent} from "./action/action";

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));
store.dispatch(fetchEvent);
store.dispatch(fetchExpenses);
store.dispatch(fetchNewEvent);

ReactDOM.render(
  <React.StrictMode>
      <Provider store={store}>
          <BrowserRouter>
              <App />
          </BrowserRouter>
      </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
