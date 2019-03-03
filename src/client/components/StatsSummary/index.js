import React from 'react';
import cx from 'classnames';

import './styles.scss';

const StatsSummary = ({ summary: { value, level, description } = {} }) => (
    <div className={cx('summary', {
        'summary--low': ['LOW', 'VERY_LOW'].includes(level),
        'summary--medium': level === 'MEDIUM',
        'summary--high': level === 'HIGH'
    })}>
        <div className="summary__value">{parseInt(value, 10)}</div>
        <div className="summary__description">{description}</div>
    </div>
);

export default StatsSummary;