import React, { useState } from 'react';

const CoordsInput = ({ fetchCoords }) => {
    const [address, setAddress] = useState('');

    return (
        <div>
            <input type="text" value={address} onChange={e => setAddress(e.target.value)} />
            <button onClick={() => fetchCoords(address)}>Select</button>
        </div>
    )
}

export default CoordsInput;