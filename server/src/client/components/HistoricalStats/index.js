import React, { useState } from 'react';
import { Line, Bar } from 'react-chartjs-2';
import _ from 'lodash';
import moment from 'moment';


import './styles.scss';

const HistoricalStats = ({ history = [], forecast = [] }) => {
    const [type, setType] = useState('history');

    const isHistory = type === 'history';
    const values = isHistory ? history : forecast;
    const title = isHistory ? 'Historical' : 'Forecast';
    const labels = values.map(item => moment(item.fromDateTime).format('DD MMM HH:mm'));
    const dataValues = values.map(item => item.indexes[0].value);
    const temperatureValues = values.map(item => {
        const temperatureData = item.values.find(value => value.name === 'TEMPERATURE')
        return temperatureData ? temperatureData.value : false
    });

    
    const data = {
        labels,
        datasets: [
            {
                fill: false,
                lineTension: 0.1,
                backgroundColor: 'rgba(104, 86, 229, 0.4)',
                borderColor: 'rgba(104, 86, 229)',
                borderCapStyle: 'butt',
                borderDash: [],
                borderDashOffset: 0.0,
                borderJoinStyle: 'miter',
                pointBorderColor: 'rgba(104, 86, 229)',
                pointBackgroundColor: '#fff',
                pointBorderWidth: 1,
                pointHoverRadius: 5,
                pointHoverBackgroundColor: 'rgba(104, 86, 229)',
                pointHoverBorderColor: 'rgba(220,220,220,1)',
                pointHoverBorderWidth: 2,
                pointRadius: 1,
                pointHitRadius: 10,
                data: dataValues,
            }
        ]
    };
    const legend = {
        display: false
    };

    const temperatureData = {
        labels,
        datasets: [
            {
                backgroundColor: 'rgba(104, 138, 221,0.8)',
                borderColor: 'rgba(104, 138, 221,1)',
                borderWidth: 1,
                hoverBackgroundColor: 'rgba(104, 138, 221,0.9)',
                hoverBorderColor: 'rgba(104, 138, 221,1)',
                data: temperatureValues
            }
        ]
    };
    
    return (
        <div className="history">
            <div className="history__row">
                <div className="title history__title title title--small">{title} stats</div>
                {isHistory && <div className="" onClick={() => setType('forecast')}>Forecast</div>}
                {!isHistory && <div className="" onClick={() => setType('history')}>History</div>}
            </div>

            <div className="subtitle history__title title title--small">AIRLY CAQI</div>
            <div className="history__chart">
                <Line data={data} legend={legend} />
            </div>
            {temperatureValues[0] && <div className="history__temperature">
                <div className="subtitle history__title title title--small history__temperature-title">Temperature</div>
                <div className="history__chart">
                    <Bar
                        data={temperatureData}
                        legend={legend}
                        options={{
                            maintainAspectRatio: false
                        }}
                    />
                </div>
            </div>}
        </div>

    )
}


export default HistoricalStats;