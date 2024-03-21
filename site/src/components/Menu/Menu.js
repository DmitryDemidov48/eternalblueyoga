import React, { useEffect, useState, useCallback } from 'react';
import MainHeader from "./Header";
import Sidebar from "./SideBar";
import Footer from "./Footer";
import useWindowWidth from "../../hook/useWindowWidth";

const Menu = () => {
    const [isTablet, setIsTablet] = useState(false);
    const windowWidth = useWindowWidth();

    const checkScreenSize = useCallback(() => {
        setIsTablet(windowWidth <= 1400);
    }, [windowWidth]);

    useEffect(() => {
        checkScreenSize();
    }, [windowWidth, checkScreenSize]);

    return (
        <>
            {!isTablet && <MainHeader />}
            <Sidebar isTablet={isTablet} />
            <Footer />
        </>
    );
};

export default Menu;
