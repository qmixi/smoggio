import React from 'react';

import Installation from '../Installation';
import './styles.scss';

const Installations = ({ installations }) => (
    <div className="installations">
        {installations.map(installation => (
            <Installation className="installations__item" key={installation.id} installation={installation} />
        ))}
    </div>
);

export default Installations;