import React, { useEffect, useState } from 'react';
import MainHeader from "./Header";
import Sidebar from "./SideBar";
import Footer from "./Footer";
import useWindowWidth from "../../hook/useWindowWidth";

const Menu = () => {
    const [isTablet, setIsTablet] = useState(false);
    const windowWidth = useWindowWidth();

    const checkScreenSize = () => {
        setIsTablet(windowWidth <= 1400);
    };

    useEffect(() => {
        checkScreenSize();
    }, [windowWidth]); // Добавляем зависимость windowWidth в массив зависимостей useEffect

    return (
        <>
            {/* Отображаем главный заголовок, если устройство не является планшетом */}
            {!isTablet && <MainHeader />}

            {/* Передаем isTablet в компонент боковой панели */}
            <Sidebar isTablet={isTablet} />

            {/* Отображаем футер внизу страницы */}
            <Footer />
        </>
    );
};

export default Menu;
