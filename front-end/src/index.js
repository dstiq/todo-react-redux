import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './containers/App';
import configureStore from './store/configureStore'

const store = configureStore();
let root = document.getElementById('root');

ReactDOM.render(
        <Provider store={store}>
             <App/>
        </Provider>,
    root
);