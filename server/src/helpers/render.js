import React from 'react';
import { renderToString } from 'react-dom/server';
import Routes from '../client/Routes';
import { StaticRouter } from 'react-router-dom'

export default () => {
    const content = renderToString(
        <StaticRouter context={{}}>
            <Routes />
        </StaticRouter>
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