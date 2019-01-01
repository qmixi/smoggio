import React from 'react';
import { renderRoutes } from 'react-router-config';

import './styles.scss';
import Nav from './components/Nav';
import Footer from './components/Footer';

const App = ({ route }) => {
    return (
        <div className="app">
            <div className="app__row">
                <Nav />
                <div className="app__wrapper">
                    <div className="app__routes">
                        {renderRoutes(route.routes)}
                    </div>
                    <Footer />
                </div>
            </div>
        </div>
    )
};

export default {
    component: App,
}