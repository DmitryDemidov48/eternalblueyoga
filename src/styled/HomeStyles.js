import styled, {keyframes} from "styled-components";
import {Link} from "react-router-dom";

export const HomeContainer = styled.div`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  width: 100%;
  height: 100vh; /* Максимальная высота контейнера */
  padding: 2%; /* Отступ внутри контейнера */
  overflow: hidden;
/*  border: 1px solid #0719da;*/

  @media screen and (max-width: 1400px) {

    height: 91vh;
    display: flex; /* Используем flexbox */
    align-items: center; /* Выравниваем контент по вертикали */
    justify-content: flex-end; /* Выравниваем контент по правому краю */
  }

  @media screen and (max-width: 700px) {
margin-top: 8%;
    height: 93vh;
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
  cursor: pointer;

  > * {
    transition: transform 0.3s; /* Анимация при изменении размера */
  }

  > *:hover {
    transform: scale(1.2); /* Увеличиваем размер при наведении */
  }
`;
export const HomeIcons = styled.div`
  position: relative;
  font-size: 25px;
  color: white;
  display: grid;
  grid-auto-flow: column; /* Размещаем элементы в строку */
  align-items: end;
  gap: 15px; /* Отступ между элементами */
  cursor: pointer;

  > * {
    transition: transform 0.3s; /* Анимация при изменении размера */
  }

  > *:hover {
    transform: scale(1.2); /* Увеличиваем размер при наведении */
  }

  @media screen and (max-width: 1400px) {
    display: none;
  }
  @media screen and (max-width: 700px) {
    display: none;
  }
  
`;


export const HomeHeader = styled.header`
  display: none;
  justify-content: space-between;
  align-items: center;
  border: 1px solid white;
  flex-direction: row-reverse;
  width: 100%;
  background-color: #090909;
  position: relative;

 
  @media screen and (max-width: 1400px) {
    display: flex;
    position: fixed;
z-index: 999;
 bottom: 0;
    left: 0; /* Выравниваем по левому краю */
  }
  @media screen and (max-width: 700px) {
    display: flex;
    position: fixed;
    height: 8%;
    top: 0; /* Прижимаем к верхней части экрана */
    left: 0; /* Выравниваем по левому краю */
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
  position: relative;
  background-color: inherit;
  width: 50%;
  height: auto;
  margin-left: -1%;
  display: flex;
  overflow: hidden;
  flex-direction: column; /* Расположение элементов в столбце */
/*  border: 2px solid #0762da;*/
  /* Добавляем отступ снизу между текстом и кнопкой */
  gap: 20px;
  @media screen and (max-width: 1400px) {
margin-right: -1%;
margin-top: -10%;
    
  }

  @media screen and (max-width: 700px) {
  
    width: auto;
    height: auto;
 
  }
`;



export const HomePosterTitle = styled.h1`
  font-family: Georgia, serif;
  background: white;
  color: #070707;
  font-weight: 400;
  font-size: 20px; /* Используйте фиксированный размер шрифта в пикселях */
  line-height: 25px; /* Укажите фиксированную высоту строки в пикселях */
  letter-spacing: 2px;
  margin-top: 0;
  padding: 15px;
  text-align: start;
 /* border: 2px solid #da0707;*/
  border-radius: 5px;
  width: 50%;
  height: auto;
  margin-right: 0;

  @media screen and (max-width: 1400px) and (min-width: 700px) {
  
    font-size: 2vw; /* Размер шрифта для экранов от 700px до 1399px */
    line-height: 2vw; /* Высота строки для экранов от 700px до 1399px */
  }

  @media screen and (max-width: 700px) {
    font-size: 3.2vw; /* Размер шрифта для экранов до 699px */
    margin-top: 1vw; /* Отступ сверху для экранов до 699px */
    line-height: 5vw;
    background: inherit;
    color: white;
  }
`;

export const HomePosterDescription = styled.p`

  font-family: Georgia, serif;
  background: white;
  color: #0c0c0c;
  font-size: 20px; /* Используйте фиксированный размер шрифта в пикселях */
  line-height: 22px; /* Укажите фиксированную высоту строки в пикселях */
  text-align: left;
  font-weight: 400;
 /* border: 2px solid #dc1414;*/
  border-radius: 5px;
  margin-top: 5%;
  padding: 15px;
  width: 80%;
  height: auto;

  @media screen and (max-width: 1400px) and (min-width: 700px) {
    font-size: 1.5vw; /* Размер шрифта для экранов от 700px до 1399px */
    line-height: 1.8vw; /* Высота строки для экранов от 700px до 1399px */
  }

  @media screen and (max-width: 700px) {
    margin-top: 5px; /* Отступ сверху для экранов до 699px */
    line-height: 5vw; /* Высота строки для экранов до 699px */
    font-size: 4vw; /* Размер шрифта для экранов до 699px */
    background: inherit;
    color: white;
  }
`;

export const HomeImage = styled.img`
  position: absolute;
  width: 50%;
  height: auto;
  top: -50%;
  right: 0;
  object-fit: cover;
  z-index: -1;

  @media screen and (max-width: 1400px) {
    display: none;
  }
`;

export const HomeImage1 = styled.img`
  position: absolute;
  width: 50vw;
  height: 94vh;
  top: 0;
  left: -50px;
  object-fit: cover;
  z-index: -1;
  display: none;
  @media screen and (max-width: 1400px) {
    display: block;
  }
  @media screen and (max-width: 700px) {
    display: none;
  }
 
`;

export const HomeImageFooter = styled.img`
  display: none;

  @media screen and (max-width: 700px) {
    display: block;
    position: absolute;
    width: 100%;
    height: 94vh;
    top: 0;
    left: 0;
    object-fit: cover;
   
  }
`;
export const HomeButtonContainer = styled.div`
  text-align: start;
  width: 100%;
  padding-bottom: 2%;
  padding-left: 2%;
  display: flex;
  align-items: center; /* Выравнивание элементов по вертикали */
  justify-content: start; /* Выравнивание элементов по горизонтали */
`;

export const HomeButton = styled(Link)`
  font-family: Georgia, serif;
  font-weight: 400;
  display: flex;
  align-items: center;
  justify-content: start;
  margin-left: 2%;
  background: white;
  color: #030303;
  text-decoration: none;
  
border-radius: 4px;
  border: 2px solid #fff;
  padding: 1% 2%;
  transition: background-color 0.3s, color 0.3s;

  &:hover {
    background-color: #020202;
    color: white;
  }

  @media screen and (max-width: 1400px) and (min-width: 700px) {
    font-size: 2vw;
    margin-left: 2%; /* Добавляем отступ слева */
    margin-right: 2%; /* Добавляем отступ справа */
  }

  @media screen and (max-width: 700px) {
    font-size: 3.2vw;
    margin-top: 1%;

  }


`;
