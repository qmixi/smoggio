import React, { useState, useEffect } from 'react';

import './styles.scss';

const CoordsInput = ({ fetchCoords, fetchInstallations  }) => {
    const [address, setAddress] = useState('');

    useEffect(() => {
        console.log('cza, cza')        
        navigator.geolocation.getCurrentPosition((pos) => {
            console.log('pos', pos)
            fetchInstallations(pos.coords.latitude, pos.coords.longitude);            
        })
    }, []);

    return (
        <div className="coords-input">
            <div className="coords-input__title">
                <div className="coords-input__title-tx">Please provide your address</div>
                <div className="coords-input__title-sub">Yeah, it can be your somsiad's one as well 👀</div>
            </div>
            <input type="text" value={address} placeholder="Address, e.g Wojskowa 6, Poznań" onChange={e => setAddress(e.target.value)} />
            <button onClick={() => fetchCoords(address)} disabled={!address}>Select</button>
        </div>
    )
}

export default CoordsInput;