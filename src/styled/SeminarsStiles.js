import { styled } from "styled-components";

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  width: 100%;
  height: 85vh; /* Максимальная высота контейнера */
 
  overflow: hidden;
/*  border: 1px solid #0719da;*/

  @media screen and (max-width: 1400px) {

    height: 91vh;
    display: flex; /* Используем flexbox */
    align-items: center; /* Выравниваем контент по вертикали */
    justify-content: flex-end; /* Выравниваем контент по правому краю */
  }

  @media screen and (max-width: 700px) {
    margin-top: 5%;
    justify-content: center; /* Центрирование по горизонтали */
  }
`;

export const PosterContainer = styled.div`
  display: block;
  grid-template-columns: 1fr; /* Одна равномерная колонка */

  padding: 0;
  margin-left: 7%;
  background-color: white;
  width: 35%;
  height: 90%;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
/*  border: 2px solid #dc1414;*/
  overflow: hidden;
  transition: max-height 1s ease;
  border-radius: 5px;
  
  &:hover {
    max-height: none; /* Убираем ограничение высоты при наведении */
  }
  @media screen and (max-width: 1400px) {
    margin-right: 5%;
    width: 40%;
    
 
  }
  @media screen and (max-width: 700px) {
    width: 100%;
   height: auto;
    margin-right: 0;
    margin-left: 0;
  }
`;
export const Poster = styled.div`
 width: 30%;
  padding: 3px;
  display: flex;
  align-items: center; /* Выравнивание контейнеров по верхнему краю */
  justify-content: center; /* Выравнивание контейнеров слева */
 /* border: 2px solid red;*/
  overflow: hidden;
  background-color: #fff;
  @media screen and (max-width: 1400px) {

    width: 50%;

    
  }
  @media screen and (max-width: 700px) {
    width: 100vw;

    margin-right: 0;
    margin-left: 0;
  }
`;

export const PosterImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 10px;
  margin-bottom: 10px;
 /* border: 2px solid #dc1414;*/
  object-fit: cover;
  @media screen and (max-width: 1400px) {
   
    width: 100%;

    margin-top: -5%;
  }
  @media screen and (max-width: 700px) {
    width: 100vw;
    
    margin-right: 0;
    margin-left: 0;
  }
  
`;

export const PosterTitle = styled.h2`
  color: #673ab7;
  font-size: 20px;
  
 /* border: 2px solid #dc1414;*/
  font-family: Georgia, serif;
  font-weight: 500;
`;

export const PosterDate = styled.p`
  font-family: Georgia, serif;
  font-weight: 600;
  color: #333;
  font-size: 14px;

  /*border: 2px solid #dc1414;*/
`;

export const PosterDescription = styled.p`
  background-color: #fff;
  color: #0c0c0c;
  font-size: 16px;
  overflow: hidden;
 /* border: 2px solid #dc1414;*/
  font-family: Georgia, serif;
  font-weight: 400;
  height: auto;
 
  padding: 15px;
  margin-top: 2%;
`;


export const SemImage = styled.img`
  position: absolute;
  width: 50vw; /* Ширина изображения равна ширине видимой области браузера */
  height: 100vh; /* Высота изображения равна высоте видимой области браузера */
  top: 0;
  left: -10px;
  display: none;
  object-fit: cover; /* Масштабирование изображения так, чтобы оно полностью покрывало контейнер */
  z-index: -1;
  @media screen and (max-width: 1400px) {
    display: block; /* Показываем изображение при разрешении экрана меньше 1400px */

  }
  @media screen and (max-width: 700px) {
    display: none;
  }
`;
export const SemImage1 = styled.img`
  position: absolute;
  width: 50%;
  height: 100%;
  top: 0;
  right: 0;
  object-fit: cover;
  z-index: -1;
  @media screen and (max-width: 1400px) {
    display: none;
  }
 
`;