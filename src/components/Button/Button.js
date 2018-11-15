import React from 'react';
import './Button.scss'
import {cn} from '@bem-react/classname';

const cnButton = cn('Button')();

const Button = (props) => {
    return (
        <button className={props.className || cnButton}>{props.buttonContent}</button>
    )
};

export {Button, cnButton};