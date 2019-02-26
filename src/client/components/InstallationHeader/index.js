import React from 'react';
import _ from 'lodash';

const InstallationHeader = (props) => {
    const city = _.get(props, 'installation.address.city', '');
    const street = _.get(props, 'installation.address.street', '');
    const number = _.get(props, 'installation.address.number', '');
    const description = _.get(props, 'installation.sponsor.description', '');
    const name = _.get(props, 'installation.sponsor.name', '');

    return (
        <div className="installation-header">
            <div className="installation-header__title">{city}, {street} {number}</div>
            <div className="installation-header__subtitle">
                {!!description && <span>{description}:</span>} {name}
            </div>
        </div>
    );
}

export default InstallationHeader;