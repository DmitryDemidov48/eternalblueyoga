import React from 'react';
import {HomeHeader, HomeIcon, HomeTitle} from "../../styled/HomeStyles";
import {FaInstagram, FaTelegramPlane} from "react-icons/fa";
import {FaWhatsapp} from "react-icons/fa6";
import InfinityAnimation from "../../animation/eternal";

const HeaderFooter = () => {
    return (
        <>
            <HomeHeader>
                <HomeIcon ><FaTelegramPlane /><FaInstagram /><FaWhatsapp /></HomeIcon>
                <HomeTitle>Eternal Blue Yoga</HomeTitle>
                <InfinityAnimation/>
            </HomeHeader>
        </>
    );
};

export default HeaderFooter;