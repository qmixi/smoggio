import React from 'react';
import { Link } from 'react-router-dom';

const Installation = ({ installation: { id, address: { city, street, number } = {} } }) =>
    (
        <Link to={`/installation/${id}`} className="installation">
            <div className="installation_address">
                {city}, ul. {street} {number}
            </div>
            <div className="installation_description"></div>
        </Link>

    )


export default Installation;