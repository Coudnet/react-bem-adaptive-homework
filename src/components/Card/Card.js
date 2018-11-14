import React from 'react';
import './Card.scss';
import {cn} from '@bem-react/classname';
import CardControl from "../CardControl/CardControl";

const cnCard = cn('Card');

const Card = (props) => {
    return (
        <div className={cnCard({size: props.data.size, type: props.data.type})}>
            <div className={cnCard('OpenIcon')}>

            </div>
            <div className={cnCard('CloseIcon')}>

            </div>

            <div className={cnCard('Body')}>
                <div className={cnCard('Head')}>
                    <div className={cnCard('Info')}>
                        <div className={cnCard('Icon')}>
                            <img src={require(`../../../public/images/icons/${props.data.icon}.svg`)}/>
                        </div>
                        <div className={cnCard('Title')}>{props.data.title}</div>
                    </div>
                    <div className={cnCard('SubTitle')}>
                        <div className={cnCard('Source')}>{props.data.source}</div>
                        <div className={cnCard('Time')}>{props.data.time}</div>
                    </div>
                </div>

                <div className={cnCard('Content')}>
                    <div className={cnCard('Text')}>{props.data.description}</div>
                    <CardControl source={props.data.source} data={props.data.data}/>
                </div>
            </div>
        </div>
    );
};

export default Card;