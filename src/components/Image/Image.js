import React from 'react';
import './Image.scss'
import image1x from './Img1x.png';
import image2x from './Img2x.png';
import image3x from './Img3x.png';

const Image = (props) => {
    return (
        <div className="card-content-control-image">
            <img src={image1x} alt="Пылесос застряяяял" />
        </div>
    );
};

export default Image;