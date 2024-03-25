import React from 'react';
import styled from 'styled-components';
import { Link } from "react-router-dom";
import { HomeHeader } from "../../styled/HomeStyles";
import imgFooter from '../../img/aboutImg/12.JPG'
import {BackButtonAbout} from "./Education";
const Container = styled.div`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  width: 100%;
  height: 85vh; /* Максимальная высота контейнера */
/*  border: 2px solid #0e11d3;*/
  overflow: hidden;
  background-color: white;

  @media screen and (max-width: 1399px) {
    z-index: -1;
    height: 91vh;
  }
  @media screen and (max-width: 699px) {
    height: 94vh;
  }
`;

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

  @media screen and (min-width: 700px) and (max-width: 1400px) {
  
  }
  @media screen and (max-width: 700px){
   
  }
`;

const ParagraphContainer = styled.div`

`;

const ParagraphTitle = styled.span`
  position: relative;
  width: 50%;
  height: 100%;
  margin-left: 0;
/*  border: 2px solid #0e11d3;*/
  

  @media screen and (max-width: 1399px) {
    margin-left: 50%;
    text-align: center;
  }
  @media screen and (max-width: 699px) {
    width: 100%;
    margin: 0 auto;
    top: 10%;
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

  @media screen and (min-width: 700px) and (max-width: 1400px) {
    text-align: start;
  }
  @media screen and (max-width: 699px){
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
export const HomeImageFooter = styled.img`

  position: absolute;
  width: 50%;
  height: 100vh;
  top: 0;
  right: 0;
  object-fit: cover;
  @media screen and (max-width: 1400px) {
    position: fixed;
    width: 50vw;
    height: 100%;
    top: 0;
    left: -50%;
    object-fit: cover;
    z-index: -1;
  }
  @media screen and (max-width: 700px) {
    display: none;
  }
`;

const SeminarsAndWorkshops = () => {
    return (
        <>
            <HomeHeader>

                <BackButton to="/about">Назад</BackButton>
            </HomeHeader>
            <Container>
                <HomeImageFooter src={imgFooter} alt="Photo" />
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
