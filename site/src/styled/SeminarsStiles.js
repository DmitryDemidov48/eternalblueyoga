import { styled } from "styled-components";

export const Container = styled.div`
  position: fixed;
  text-align: start;
  margin: 0 auto;
  left: 0;
  width: 100%;
  height: 100%;
  background: #090909;
  z-index: -1;


  @media screen and (max-width: 1400px) {

    display: flex;
    justify-content: end;
    margin: 0 auto ;
    text-align: center;
    width: 100%;
    height: 100%;
    padding: 0;
    background: #050505;
    align-items: center;

  }
  @media screen and (max-width: 700px) {
    margin: 0 auto ;
    text-align: center;
    width: 100%;
    height: 100%;
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #fafafa;
  }
`;

export const PosterContainer = styled.div`
  background-color: #fff;
  padding: 20px;
  width: 50vh;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);

  margin: 60px 0 80px 200px;
  overflow: hidden;
  transition: max-height 1s ease;
  
  &:hover {
    max-height: none; /* Убираем ограничение высоты при наведении */
  }
  @media screen and (max-width: 1400px) {
    margin: 0 80px 80px 40px;
    width: 35vw;
    padding: 10px;
  }
  @media screen and (max-width: 700px) {
    margin: 30px;
    width: auto;
    height: auto;
  }
`;

export const PosterImage = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 10px;
  margin-bottom: 10px;
`;

export const PosterTitle = styled.h2`
  color: #673ab7;
  font-size: 20px;
  margin-bottom: 5px;
`;

export const PosterDate = styled.p`
  color: #333;
  font-size: 14px;
  margin-bottom: 5px;
`;

export const PosterDescription = styled.p`
  color: #777;
  font-size: 16px;
  overflow: hidden;
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
  display: block;
  position: fixed;
  width: 100vh;
  height: 100%;
  top: 40px;
  right: -10px;
  object-fit: cover;
  margin-top: -40px;
  z-index: -1;
  @media screen and (max-width: 1400px) {
    display: none;
  }
 
`;