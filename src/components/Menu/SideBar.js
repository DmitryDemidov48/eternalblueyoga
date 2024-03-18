import React, { useState, useEffect } from 'react';
import SecondarySidebar from './SecondarySidebar';
import useWindowWidth from "../../hook/useWindowWidth";


const Sidebar = ({ isTablet }) => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const windowWidth = useWindowWidth(); // Используем кастомный хук для получения текущей ширины окна

    useEffect(() => {
        // Проверяем ширину окна и устанавливаем состояние isSidebarOpen
        if (windowWidth >= 1000) {
            setIsSidebarOpen(false); // Открыть сайдбар при увеличении ширины экрана
        } else {
            setIsSidebarOpen(true); // Свернуть сайдбар при уменьшении ширины экрана
        }
    }, [windowWidth]); // Эффект будет вызываться при изменении ширины окна

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <>
            <SecondarySidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
        </>
    );
};

export default Sidebar;
