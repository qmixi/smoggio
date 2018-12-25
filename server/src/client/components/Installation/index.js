import React from 'react';
import { Link } from 'react-router-dom';

const Installation = ({ installation: { id, address: { displayAddress1, displayAddress2, number } = {} } }) =>
    (
        <Link to={`/installation/${id}`} className="installation">
            <div className="installation_city">{displayAddress1}</div>
            <div className="installation_address">ul. {displayAddress2} {number}</div>
        </Link>

    )


export default Installation;