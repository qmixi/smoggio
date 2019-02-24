import React, { useState } from 'react';

import './styles.scss';

const CoordsInput = ({ fetchCoords }) => {
    const [address, setAddress] = useState('');

    const onInputKeyPress = event => {
        if (event.key === 'Enter') {
            fetchCoords(address);
        }
    }

    return (
        <div className="coords-input">
            <div className="coords-input__title">
                <div className="coords-input__title-tx">Please provide your address</div>
                <div className="coords-input__title-sub">Yeah, it can be your somsiad's one as well 👀</div>
            </div>
            <input
                className="coords-input__input"
                type="text"
                value={address}
                placeholder="Address, e.g Wojskowa 6, Poznań"
                onChange={e => setAddress(e.target.value)}
                onKeyPress={e => onInputKeyPress(e)} />
            <button className="coords-input__button" onClick={() => { fetchCoords(address) }} disabled={!address}>Select</button>
        </div>
    )
}

export default CoordsInput;