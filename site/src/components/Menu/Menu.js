import React, {useEffect, useState} from 'react';
import MainHeader from "./Header";
import Sidebar from "./SideBar";
import Footer from "./Footer";
import useWindowWidth from "../../hook/useWindowWidth";
import ParentComponent from "../ParentComponent;";


const Menu = () => {
    const [isTablet, setIsTablet] = useState(false);
    const windowWidth = useWindowWidth(); // Используем кастомный хук для получения текущей ширины окна

    // Функция для проверки размера экрана
    const checkScreenSize = () => {
        setIsTablet(windowWidth <= 1400); // Устанавливаем isTablet в true, если ширина окна меньше или равна 1400px
    };

    // Вызываем функцию проверки размера экрана при монтировании компонента и при изменении размера окна
    useEffect(() => {
        checkScreenSize();
    }, [windowWidth]);

    return (
        <>
            {!isTablet && <MainHeader />} {/* Отображаем главный заголовок, если устройство не является планшетом */}
            <Sidebar isTablet={isTablet} /> {/* Передаем isTablet в компонент боковой панели */}

            <Footer /> {/* Отображаем футер внизу страницы */}
        </>
    );
};

export default Menu;
