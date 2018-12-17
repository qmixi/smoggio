import React from 'react';

// import { Provider } from 'react-redux';
import { Provider } from 'mobx-react';
import { renderToString } from 'react-dom/server';
import { renderRoutes } from 'react-router-config';
import { StaticRouter } from 'react-router-dom';
import serialize from "serialize-javascript";
import { Helmet } from 'react-helmet'

import Routes from '../client/Routes';


export default (req, appstate, context) => {
    const content = renderToString(
        <Provider appstate={appstate}>
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
                window.INITIAL_STATE = ${ JSON.stringify({ appstate: appstate.toJson() })};
            </script>
            <script src="bundle.js"></script>
        </html>
    `;
}