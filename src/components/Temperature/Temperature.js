import React from 'react';
import './Temperature.scss'

const Temperature = (props) => {
    return (
        <div className="card-content-control-thermal">
            <div className="temprature-value">Температура <b>{props.data.temperature}&deg;C</b></div>
            <div className="humidity-value">Влажность <b>{props.data.humidity}%</b></div>
        </div>
    );
};

export default Temperature;