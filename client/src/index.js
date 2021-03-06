import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { applyMiddleware, combineReducers, createStore } from 'redux';
import { Provider } from 'react-redux';
import sessionsReducer from './reducers/sessionsReducer';
import tripsReducer from './reducers/tripsReducer'
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
  sessions: sessionsReducer,
  trips: tripsReducer
})

const store = createStore(rootReducer, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
