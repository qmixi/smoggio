import React from 'react';
import { Link } from 'react-router-dom';

import './styles.scss';

const Installation = ({ installation: { id, address: { city, street, number } = {} } }) =>
    (
        <Link to={`/installation/${id}`} className="installation">
            <div className="installation__city">{city}</div>
            <div className="installation__address">
                <i className="fas fa-map-marker-alt"></i> {street} {number}
            </div>
        </Link>

    )


export default Installation;