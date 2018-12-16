import React from 'react';

import { Provider } from 'react-redux';
import { renderToString } from 'react-dom/server';
import { renderRoutes } from 'react-router-config';
import { StaticRouter } from 'react-router-dom';
import serialize from "serialize-javascript";
import { Helmet } from 'react-helmet'

import Routes from '../client/Routes';


export default (req, store, context) => {
    const content = renderToString(
        <Provider store={store}>
            <StaticRouter context={context} location={req.url}>
                <div>{renderRoutes(Routes)}</div>
            </StaticRouter>
        </Provider>
    );

    const helmet = Helmet.renderStatic()

    return `
        <html>
            <head>
                ${helmet.title.toString()}
                ${helmet.meta.toString()}
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css">
            </head>
            <body>
                <div id="root">${content}</div>
            </body>
            <script>
                window.INITIAL_STATE = ${serialize(store.getState())} 
            </script>
            <script src="bundle.js"></script>
        </html>
    `;
}