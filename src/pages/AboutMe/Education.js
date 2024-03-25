import React from 'react';
import styled from 'styled-components';
import { Link } from "react-router-dom";

import {HomeHeader} from "../../styled/HomeStyles";
import imgFooter from '../../img/aboutImg/12.JPG'
// Стили для контейнера с образованием
// Стили для контейнера с образованием
const EducationContainer = styled.div`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  width: 100%;
  height: 85vh; /* Максимальная высота контейнера */
/*  border: 2px solid #67d30e;*/

  background-color: white;

  @media screen and (max-width: 1400px) {
    z-index: -1;
    height: 91vh;

  }

  @media screen and (max-width: 700px) {
    height: auto;
  }
`;

const EducationContainerItem = styled.div `
  position: relative;
  width: 50%;
  height: 100%;
  margin-left: 0;


/*  border: 2px solid #0ed318;*/
  @media screen and (max-width: 1400px) {
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
  margin-top: 3%;
  width: auto;
  height: auto;
  font-size: 20px; /* Уменьшение размера текста */
  margin-bottom: 20px; /* Отступ снизу */
/*  border: 2px solid red;*/
  
  @media screen and (min-width: 700px) and (max-width: 1400px) {

  }
`;

// Стили для текста об образовании
const EducationText = styled.p`
  padding: 15px;
  font-family: Georgia, serif;
  font-weight: 200;
  position: relative;
  color: #0c0c0c;
  font-size: 16px;
  line-height: 1.2;
  margin-top: 0;
  width: auto;
  /*border: 2px solid #002aff;*/
  background-color: white;

  @media screen and (min-width: 700px) and (max-width: 1400px) {
    font-size: 16px;
    text-align: start;
    margin-top: 0;
    padding-bottom: 20%;
  }

  @media screen and (max-width: 700px) {
    margin-top: 10px;
    text-align: start;

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

  @media screen and (max-width: 1400px) {
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

const HomeImageFooter = styled.img`
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

const Education = () => {
    return (
        <>
            <HomeHeader>

                <BackButton to="/about">Назад</BackButton>
            </HomeHeader>
            <EducationContainer>
                <HomeImageFooter src={imgFooter} alt="Photo" />
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

            </EducationContainer>
        </>
    );
};

export default Education;
