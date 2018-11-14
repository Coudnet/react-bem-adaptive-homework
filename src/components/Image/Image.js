import React from 'react';
import './Image.scss'
import image1x from './Img1x.png';
import image2x from './Img2x.png';
import image3x from './Img3x.png';
import {cn} from '@bem-react/classname';

const cnImageControl = cn('ImageControl');


const Image = (props) => {
    return (
        <div className={cnImageControl()}>
            <img src={image1x} alt="Пылесос застряяяял" />
        </div>
    );
};

export default Image;