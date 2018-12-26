import React from 'react';
import { Link } from 'react-router-dom';

import './styles.scss';

const InstallationHeader = (
    { installation: { address: { city, street, number } = {}, sponsor: { description, name } } = {} }
) =>
    (
        <div>
            <div className="title">{city}, {street} {number}</div>
            <div className="subtitle">
                {!!description && <span>{description}:</span>} {name}
            </div>
        </div>

    )


export default InstallationHeader;