import 'babel-polyfill';
import React from 'react'
import ReactDOM from 'react-dom'

import { BrowserRouter } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'mobx-react';
import { renderRoutes } from 'react-router-config';
import axios from 'axios';

import Routes from './Routes'
import AppState from './stores/appstate'
import reducers from './reducers';

const axiosInstance = axios.create({
    baseURL: '/api'
});


// const store = createStore(reducers, window.INITIAL_STATE, applyMiddleware(thunk.withExtraArgument(axiosInstance)));
const appstate = new AppState(window.INITIAL_STATE)

ReactDOM.hydrate(
    <Provider appstate={appstate}>
        <BrowserRouter>
            <div>{renderRoutes(Routes)}</div>
        </BrowserRouter>
    </Provider>,
    document.querySelector('#root')
);