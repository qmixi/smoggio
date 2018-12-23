import React from 'react';

import Installation from '../Installation';

const Nav = ({ installations }) => (
    <div className="installations">
        {installations.map((installation) => (
            <Installation key={installation.id} installation={installation} />
        ))}

    </div>

)

export default Nav;