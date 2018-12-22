import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
    <div className="header">
        <Link to="/" className="header-logo">SMOGGIO</Link>
    </div>
)

export default Header;