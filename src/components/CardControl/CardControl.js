import React from 'react';
import Temperature from "../Temperature/Temperature";
import MediaPlayer from "../MediaPlayer/MediaPlayer";
import Button from "../Button/Button";
import Image from "../Image/Image";
import Graph from "../Graph/Graph";
import {cn} from '@bem-react/classname';

const cnControl = cn('Control');

const CardControl = (props) => {
    switch (props.source) {
        case 'Сенсор микроклимата':
            return <div className={cnControl()}><Temperature data={props.data}/></div>;
        case 'Яндекс.Станция':
            return <div className={cnControl()}><MediaPlayer data={props.data}/></div>;
        case 'Холодильник':
            return <div className={cnControl()}><Button buttonContent={props.data.buttons[0]} yellow={true}/><Button buttonContent={props.data.buttons[1]}/></div>;
        case 'Сенсор движения':
            return <div className={cnControl()}><Image data={props.data}/></div>;
        case 'Сенсоры потребления':
            return <div className={cnControl()}><Graph data={props.data}/></div>;
        default:
            return <div className={cnControl()}></div>
    }
};

export default CardControl;