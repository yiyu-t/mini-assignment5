import React from 'react';
import ReactDOM from 'react-dom';
import App from './component/App';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import combineReducers from './reducer/reducer';

const store = createStore(combineReducers);

ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('root')
)
