import React from 'react';
import './Button.scss'

const Button = (props) => {
    return (
        <div className="card-content-control-buttons">
            <button className="button-first">{props.data.buttons[0]}</button>
            <button className="button-second">{props.data.buttons[1]}</button>
        </div>
    );
};

export default Button;