import React, { useEffect } from 'react';

import './styles.scss';

const GeolocationFetcher = ({ fetchInstallations, setLoadingValue }) => {

    useEffect(() => {
        if (navigator.geolocation)
        setLoadingValue(true);
        navigator.geolocation.getCurrentPosition((pos) => {            
            fetchInstallations(pos.coords.latitude, pos.coords.longitude);
        }, () => {
            setLoadingValue(false);
        })
    }, []);

    return <div />
}

export default GeolocationFetcher;