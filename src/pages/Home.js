import React from 'react';
import img from '../img/about.jpg';
import imgL from '../img/LAbout.png';
import imgFooter from '../img/aboutImg/12.JPG'
import {
    HomeButton,
    HomeButtonContainer,
    HomeContainer,  HomeIcons,
    HomeImage,
    HomeImage1, HomeImageFooter,
    HomePosterContainer,
    HomePosterDescription,
    HomePosterTitle,
} from "../styled/HomeStyles";

import HeaderFooter from "../components/Menu/HeaderFooter";
import {FaInstagram, FaTelegramPlane} from "react-icons/fa";
import {FaWhatsapp} from "react-icons/fa6";

const Home = () => {
    const eventsData = [
        { title: 'СОЗЕРЦАЙТЕ БЕСКОНЕЧНОЕ СИНЕЕ НЕБО ВНУТРИ СЕБЯ С ETERNAL BLUE YOGA. ',
            description: 'Откройте новый путь к гармонии тела и ума с хатхой йогой.' +
                ' Погрузитесь в мир упражнений, которые укрепляют тело,' +
                ' уравновешивают дыхание и успокаивают ум.' +
                ' Присоединяйтесь к нам и почувствуйте преображение каждой клеточки вашего существа. '
        }
    ];
    return (
        <>

            <HomeContainer>
                <HeaderFooter/>

                <HomeImage src={img} alt="My Photo" />
                <HomeImage1 src={imgL} alt="M Photo" />
                <HomeImageFooter src={imgFooter} alt="Photo" />
                {eventsData.map((event, index) => (
                    <HomePosterContainer key={index}>
                        <HomePosterTitle>{event.title}</HomePosterTitle>
                        <HomePosterDescription>{event.description}</HomePosterDescription>
                        <HomeButtonContainer>
                            <HomeButton to="/about">Обо Мне</HomeButton>
                        </HomeButtonContainer>
                        <HomeIcons ><FaTelegramPlane /><FaInstagram /><FaWhatsapp /></HomeIcons>
                    </HomePosterContainer>
                ))}

            </HomeContainer>
        </>

    );
};

export default Home;
