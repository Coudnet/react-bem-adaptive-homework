import React from 'react';
import Temperature from "../Temperature/Temperature";
import MediaPlayer from "../MediaPlayer/MediaPlayer";
import Button from "../Button/Button";
import Image from "../Image/Image";
import Graph from "../Graph/Graph";

const CardControl = (props) => {
    switch (props.source) {
        case 'Сенсор микроклимата':
            return <div className="card-content-control"><Temperature data={props.data}/></div>;
        case 'Яндекс.Станция':
            return <div className="card-content-control"><MediaPlayer data={props.data}/></div>;
        case 'Холодильник':
            return <div className="card-content-control"><Button data={props.data}/></div>;
        case 'Сенсор движения':
            return <div className="card-content-control"><Image data={props.data}/></div>;
        case 'Сенсоры потребления':
            return <div className="card-content-control"><Graph data={props.data}/></div>;
        default:
            return <div className="card-content-control"></div>
    }
};

export default CardControl;