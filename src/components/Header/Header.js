import React from 'react';
import './Header.scss';
import logo from './logo.svg'
import hamburgerIcon from './icon_list.svg'
import { cn } from '@bem-react/classname';

const cnHeader = cn('Header');

const Header = () => {
    return (
        <header className={cnHeader()}>
            <div className={cnHeader('Logo')}>
                <img src={logo} alt="Логотип Яндекс Дом"/>
            </div>
            <div className={cnHeader('HamburgerIcon')}>
                <img src={hamburgerIcon} alt="Открыть меню"/>
            </div>
            <nav className={cnHeader('Nav')}>
                <a href="#" className="current">События</a>
                <a href="#">Сводка</a>
                <a href="#">Устройства</a>
                <a href="#">Сценарии</a>
            </nav>
        </header>
    );
};

export default Header;