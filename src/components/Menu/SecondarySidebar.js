import React from 'react';

import { MenuData } from "../add/MenuData";
import { BsPatchCheckFill, BsPatchMinusFill } from 'react-icons/bs';
import {
    SidebarButton,
    SidebarContainer,
    SidebarContent,
    SidebarIcon,
    SideButton,
    SidebarLink,
    SidebarTitle,
    SidebarTitleContainer,
} from "../../styled/SecondarySidebarStyles";
import useWindowWidth from "../../hook/useWindowWidth";
import { useHover } from "../../hook/useHover";

const SecondarySidebar = ({ isOpen, toggleSidebar }) => {
    const [hoveredIcons, handleMouseEnter, handleMouseLeave] = useHover();
    const windowWidth = useWindowWidth();

    return (
        <>
            <SidebarTitleContainer>

            </SidebarTitleContainer>
            {windowWidth <1251 &&  windowWidth >700&& (
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
