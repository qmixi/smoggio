import React, { useState } from 'react';
import { withCookies, Cookies } from 'react-cookie';

import './styles.scss';

const FavoriteIndicator = ({ cookies, installation }) => {    

    const setFav = () => {
        const favoriteInstallations = cookies.get('favoriteInstallations');
        if (favoriteInstallations) {
            const items = [...favoriteInstallations, installation];
            cookies.set('favoriteInstallations', items)
        }
    }

    const removeFav = () => {
        const favoriteInstallations = cookies.get('favoriteInstallations');
        if (favoriteInstallations) {
            const items = favoriteInstallations.filter(item => item !== installation);
            cookies.set('favoriteInstallations', items)
        }
    }

    const favs = cookies.get('favoriteInstallations');
    const isFav = favs && favs.includes(installation);

    return (
        <div className="favorite-indicator">
            {isFav && <i className="fas fa-heart" onClick={removeFav}></i>}
            {!isFav && <i className="far fa-heart" onClick={setFav}></i>}
        </div>
    )
}

export default withCookies(FavoriteIndicator);