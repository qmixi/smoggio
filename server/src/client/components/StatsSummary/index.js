import React from 'react';
import { Link } from 'react-router-dom';
import cx from 'classnames';

import './styles.scss';

const InstallationHeader = ({ summary: { value, level, description, advice } = {} }) => {
    return (
        <div className={cx('summary', {
            'summary--low': level === 'LOW',
            'summary--medium': level === 'MEDIUM',
            'summary--high': level === 'HIGH'
        })}>
            <div className="summary_value">{value}</div>
            <div className="summary_description">{description} {advice}</div>
        </div>

    )
}


export default InstallationHeader;