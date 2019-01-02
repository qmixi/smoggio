import React, { memo } from 'react';
import { withCookies } from 'react-cookie';

import './styles.scss';

const FavoriteIndicator = ({ cookies, installation }) => {

    const setFav = () => {
        const favoriteInstallations = cookies.get('favInstallations') || [];
        const items = [...favoriteInstallations, installation];
        cookies.set('favInstallations', items, { path: '/' })
    }

    const removeFav = () => {
        const favoriteInstallations = cookies.get('favInstallations');
        if (favoriteInstallations) {
            const items = favoriteInstallations.filter(item => item !== installation);
            cookies.set('favInstallations', items, { path: '/' })
        }
    }

    const favs = cookies.get('favInstallations');
    const isFav = favs && favs.includes(installation);

    return (
        <div className="favorite-indicator">
            {isFav && <i className="fas fa-heart" onClick={removeFav}></i>}
            {!isFav && <i className="far fa-heart" onClick={setFav}></i>}
        </div>
    )
}

export default memo(withCookies(FavoriteIndicator));