import React from 'react';
import {FaInstagram, FaTelegramPlane} from "react-icons/fa";
import {FaWhatsapp} from "react-icons/fa6";
import InfinityAnimation from "../../animation/eternal";
import {HomeHeader, HomeIcon, HomeTitle} from "../../pages/Home";
import {Link} from "react-router-dom";
import styled from "styled-components";

export const Icon = styled(Link)`
color: white;
`;
const HeaderFooter = () => {
    return (
        <HomeHeader>
            <HomeIcon>
                <Icon to="https://t.me/eternal_blue_yoga">
                    <FaTelegramPlane />
                </Icon>
                <Icon to="https://instagram.com/eternal_blue_yoga">
                    <FaInstagram />
                </Icon>
                <Icon to="https://wa.me/89692809728">
                    <FaWhatsapp />
                </Icon>
            </HomeIcon>
            <HomeTitle>Eternal Blue Yoga</HomeTitle>
            <InfinityAnimation />
        </HomeHeader>

    );
};
export default HeaderFooter;