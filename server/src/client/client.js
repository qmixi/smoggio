import 'babel-polyfill';
import React from 'react'
import ReactDOM from 'react-dom'

import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'mobx-react';
import { renderRoutes } from 'react-router-config';
import axios from 'axios';

import Routes from './Routes'
import AppState from './stores/appstate'

const axiosInstance = axios.create({
    baseURL: '/api'
});


const appstate = new AppState(window.INITIAL_STATE)

ReactDOM.hydrate(
    <Provider appstate={appstate}>
        <BrowserRouter>
            <div>{renderRoutes(Routes)}</div>
        </BrowserRouter>
    </Provider>,
    document.querySelector('#root')
);