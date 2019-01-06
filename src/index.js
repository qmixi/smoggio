import 'babel-polyfill';
import express from 'express';
import { matchRoutes } from 'react-router-config';
const cookiesMiddleware = require('universal-cookie-express');


import Routes from './client/Routes'
import renderer from './helpers/render';
import InstallationsState from './client/stores/installationsState';
import StatsState from './client/stores/statsState';

const app = express();
const port = process.env.PORT || 3000;

app.use('/static', express.static('public'));
app.use(cookiesMiddleware());
app.get('*', (req, res) => {
    const installations = new InstallationsState();
    const stats = new StatsState();
    const state = {
        installations,
        stats
    }

    const components = matchRoutes(Routes, req.path);
    const promises = components.map(({ route, match }) => {
        return route.loadData ? route.loadData(state, match.params, req.universalCookies) : null
    })
        .filter(option => !!option)
        .map(option => {
            if (option && option.promise) {
                return new Promise((resolve) => {
                    option.promise.then((data) => { option.callback(data); resolve() }).catch(resolve);
                });
            }
        })

    Promise.all(promises)
        .then(() => {
            const context = {};
            const content = renderer(req, state, context);            
            if (context.notFound) {
                res.status(404);
            }
            res.send(content);
        })
        .catch(console.log)
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
})