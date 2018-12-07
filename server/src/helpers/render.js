import React from 'react';

import { Provider } from 'react-redux';
import { renderToString } from 'react-dom/server';
import {renderRoutes} from 'react-router-config';
import { StaticRouter } from 'react-router-dom';

import Routes from '../client/Routes';


export default (req, store) => {
    const content = renderToString(
        <Provider store={store}>
            <StaticRouter context={{}} location={req.url}>
                <div>{renderRoutes(Routes)}</div>
            </StaticRouter>
        </Provider>
    );

    return `
        <html>
            <head></head>
            <body>
                <div id="root">${content}</div>
            </body>
            <script src="bundle.js"></script>
        </html>
    `;
}