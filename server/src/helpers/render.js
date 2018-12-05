import React from 'react';
import { Provider } from 'react-redux';
import { renderToString } from 'react-dom/server';
import Routes from '../client/Routes';
import { StaticRouter } from 'react-router-dom'

export default (req, store) => {
    const content = renderToString(
        <Provider store={store}>
            <StaticRouter context={{}} location={req.url}>
                <Routes />
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