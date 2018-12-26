import App from './App';
import HomePage from './pages/HomePage';
import InstallationPage from './pages/InstallationPage';
import NotFoundPage from './pages/NotFoundPage';
import FavoritesPage from './pages/FavoritesPage';

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
                ...FavoritesPage,
                path: '/favourites',
                exact: true
            },
            {
                ...NotFoundPage
            }
        ]
    }
]