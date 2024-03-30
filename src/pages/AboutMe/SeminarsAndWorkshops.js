import React from 'react';
import styled from 'styled-components';
import { Link } from "react-router-dom";
import imgFooter from '../../img/aboutImg/12.JPG'
import {AboutImage, BackButtonAbout, Container} from "./Education";
import {HomeHeader} from "../Home";



const Title = styled.h2`
  font-family: Georgia, serif;
  font-weight: 200;
  display: flex;
  align-content: center;
  justify-content: center;
  text-align: center; /* Выравнивание текста по центру */
  margin-top: 3%;
  width: auto;
  height: auto;
  font-size: 20px; /* Уменьшение размера текста */
  margin-bottom: 20px; /* Отступ снизу */
 /* border: 2px solid red;*/

  @media screen and (min-width: 700px) and (max-width: 1250px) {
  
  }
  @media screen and (max-width: 700px){
   margin-top: 20%;
  }
`;

const ParagraphContainer = styled.div`

`;

const ParagraphTitle = styled.span`
  position: relative;
  width: 50%;
  height: 100%;
  margin-left: 0;
  padding-bottom: 21.7%;
/*  border: 2px solid #0e11d3;*/
  

  @media screen and (max-width: 1250px) {
    margin-left: 50%;
    text-align: center;
    padding-bottom: 35%;
  }
  @media screen and (max-width: 700px) {
    width: 100%;
    margin: 0 0 7% 0;
    height: 100vh;
   
  }

  
`;



const Paragraph = styled.p`
  padding: 15px;
  font-family: "Roboto Light", serif;
  font-weight: 200;
  position: relative;
  width: 100%;
  height: auto;
  color: #0c0c0c;
  font-size: 15px;
  line-height: 1.46;
  margin-top: 0;

  @media screen and (min-width: 700px) and (max-width: 1250px) {
    text-align: start;
  }
  @media screen and (max-width: 700px){
    margin-top: 10px;
    text-align: start;
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
                <ParagraphTitle>
                <Title>Семинары и мастер-классы</Title>
                <ParagraphContainer>
                    <Paragraph>
                        Ведение семинаров и мастер-классов моя основная деятельность, это давно не развлечение
                        и не хобби, а работа. Я обучаю преподавателей йоги на двух специализированных курсах: курс
                        подготовки преподавателей Михаила Баранова и Ильи Журавлёва «Йога 108», тичерз-курс по
                        подготовке инструкторов йоги школы «Мосйога». Предметы, которым обучаю на программах:
                        методология преподавания классов по хатха-йоге, теория и практика асан, пранямы и
                        расслабления, работа с пропсами, динамические техники хатха-йоги. Регулярно создаю авторские
                        семинары по разным направлениям хатха-йоги.
                         </Paragraph>
                </ParagraphContainer>
                    <BackButtonAbout to="/about">Назад</BackButtonAbout>
                </ParagraphTitle>
            </Container>
        </>
    );
};

export default SeminarsAndWorkshops;
