import React from 'react';
import {FooterContainer, FooterIcon, IconFooter, FooterNav, StyledLink} from "../../styled/FooterStyles";
import { MenuData } from "../add/MenuData";
import useWindowWidth from "../../hook/useWindowWidth";
import {useHover} from "../../hook/useHover";
// Footer компонент
const Footer = ({ isOpen, toggleSidebar }) => {
    const [hoveredIcons, handleMouseEnter, handleMouseLeave] = useHover();
    const windowWidth = useWindowWidth();


    return (
        <>
            {windowWidth < 700 && (
                <FooterContainer isOpen={!isOpen}>
                    <FooterNav>
                        {MenuData.map(({ title, path, icon }) => (
                            <FooterIcon key={title} onMouseEnter={() => handleMouseEnter(path)} onMouseLeave={() => handleMouseLeave(title)}>
                                <StyledLink to={path}>
                                    <IconFooter to={path} isHovered={hoveredIcons[path]}>{icon}</IconFooter>
                                </StyledLink>
                            </FooterIcon>
                        ))}
                    </FooterNav>
                </FooterContainer>
            )}
        </>
    );
};

export default Footer;
