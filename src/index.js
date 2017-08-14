import React from 'react';
import ReactDOM from 'react-dom';

import * as firebase from './config/firebase';
import App from './container/App';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { Provider } from 'react-redux';
import PrivateRoute from './components/PrivateRoute';
import Home from './components/Home';
import DashBoard from './components/DashBoard';


import { createStore } from 'redux';

import rootReducer from './reducers';

const store = createStore(rootReducer);




ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, 
    document.getElementById('root')
);