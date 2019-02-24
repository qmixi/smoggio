import React from 'react';
import _ from 'lodash';

import './styles.scss';

const LiveStats = ({ values = [] }) => {
    const getUnit = (name) => {
        if (['PM10', 'PM25', 'PM1',].includes(name)) {
            return 'µg/m³';
        } else if (['TEMPERATURE'].includes(name)) {
            return '°C';
        } else if (['HUMIDITY'].includes(name)) {
            return '%';
        } else if (['PRESSURE'].includes(name)) {
            return 'hPa';
        }
    }
    return (
        <div className="stats-live">
            <div className="stats-live__title title title--small">Live stats</div>
            <div className="stats-live__list">
                {values.map(({ name, value }) => <div className="stats-live__item" key={name}>
                    <div className="stats-live__item-title">{name}</div>
                    <div className="stats-live__item-value">
                        {value}
                        <span className="stats-live__item-unit">{getUnit(name)}</span>
                    </div>
                </div>)}
            </div>
        </div>

    )
}


export default LiveStats;