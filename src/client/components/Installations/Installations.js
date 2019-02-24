import React, { memo } from 'react';

import Installation from '../Installation';
import './styles.scss';

const Installations = ({ installations }) => {    
    return (
        <div className="installations">
            {installations.map((installation) => (
                <Installation key={installation.id} installation={installation} />
            ))}

        </div>

    )
}

export default memo(Installations);