import React from 'react';
import img from '../img/about.jpg';
import imgL from '../img/LAbout.png';
import imgFooter from '../img/aboutImg/12.JPG'
import {
    HomeButton,
    HomeButtonContainer,
    HomeContainer,
    HomeImage,
    HomeImage$, HomeImageFooter,
    HomePosterContainer,
    HomePosterDescription,
    HomePosterTitle,
} from "../styled/HomeStyles";

import HeaderFooter from "../components/Menu/HeaderFooter";

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
                <HomeImage$ src={imgL} alt="M Photo" />
                <HomeImageFooter src={imgFooter} alt="Photo" />
                {eventsData.map((event, index) => (
                    <HomePosterContainer key={index}>
                        <HomePosterTitle>{event.title}</HomePosterTitle>
                        <HomePosterDescription>{event.description}</HomePosterDescription>
                        <HomeButtonContainer>
                            <HomeButton to="/about">Обо Мне</HomeButton>
                        </HomeButtonContainer>
                    </HomePosterContainer>
                ))}

            </HomeContainer>
        </>

    );
};

export default Home;
