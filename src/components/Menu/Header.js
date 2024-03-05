// MainHeader.js
import React, { useState} from 'react';
import {HeaderWrapper, Title, Nav, Button, StyledLink, Icon,} from "../../styled/MenuStyled/HeaderStyles";
import { MenuData } from "../add/MenuData";
import {useHover} from "../../hook/useHover";




const MainHeader = () => {
    const [hoveredIcons, handleMouseEnter, handleMouseLeave] = useHover();

    return (
        <HeaderWrapper>
            <Title>Eternal Blue Yoga</Title>
            <Nav >
                {MenuData.map(({ title, path, icon }) => (
                    <StyledLink key={title} onMouseEnter={() => handleMouseEnter(title)} onMouseLeave={() => handleMouseLeave(title)}>
                        <Icon data-isHovered={hoveredIcons[title]}>{icon}</Icon>
                        <Button to={path}>{title}</Button>
                    </StyledLink>
                ))}
            </Nav>
        </HeaderWrapper>
    );
};

export default MainHeader;