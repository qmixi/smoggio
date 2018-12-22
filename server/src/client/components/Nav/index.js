import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => (
    <div className="nav">
        <Link to="/" className="nav-item">
            <div className="nav-item__icon">
                <i class="fas fa-igloo"></i>
            </div>
            <div className="nav-item__title">Home</div>
        </Link>

    </div>

)

export default Nav;