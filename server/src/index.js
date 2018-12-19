import 'babel-polyfill';
import express from 'express';
import { matchRoutes } from 'react-router-config';
import proxy from 'express-http-proxy';

import Routes from './client/Routes'
import renderer from './helpers/render';
import createStore from './helpers/createStore';
import AppState from './client/stores/appstate';

const app = express();

app.use('/static', express.static('public'));
app.use('/api', proxy('http://react-ssr-api.herokuapp.com', {
    proxyReqOptDecorator(opts) {
        opts.headers['x-forwarded-host'] = 'localhost:3000';
        return opts
    }
}))

app.get('*', (req, res) => {
    const store = createStore(req);
    // const stores    
    const appstate = new AppState();
    const state = {
        appstate
    }    
    appstate.addItem('bar');
    appstate.addItem('foo');

    const components = matchRoutes(Routes, req.path);    
    const promises = components.map(({ route, match }) => {
        return route.loadData ? route.loadData(state, match.params) : null
    })
        .filter(option => !!option)
        .map(option => {
            if (option && option.promise) {
                return new Promise((resolve) => {
                    option.promise.then((data) => { option.callback(data); resolve() }).catch(() => { console.log('bla'); resolve });
                });
            }
        })        

    Promise.all(promises)
        .then(() => {
            const context = {};
            const content = renderer(req, state, context);
            if (context.url) {
                // handle redirection
                return res.redirect(301, context.url);
            }
            if (context.notFound) {
                res.status(404);
            }
            res.send(content);
        })
        .catch(console.log)
});

app.listen(3000, () => {
    console.log('Listening on port 3000');
})