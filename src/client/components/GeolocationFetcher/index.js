import React, { useState, useEffect, memo } from 'react';

import './styles.scss';

const GeolocationFetcher = ({ fetchInstallations, setLoadingValue }) => {

    useEffect(() => {        
        setLoadingValue(true);
        navigator.geolocation.getCurrentPosition((pos) => {            
            fetchInstallations(pos.coords.latitude, pos.coords.longitude);
        })
    }, []);

    return <div />
}

export default memo(GeolocationFetcher);