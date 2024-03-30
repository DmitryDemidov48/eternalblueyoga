import React from 'react';
import styled, { keyframes } from 'styled-components';
import star from '../video/star.mp4'
import { Link } from "react-router-dom";

import InfinitySymbol from "../animation/eternal";
import imgFooter from '../img/aboutImg/12.JPG'
import {HomeContainer, HomeHeader} from "./Home";
import sea from "../video/sea.mp4";


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



const TextPhotoContainer = styled.div`
  background-color: inherit;
  display: flex;
  align-items: start;
  justify-content: center;
  transform: translateZ(10px);
  margin-left: 0;
  width: 50%;
  height: auto;
  overflow: hidden;
  padding-bottom: 16%;
  /* border: 2px solid #009dff;*/
  @media screen and (max-width: 1250px) {
    align-content: center;
    justify-content: center;
    margin-top: 5%;
    width: 50%;
    margin-right: 0;
  }
  @media screen and (max-width: 700px) {


    width: 100%;
    height: 100vh;
    overflow-y: auto;
  }
`;

const TextContainer = styled.div`
  color: #070707;
  width: 100%;
  height: auto;
  position: relative;
  animation: ${fadeInText} 2s ease forwards;
  overflow-y: auto;
display: flex;
  align-content: center;
  padding-top: 20%;
  margin-left: 0;
 /* border: 2px solid #da1111;*/
  @media screen and (max-width: 1250px) {
    width: 100%;
    margin-right: 0;
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
  
  width: 100%;
 
`;

const StyledList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
`;

const StyledListItem = styled.li`
  display: flex;
  align-content: center;
  
 
`;

const StyledLink = styled(Link)`
  font-family: Georgia, serif;
  font-weight: 200;
  font-size: 20px;
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
  border-radius: 5px;

  &:hover {
    transform: translateY(3px);
    box-shadow: 0 15px 25px rgba(0, 0, 0, 0.3);
  }

  &:active {
    transform: translateY(6px);
    box-shadow: none;
  }
  @media screen and (max-width: 700px) and (max-width: 1250px) {
    width: calc(100% - 20px); 
    
  }
  @media screen and (max-width: 700px) {
    width: 250px;
  }
  
 
`;
export const HomeImageFooter = styled.img`
  position: absolute;
  width: 50%;
  height: auto;
  top: -25%;
  right: 0;
  object-fit: cover;
  @media screen and (max-width: 1250px) {
  position: fixed;
    width: 50vw;
    height: 100vh;
    top: 0;
  left: -50%;
    object-fit: cover;
    z-index: -1;
  }
  @media screen and (max-width: 700px) {
    display: none;
  }
`;

const AboutVideo = styled.video`
  position: absolute;
 /*   border: 2px solid red;*/
  object-fit: cover;
  width: 50%;
  height: 100%;
  margin-bottom:  0;

  filter: blur(7px); /* Добавляет размытие краев */
  z-index: -1;

  @media screen and (max-width: 1250px) {
    display: none;
  }
  @media screen and (max-width: 700px) {
    display: none;
  }
  
`;
const AboutMe = () => {
    return (
        <HomeContainer>
            <HomeHeader>
                <InfinitySymbol />
            </HomeHeader>
            <HomeImageFooter src={imgFooter} alt="Photo" />
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
                                <StyledLink to="/seminarsAndWorkshops">Семинары и мастер-классы</StyledLink>

                            </StyledListItem>
                            <StyledListItem>
                                <StyledLink to="/trainingStudios">Мои учебные студии</StyledLink>
                            </StyledListItem>
                        </StyledList>

                    </StyledListContainer>

                </TextContainer>

            </TextPhotoContainer>
            <AboutVideo HomeVideo autoPlay loop muted playsInline controls={false}>
                <source src={star} type="video/mp4" />
                Ваш браузер не поддерживает видео.
            </AboutVideo>

        </HomeContainer>
    );
};

export default AboutMe;
