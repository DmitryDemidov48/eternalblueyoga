
import React, { useState, useEffect } from 'react';

import { MenuData } from "../add/MenuData";
import { BsPatchCheckFill, BsPatchMinusFill } from 'react-icons/bs';
import {
    SidebarButton,
    SidebarContainer,
    SidebarContent,
    SidebarIcon,
    SideButton,
    SidebarLink, SidebarTitle, SidebarTitleContainer,
} from "../../styled/MenuStyled/SecondarySidebarStyles";
import useWindowWidth from "../../hook/useWindowWidth";
import {useHover} from "../../hook/useHover";

import InfinitySymbol from "../../animation/eternal";








const SecondarySidebar = ({ isOpen, toggleSidebar }) => {
    const [hoveredIcons, handleMouseEnter, handleMouseLeave] = useHover();
    const windowWidth = useWindowWidth();


    return (
        <>
            <SidebarTitleContainer>

                <SidebarTitle> </SidebarTitle>

            </SidebarTitleContainer>
            {windowWidth < 1400 &&  windowWidth > 699&& ( // Проверка условия ширины окна
                <SidebarContainer isOpen={!isOpen}>
                    <SidebarContent>
                        {MenuData.map(({ title, path, icon }) => (
                            <SidebarLink key={title} onMouseEnter={() => handleMouseEnter(title)} onMouseLeave={() => handleMouseLeave(title)}>
                                <SidebarIcon isHovered={hoveredIcons[title]}>{icon}</SidebarIcon>
                                <SidebarButton to={path}>{title}</SidebarButton>
                            </SidebarLink>
                        ))}
                        <SideButton onClick={toggleSidebar}>
                            {isOpen ? <BsPatchMinusFill /> : <BsPatchCheckFill />}
                        </SideButton>
                    </SidebarContent>
                </SidebarContainer>
            )}
        </>
    );
};

export default SecondarySidebar;
