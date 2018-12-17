import 'babel-polyfill';
import express from 'express';
import { matchRoutes } from 'react-router-config';
import proxy from 'express-http-proxy';

import Routes from './client/Routes'
import renderer from './helpers/render';
import createStore from './helpers/createStore';
import AppState from './client/stores/appstate';

const app = express();

app.use(express.static('public'));
app.use('/api', proxy('http://react-ssr-api.herokuapp.com', {
    proxyReqOptDecorator(opts) {
        opts.headers['x-forwarded-host'] = 'localhost:3000';
        return opts
    }
}))

app.get('*', (req, res) => {
    const store = createStore(req);
    const appstate = new AppState();
    appstate.addItem('foo');
    appstate.addItem('bar');
    res.send(renderer(req, appstate, {}))

    // const promises = matchRoutes(Routes, req.path).map(({ route }) => {
    //     return route.loadData ? route.loadData(store) : null
    // }).map(promise => {
    //     if (promise) {
    //         return new Promise((resolve) => {
    //             promise.then(resolve).catch(resolve);
    //         });
    //     }
    // })

    // Promise.all(promises).then(() => {
    //     const context = {};
    //     const content = renderer(req, store, context);
    //     if (context.url) {
    //         // handle redirection
    //         return res.redirect(301, context.url);
    //     }
    //     if (context.notFound) {
    //         res.status(404);
    //     }
    //     res.send(content)
    // })
});

app.listen(3000, () => {
    console.log('Listening on port 3000');
})