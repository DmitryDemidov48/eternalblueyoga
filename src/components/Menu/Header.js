
import React from 'react';
import {HeaderWrapper, Title, Nav, Button, StyledLink, Icon, HeaderMenu,} from "../../styled/HeaderStyles";
import { MenuData } from "../add/MenuData";
import {useHover} from "../../hook/useHover";
import InfinityAnimation from "../../animation/eternal";




const MainHeader = () => {
    const [hoveredIcons, handleMouseEnter, handleMouseLeave] = useHover();

    return (
        <HeaderWrapper>

            <Title> Eternal Blue Yoga<InfinityAnimation/></Title>
        <HeaderMenu>
            <Nav >
                {MenuData.map(({ title, path, icon }) => (
                    <StyledLink key={title} onMouseEnter={() => handleMouseEnter(title)} onMouseLeave={() => handleMouseLeave(title)}>
                        <Icon data-isHovered={hoveredIcons[title]}>{icon}</Icon>
                        <Button to={path}>{title}</Button>
                    </StyledLink>
                ))}
            </Nav>
        </HeaderMenu>
        </HeaderWrapper>
    );
};

export default MainHeader;