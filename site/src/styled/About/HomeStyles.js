import styled, {keyframes} from "styled-components";

import { PosterContainer } from "../SeminarsStyled/SeminarsStiles";
import { Link } from "react-router-dom";
import table from '../../img/table.jpg'

import { Link } from "react-router-dom";




export const HomeContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  margin: auto;
  padding: 2%; /* Отступ внутри контейнера */

  @media screen and (max-width: 1399px) {
    margin-top: 50px; /* Отступ сверху */
    left: 150px;
    display: flex; /* Используем flexbox */
    align-items: center; /* Выравниваем контент по вертикали */
    justify-content: flex-end; /* Выравниваем контент по правому краю */
  }

  @media screen and (max-width: 699px) {
    margin-top: 80px;
    justify-content: center; /* Центрирование по горизонтали */
  }
`;
export const HomeIcon = styled.div`
  position: relative;
  font-size: 25px;
  color: white;
  display: grid;
  grid-auto-flow: column; /* Размещаем элементы в строку */
  align-items: end;
  gap: 15px; /* Отступ между элементами */
`;

export const HomeHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid white;
  flex-direction: row-reverse;
  width: 100%;
  background-color: #090909;
  z-index: 999;
  position: fixed; /* Зафиксируем позицию */

  @media screen and (max-width: 699px) {
    top: 0; /* Прижимаем к верхней части экрана */
    left: 0; /* Выравниваем по левому краю */
  }

  @media screen and (min-width: 700px) and (max-width: 1399px) {
    bottom: 0; /* Прижимаем к нижней части экрана */
    left: 0; /* Выравниваем по левому краю */
  }

  @media screen and (min-width: 1400px) {
    display: none; /* Скрываем компонент при разрешении более 1399 пикселей */
  }
`;

const typingAnimation = keyframes`
  from {
    opacity: 0; /* Начальная прозрачность */
  }
  to {
    opacity: 1; /* Конечная прозрачность */
  }
`;



export const HomeTitle = styled.h1`
  font-family: 'Libre Baskerville', serif;
  font-weight: 400;
  font-size: 15px;
  text-align: center;
  color: white;
  opacity: 0; /* Начальная прозрачность */
  animation: ${typingAnimation} 9s ease forwards; /* Применяем анимацию */

 
  
`;

export const HomePosterContainer = styled.div`
  background-color: inherit;
  width: 50%;
  height: auto;
  margin: 2%;
  display: flex;
  flex-direction: column; /* Расположение элементов в столбце */

  /* Добавляем отступ снизу между текстом и кнопкой */
  gap: 20px;

  @media screen and (max-width: 1399px) {
   
    font-size: 1.8vw;
  }

  @media screen and (max-width: 699px) {
    width: 100%;
    height: 100%;
    margin: 10%;
  }
`;

const baseFontSize = 2.5; // Базовый размер шрифта в vw

export const HomePosterTitle = styled.h1`
  font-family: 'Libre Baskerville', serif;
  color: #f5f5f6;
  font-weight: 400;
  font-size: ${baseFontSize}vw;
  line-height: calc(${baseFontSize * 0.8}vw + 15px); /* Примерная высота строки */
  letter-spacing: 2.2px;
  margin: 1% 0;

  @media screen and (max-width: 1399px) and (min-width: 700px) {
    font-size: 2.2vw; /* Размер шрифта для экранов от 700px до 1399px */
    line-height: 3vw; /* Высота строки для экранов от 700px до 1399px */
  }

  @media screen and (max-width: 699px) {
    font-size: 3.2vw; /* Размер шрифта для экранов до 699px */
    margin-top: 1vw; /* Отступ сверху для экранов до 699px */
    line-height: 5vw;
  }
`;

export const HomePosterDescription = styled.p`
  font-family: 'Public Sans', serif;
  color: #f5f1f1;
  font-size: ${baseFontSize * 0.5}vw;
  line-height: calc(${baseFontSize * 0.9 * 0.8}vw + 3px); /* Примерная высота строки */
  text-align: left;
  font-weight: 200;


  @media screen and (max-width: 1399px) and (min-width: 700px) {
    font-size: 1.5vw; /* Размер шрифта для экранов от 700px до 1399px */
    line-height: 1.8vw; /* Высота строки для экранов от 700px до 1399px */
  }

  @media screen and (max-width: 699px) {
    margin-top: 5px; /* Отступ сверху для экранов до 699px */
    line-height: 5vw; /* Высота строки для экранов до 699px */
    font-size: 4vw; /* Размер шрифта для экранов до 699px */
  }
`;

export const HomeImage = styled.img`
  position: absolute;
  width: 50vw;
  height: 100%;
  top: 0;
  right: 0;
  object-fit: cover;
  z-index: -1;

  @media screen and (max-width: 1400px) {
    display: none;
  }
`;

export const HomeImage$ = styled.img`
  position: absolute;
  width: 50vw;
  height: 100%;
  top: 0;
  left: -10px;
  object-fit: cover;
  z-index: -1;
  display: none;
  @media screen and (max-width: 1399px) {
    display: block;
  }
  @media screen and (max-width: 699px) {
    display: none;
  }
 
`;

export const HomeImageFooter = styled.img`
  display: none;

  @media screen and (max-width: 699px) {
    display: block;
    position: fixed;
    width: 100%;
    height: 100%;
    top: 40px;
    left: 0;
    object-fit: cover;
    z-index: -1;
  }
`;
export const HomeButtonContainer = styled.div`
  text-align: start;
  width: 100%;
  padding-bottom: 2%;
  padding-left: 2%;
  display: flex;
  align-items: center; /* Выравнивание элементов по вертикали */
  justify-content: flex-end; /* Выравнивание элементов по горизонтали */
`;

export const HomeButton = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: start;
  margin-left: 2%;
  background: #050505;
  color: #fff;
  text-decoration: none;
  font-weight: bold;
 
  border: 2px solid #fff;
  padding: 1% 2%;
  transition: background-color 0.3s, color 0.3s;

  &:hover {
    background-color: #fff;
    color: #000;
  }
 
    @media screen and (max-width: 1399px) and (min-width: 700px) {
    font-size: 1.3vw;
    margin-left: 2%; /* Добавляем отступ слева */
    margin-right: 2%; /* Добавляем отступ справа */
  }

  @media screen and (max-width: 699px) {
    font-size: 3.2vw;
    margin-top: 1%;
 
  }

 
`;
