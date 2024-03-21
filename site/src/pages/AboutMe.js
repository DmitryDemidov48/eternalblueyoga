import React from 'react';
import styled, { keyframes } from 'styled-components';

import { Link } from "react-router-dom";
import { HomeHeader } from "../styled/HomeStyles";
import InfinitySymbol from "../animation/eternal";

import AboutPhoto from '../img/aboutImg/about1.jpg'

const fadeInText = keyframes`
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 2;
    transform: translateY(0);
  }
`;

const AboutMeContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: url(${AboutPhoto});
  z-index: -1;
  background-size: cover;
  background-position: center;

  @media screen and (max-width: 1400px) {
    flex-direction: column;
    justify-content: center;
  }
`;

const TextPhotoContainer = styled.div`
  background-color: inherit;
  display: flex;
  align-items: center;
  transform: translateZ(10px);

  @media screen and (max-width: 700px) {
    flex-direction: column;
  }
`;

const TextContainer = styled.div`
  color: #070707;
  width: 100%;
  height: auto;
  position: relative;
  animation: ${fadeInText} 2s ease forwards;
  overflow-y: auto;

  @media screen and (max-width: 1400px) {
    width: 100%;
    text-align: center;
  }

  @media screen and (max-width: 700px) {
    width: 100%;
    text-align: center;
    max-height: 700px;
    background-color: transparent;
  }
`;

const StyledListContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 10px;
`;

const StyledList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
`;

const StyledListItem = styled.li``;

const StyledLink = styled(Link)`
  font-family: 'Press Start 2P', cursive;
  font-size: 16px;
  padding: 10px 20px;
  background-color: #faf9f7;
  color: #000000;
  text-decoration: none;
  border: 2px solid #000000;
  display: inline-block;
  text-align: center;
  line-height: 1;
  margin: 10px;
  transition: transform 0.3s, box-shadow 0.3s;
  width: 100%;

  &:hover {
    transform: translateY(3px);
    box-shadow: 0 15px 25px rgba(0, 0, 0, 0.3);
  }

  &:active {
    transform: translateY(6px);
    box-shadow: none;
  }

  @media screen and (max-width: 700px) {
    width: 250px;
  }
  
  @media screen and (min-width: 701px) and (max-width: 1400px) {
    width: calc(100% - 20px); /* Расчетная ширина кнопки для экранов от 701px до 1400px */
    margin: 10px; /* Отступ между кнопками */
  }
`;

const AboutMe = () => {
    return (
        <AboutMeContainer>
            <HomeHeader>
                <InfinitySymbol />
            </HomeHeader>
            <TextPhotoContainer>
                <TextContainer>
                    <StyledListContainer>
                        <StyledList>
                            <StyledListItem>
                                <StyledLink to="/education">Моё образование</StyledLink>
                            </StyledListItem>
                            <StyledListItem>
                                <StyledLink to="/individualLearning">Индивидуальное обучение</StyledLink>
                            </StyledListItem>
                            <StyledListItem>
                                <StyledLink to="/trainingStudios">Мои учебные студии</StyledLink>
                            </StyledListItem>
                            <StyledListItem>
                                <StyledLink to="/seminarsAndWorkshops">Семинары и мастер-классы</StyledLink>
                            </StyledListItem>
                        </StyledList>
                    </StyledListContainer>
                </TextContainer>
            </TextPhotoContainer>
        </AboutMeContainer>
    );
};

export default AboutMe;
