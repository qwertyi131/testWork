import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import todos from './redusers';

import registerServiceWorker from './registerServiceWorker';

const store = createStore(todos);


ReactDOM.render( <Provider store={store}>
    <App />
</Provider>, document.getElementById('root'));
registerServiceWorker();
