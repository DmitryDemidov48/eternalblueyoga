import React from 'react';
import styled, { keyframes } from 'styled-components';

import { Link } from "react-router-dom";

import InfinitySymbol from "../animation/eternal";
import imgFooter from '../img/aboutImg/12.JPG'
import {HomeContainer, HomeHeader} from "./Home";


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
  align-items: center;
  transform: translateZ(10px);
/*  border: 2px solid #14dc5a;*/
  margin-left: 0;
  padding-bottom: 47%;
  width: 50%;
  height: auto;
  overflow: hidden;
  /*  border: 2px solid #009dff;*/
  @media screen and (max-width: 1300px) {
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
  padding-top: 10%;
  margin-left: 0;
 /* border: 2px solid #da1111;*/
  @media screen and (max-width: 1300px) {
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
  margin-bottom: 10px;
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
  @media screen and (max-width: 700px) and (max-width: 1300px) {
    width: calc(100% - 20px); /* Расчетная ширина кнопки для экранов от 701px до 1400px */
    
  }
  @media screen and (max-width: 700px) {
    width: 250px;
  }
  
 
`;
export const HomeImageFooter = styled.img`
  position: absolute;
  width: 50%;
  height: auto;
  top: 0;
  right: 0;
  object-fit: cover;

  @media screen and (max-width: 1300px) {
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
        </HomeContainer>
    );
};

export default AboutMe;
