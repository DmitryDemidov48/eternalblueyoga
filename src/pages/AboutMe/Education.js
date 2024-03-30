import React from 'react';
import styled from 'styled-components';
import { Link } from "react-router-dom";


import imgFooter from '../../img/aboutImg/12.JPG'
import {HomeHeader} from "../Home";


export const Container = styled.div`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  width: 100%;
  height: auto; /* Максимальная высота контейнера */
  overflow: hidden;
  background-color: white;
  border-top: 2px solid #070707;
  @media screen and (max-width: 1250px) {
    height: auto;
    width: 100%;
    margin-right: 0;
    display: flex; /* Используем flexbox */
    align-items: center; /* Выравниваем контент по вертикали */
    justify-content: flex-end; /* Выравниваем контент по правому краю */
    overflow-y: auto;
    z-index: -1;
    background-color: white;
  }
  @media screen and (max-width: 700px) {
    position: absolute;
    margin-top: 5%;
    background-color: white;
    width: 100%;
    height: auto;
    justify-content: center; /* Центрирование по горизонтали */
    overflow-y: auto;
  }
`;

const EducationContainerItem = styled.div `

  position: relative;
  width: 50%;
  height: 100%;
  margin-left: 0;
padding-bottom: 6.42%;

/*  border: 2px solid #0ed318;*/
  @media screen and (max-width: 1250px) {
    margin-left: 50%;
    text-align: center;
   
   
  }

  @media screen and (max-width: 700px) {
    width: 100%;
    margin: 0 auto;
    padding-bottom: 15%;
    padding-top: 15%;
    overflow-y: auto; /* Включаем вертикальную прокрутку */

  }
`;

// Стили для заголовка образования
const EducationTitle = styled.h2`
  font-family: Georgia, serif;
  font-weight: 400;
  display: flex;
  align-content: center;
  justify-content: center;
  text-align: center; /* Выравнивание текста по центру */
  margin-top: 1%;
  width: auto;
  height: auto;
  font-size: 20px; /* Уменьшение размера текста */
  margin-bottom: 5px; /* Отступ снизу */
/*  border: 2px solid red;*/
  
  @media screen and (min-width: 700px) and (max-width: 1250px) {

  }
`;


const EducationText = styled.p`
  padding: 15px;
  font-family: "Roboto Light", serif;
  font-weight: 200;
  position: relative;
  width: 100%;
  height: auto;
  color: #0c0c0c;
  font-size: 15px;
  line-height: 1.32;
  margin-top: 0;
/*  border: 2px solid #002aff;*/
  background-color: white;
 

  @media screen and (min-width: 700px) and (max-width: 1250px) {
    font-size: 16px;
    text-align: start;
    margin-top: 0;
    padding-bottom: 19%;
    overflow-y: auto;
    width: 100%;
    height: auto;
    z-index: -1;
  }

  @media screen and (max-width: 700px) {
    margin-top: 10px;
    text-align: start;
    overflow-y: auto;
  }
`;


export const BackButtonAbout = styled(Link)`
  margin: 20px;
  display: inline-block;
  padding: 8px 26px;
  background-color: #070707;
  color: #fcfafa;
  text-decoration: none;
  border-radius: 5px;
  transition: background-color 0.3s ease;
  font-family: Georgia, serif;
  font-weight: 200;

  &:hover {
    background-color: #0e60c5;

  }

  @media screen and (max-width: 1250px) {
    display: none;
  }
`;

const BackButton = styled(Link)`
  margin: 20px;
  display: inline-block;
  padding: 8px 26px;
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

export const AboutImage = styled.img`
  position: absolute;
  width: 50%;
  height: auto;
  top: -25%;
  right: 0;
  object-fit: cover;
  @media screen and (max-width: 1250px) {
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


const Education = () => {
    return (
        <>
            <HomeHeader>

                <BackButton to="/about">Назад</BackButton>
            </HomeHeader>
            <Container>
                <AboutImage src={imgFooter} alt="Photo" />
                <EducationContainerItem>
                <EducationTitle>Моё образование и опыт в йоге</EducationTitle>
                <EducationText>

                    Изучение йоги началось в 2012 году, буквально через пару месяцев регулярных занятий, я
                    впервые отправилась в путешествие в Индию, и это был настолько яркий опыт, что казалось не я
                    выбрала йогу, а она меня.
                    К моменту начала увлечения йогой у меня уже был спортивный опыт и пройденное обучение на
                    фитнес тренера, это позволило сразу начать попытки в преподавании классов по Хатха-йоге в
                    фитнес клубах, в которых приходилось работать.
                    Увлечение быстро переросло в страсть, благодаря которой я окунулась в мир йоги.
                    Многочисленные семинары, фестивали, курсы для преподавателей – я отовсюду жадно черпала
                    знания, ходила к разным инструкторам, экспериментировала с направлениями, читала книги
                    индийских и западных учителей.
                    В 2016 году поступила в аспирантуру РГКФКСМиТ, и успешно окончила её в 2019 году со
                    специальностью преподаватель-исследователь, диссертация и исследование были посвящены
                    хатха-йоге.
                    Поворотным стал 2018 год, когда я с отличием окончила курс подготовки преподавателей
                    Михаила Баранова и Ильи Журавлева, создателей проекта Йога 108 Они сразу же позвали меня
                    работать в центр на Китай-городе, где под руководством старших преподавателей, ведение
                    классов стало полноценной профессией. Всегда с теплотой вспоминаю это время.
                    Первые попытки ведения семинаров по хатха-йоге начались ещё в 2018-2019 годах, но
                    окончательно оформились в 2020 году в профессиональное преподавание мастер-классов и
                    лекций. Примерно тогда же я начала организовывать йога-ретриты и выездные семинары.
                    Начиная с 2020 года обучаю преподавателей йоги в проекте школы Йога 108, с 2022 года веду
                    методологию на курсе подготовки преподавателей в Московской школе йоги.
                    Помимо хатха-йоги увлекаюсь изучением психологии, системных семейных расстановок,
                    шаманизма, ароматов и трав.
                    Искренне люблю свою профессию, и делюсь полученными знаниями.
                    Рада вам! Намасте!
                      </EducationText>
                     <BackButtonAbout to="/about">Назад</BackButtonAbout>
                    </EducationContainerItem>
            </Container>
        </>
    );
};

export default Education;
