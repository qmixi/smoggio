import 'babel-polyfill';
import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'mobx-react';
import { renderRoutes } from 'react-router-config';

import Routes from './Routes'
import InstallationsState from './stores/installationsState'
import StatsState from './stores/statsState'

const installations = new InstallationsState(window.INITIAL_STATE)
const stats = new StatsState(window.INITIAL_STATE)

const state = {
    installations,
    stats
}

ReactDOM.hydrate(
    <Provider {...state}>
        <BrowserRouter>
            <div>{renderRoutes(Routes)}</div>
        </BrowserRouter>
    </Provider>,
    document.querySelector('#root')
);