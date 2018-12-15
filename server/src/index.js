import 'babel-polyfill';
import express from 'express';
import { matchRoutes } from 'react-router-config';
import proxy from 'express-http-proxy';

import Routes from './client/Routes'
import renderer from './helpers/render';
import createStore from './helpers/createStore';

const app = express();

app.use(express.static('public'));
app.use('/api', proxy('http://react-ssr-api.herokuapp.com', {
    proxyReqOptRecorator(opts) {
        opts.header['x-forwarded-host'] = 'localhost:3000';
        return opts
    }
}))

app.get('*', (req, res) => {
    const store = createStore(req);

    const promises = matchRoutes(Routes, req.path).map(({ route }) => {
        return route.loadData ? route.loadData(store) : null
    });
    Promise.all(promises).then(() => {
        res.send(renderer(req, store))
    })
});

app.listen(3000, () => {
    console.log('Listening on port 3000');
})