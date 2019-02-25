import React from 'react';

import './styles.scss';

const FavoriteIndicator = ({ setFav, removeFav, isFav = false }) => (
    <div className="favorite-indicator">
        {isFav && <i className="fas fa-heart" onClick={removeFav}></i>}
        {!isFav && <i className="far fa-heart" onClick={setFav}></i>}
    </div>
);

export default FavoriteIndicator;