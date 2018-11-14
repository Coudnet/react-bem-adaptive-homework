import React from 'react';
import './Temperature.scss'
import {cn} from '@bem-react/classname';

const cnTemperatureControl = cn('TemperatureControl');

const Temperature = (props) => {
    return (
        <div className={cnTemperatureControl()}>
            <div className={cnTemperatureControl('Temperature')}>Температура <b>{props.data.temperature}&deg;C</b></div>
            <div className={cnTemperatureControl('Humidity')}>Влажность <b>{props.data.humidity}%</b></div>
        </div>
    );
};

export default Temperature;