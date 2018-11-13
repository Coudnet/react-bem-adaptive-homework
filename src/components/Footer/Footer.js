import React from 'react';
import './Footer.scss';
import {cn} from '@bem-react/classname';

const cnFooter = cn('Footer');

const Footer = () => {
    return (
        <footer className={cnFooter()}>
            <div className={cnFooter('Nav')}>
                <a href="#">Помощь</a>
                <a href="#">Обратная связь</a>
                <a href="#">Разработчикам</a>
                <a href="#">Условия использования</a>
            </div>
            <div className={cnFooter('Copyright')}>
                &copy;&nbsp;2001&ndash;2017 ООО&nbsp;&laquo;Яндекс&raquo;
            </div>
        </footer>
    );
};

export default Footer;