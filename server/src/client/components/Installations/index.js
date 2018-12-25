import React from 'react';

import Installation from '../Installation';
import './styles.scss';

const Nav = ({ installations }) => (
    <div className="installations">
        {installations.map((installation) => (
            <Installation key={installation.id} installation={installation} />
        ))}

    </div>

)

export default Nav;