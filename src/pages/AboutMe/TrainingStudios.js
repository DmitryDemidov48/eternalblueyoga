import React from 'react';
import styled from 'styled-components';
import { Link } from "react-router-dom";
import imgFooter from '../../img/aboutImg/12.JPG'

import {AboutImage, BackButtonAbout, Container} from "./Education";
import {HomeHeader} from "../Home";





const Title = styled.h2`
  display: flex;
  align-content: center;
  justify-content: center;
  font-family: Georgia, serif;
  font-weight: 200;
  margin-top: 3%;
  width: auto;
  height: auto;
  font-size: 20px; /* Уменьшение размера текста */
  margin-bottom: 20px; /* Отступ снизу */
  /*border: 2px solid red;*/

  @media screen and (min-width: 700px) and (max-width: 1250px) {
  
  }
  @media screen and (max-width: 700px){
  
  }
`;

const ParagraphContainer = styled.div`
  position: relative;
  width: 50%;
  height: 100%;
  margin-left: 0;
  padding-bottom: 22.8%;
  /*border: 2px solid #0e11d3;*/
  @media screen and (max-width: 1250px) {
    margin-left: 50%;
    text-align: center;
    padding-bottom: 50%;
  }
  @media screen and (max-width: 700px) {
    
    width: 100%;
 margin-left: 0;
    height: 100vh;
  margin-top: 20%;
  }
`;

const ParagraphTitle = styled.span`
  display: flex;
  align-content: center;
  justify-content: center;
  padding: 10px;
  font-weight: bold;
  font-size: 15px;
  color: #333;
  @media screen and (max-width: 700px) {
    margin-left: 0;
  }

  @media screen and (min-width: 700px) and (max-width: 1250px) {
    margin-left: 0;
  }

  @media screen and (min-width: 1300px) {
    margin-left: 0;
  }
`;



const Paragraph = styled.p`
  padding: 15px;
  font-family: Georgia, serif;
  font-weight: 200;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #0e0e0e;
  font-size: 16px; /* Уменьшение размера шрифта */
  line-height: 1.2;
  margin-top: 0;
  width: auto; /* Установка ширины на автоматический размер */
/*  border: 2px solid red;*/

  @media screen and (min-width: 700px) and (max-width: 1250px) {
    
  }
  @media screen and (max-width: 700px){
    margin-top: 20px;
    margin-bottom: 20px;
  }
`;

const BackButton = styled(Link)`
  margin: 20px;
  display: inline-block;
  padding: 8px 16px;
  background-color: #f8f9fa;
  color: #0c0c0c;
  text-decoration: none;
  border-radius: 5px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0e60c5;
    color: white;
  }
`;


const SeminarsAndWorkshops = () => {
    return (
        <>
            <HomeHeader>
                <BackButton to="/about">Назад</BackButton>
            </HomeHeader>
            <Container>
                <AboutImage src={imgFooter} alt="Photo" />
                <ParagraphContainer>
                <Title>Мои Учебные Студии</Title>
                    <ParagraphTitle><strong> Московская школа йоги</strong></ParagraphTitle>
                    <Paragraph>
                        М. Чистые пруды, Мясницкая ул., 24/7, стр. 2, Москва
                        </Paragraph>
                    <ParagraphTitle><strong>Ресурс</strong></ParagraphTitle>
                    <Paragraph>
                        М. Щукино, м. Октябрьское поле, ЖК «Серебряный парк» ул. Паршина, д. 10
                      </Paragraph>
                    <BackButtonAbout to="/about">Назад</BackButtonAbout>
                </ParagraphContainer>

            </Container>
        </>
    );
};

export default SeminarsAndWorkshops;
