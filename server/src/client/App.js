import React from 'react';
import { renderRoutes } from 'react-router-config';
import Nav from './components/Nav';
import './styles.scss';

const App = ({ route }) => {
    return (
        <div className="app">
            <div className="app-row">
                <Nav/>
                <div className="app-wrapper">
                    {renderRoutes(route.routes)}
                </div>
            </div>

        </div>
    )
};

export default {
    component: App,    
}