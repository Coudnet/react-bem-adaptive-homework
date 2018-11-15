import React from 'react';
import './Button.scss'
import {cn} from '@bem-react/classname';

const cnButton = cn('Button');

const Button = (props) => {
    return (
        <button className={cnButton({yellow: props.yellow})}>{props.buttonContent}</button>
    )
};

export default Button;