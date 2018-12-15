import React from 'react';
import { renderRoutes } from 'react-router-config';
import Header from './components/Header';

const App = ({ route }) => {
    return (
        <div>
            <Header />
            <h1>I'm a header</h1>
            {renderRoutes(route.routes)}
        </div>
    )
};

export default {
    component: App
}