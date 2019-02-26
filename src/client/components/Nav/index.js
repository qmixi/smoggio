import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => (
    <div className="nav">
        <div className="nav-logo">Smoggio</div>
        <Link to="/" className="nav-item">
            <div className="nav-item__icon">
                <i className="fas fa-home"></i>
            </div>
            <div className="nav-item__title">Home</div>
        </Link>
        <Link to="/favourites" className="nav-item">
            <div className="nav-item__icon">
                <i className="fas fa-heart"></i>
            </div>
            <div className="nav-item__title">Favorites</div>
        </Link>

    </div>
);

export default Nav;