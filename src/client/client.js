import 'babel-polyfill';
import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'mobx-react';
import { renderRoutes } from 'react-router-config';
import { CookiesProvider } from 'react-cookie';

import Routes from './Routes'
import InstallationsState from './stores/installationsState'
import StatsState from './stores/statsState'
import { ModalProvider } from './components/Modal';

const installations = new InstallationsState(window.INITIAL_STATE)
const stats = new StatsState(window.INITIAL_STATE)

const state = {
    installations,
    stats
}

ReactDOM.hydrate(
    <Provider {...state}>
        <CookiesProvider>
            <BrowserRouter>
                <ModalProvider>
                    <div>{renderRoutes(Routes)}</div>
                </ModalProvider>
            </BrowserRouter>
        </CookiesProvider>
    </Provider>,
    document.querySelector('#root')
);