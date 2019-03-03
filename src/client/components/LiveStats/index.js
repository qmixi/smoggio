import React from 'react';
import _ from 'lodash';
import { getUnit } from '../../utils';

import './styles.scss';

const LiveStats = ({ values = [] }) => {

    return (
        <div className="stats-live">
            <div className="stats-live__title title title--small">Live stats</div>
            <div className="stats-live__list">
                {values.map(({ name, value }) => <div className="stats-live__item" key={name}>
                    <div className="stats-live__item-title">{name}</div>
                    <div className="stats-live__item-value">
                        <span className="stats-live__item-value-tx">{value}</span>
                        <span className="stats-live__item-unit">{getUnit(name)}</span>
                    </div>
                </div>)}
            </div>
        </div>

    )
}


export default LiveStats;