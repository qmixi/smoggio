import App from './App';
import HomePage from './pages/HomePage';
import InstallationPage from './pages/InstallationPage';
import NotFoundPage from './pages/NotFoundPage';

export default [
    {
        ...App,
        routes: [
            {
                ...HomePage,
                path: '/',
                exact: true
            },
            {
                ...InstallationPage,
                path: '/installation/:id',
            },
            {
                ...NotFoundPage
            }
        ]
    }
]