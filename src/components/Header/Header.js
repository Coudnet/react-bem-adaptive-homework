import React from 'react';

const Header = ({className}) => {
    return (
        <header>
            <div className="page-logo">
                <img src="/public/images/icons/logo.svg" alt="Логотип Яндекс Дом"/>
            </div>
            <div className="hamburger" id="hamburger">
                <img src="/public/images/icons/icon_list.svg" alt="Открыть меню"/>
            </div>
            <nav>
                <a href="#" className="current">События</a>
                <a href="#">Сводка</a>
                <a href="#">Устройства</a>
                <a href="#">Сценарии</a>
            </nav>
        </header>
    );
};

export default Header;