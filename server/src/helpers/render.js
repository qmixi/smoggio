import React from 'react';
import { Provider } from 'mobx-react';
import { renderToString } from 'react-dom/server';
import { renderRoutes } from 'react-router-config';
import { StaticRouter } from 'react-router-dom';
import serialize from "serialize-javascript";
import { Helmet } from 'react-helmet'
import { CookiesProvider } from 'react-cookie';

import Routes from '../client/Routes';


export default (req, state, context) => {
    const content = renderToString(
        <Provider {...state}>
            <CookiesProvider cookies={req.universalCookies}>
                <StaticRouter context={context} location={req.url}>
                    <div>{renderRoutes(Routes)}</div>
                </StaticRouter>
            </CookiesProvider>
        </Provider>
    );

    const helmet = Helmet.renderStatic()
    const initialState = {
        installations: state.installations.toJson(),
        stats: state.stats.toJson(),
    }
    return `
        <html>
            <head>
                ${helmet.title.toString()}
                ${helmet.meta.toString()}
                <link rel="stylesheet" href="/static/styles.css">
                <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.6.3/css/all.css" integrity="sha384-UHRtZLI+pbxtHCWp1t77Bi1L4ZtiqrqD80Kn4Z8NTSRyMA2Fd33n5dQ8lWUE00s/" crossorigin="anonymous">
                <link href="https://fonts.googleapis.com/css?family=Lato:300,400|Montserrat:600" rel="stylesheet">
            </head>
            <body>
                <div id="root">${content}</div>
            </body>
            <script>
                window.INITIAL_STATE = ${ serialize(initialState)};
            </script>
            <script src="/static/bundle.js"></script>
        </html>
    `;
}