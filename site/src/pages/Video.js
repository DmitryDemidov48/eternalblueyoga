import React from 'react';
import styled from 'styled-components';


import HeaderFooter from "../components/Menu/HeaderFooter";

const Container = styled.div`
  position: fixed;
  margin: 0 auto;
  left: 0;
  width: 100%;
  height: auto;
  background: #f5efe7;
  overflow-y: auto; /* Добавляем вертикальный скроллинг при необходимости */

  @media screen and (min-width: 700px) and (max-width: 1400px) {
    max-width: 100%;
    margin-left: 200px;
    height: calc(120% - 20px); /* Отнимаем высоту футера от высоты контейнера */

  }
  @media screen and (max-width: 700px) {
    margin-top: 50px;
    height: calc(120% - 50px); /* Отнимаем высоту футера от высоты контейнера */
  }
`;


const ScrollableContainer = styled.div`
  width: 90%; /* Ширина контейнера с фотографиями */
  max-height: 80%; /* Максимальная высота контейнера */
  overflow-y: auto; /* Включаем вертикальную прокрутку */
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  @media screen and (max-width: 1400px)  {
margin-left: -50px;

  }
  @media screen and (max-width: 700px)  {
  
margin: 0 auto;
  }
`;

const ImageWrapper = styled.div`
  width: 300px; /* Ширина фотографии */
  height: 300px; /* Высота фотографии */
  margin: 10px; /* Отступ между фотографиями */
  
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: grayscale(100%); /* Превращение изображений в черно-белый */
  image-rendering: pixelated; /* Пиксельный эффект */
 
`;



const Photo = () => {
    return (
        <>
            <HeaderFooter></HeaderFooter>
            <Container>
                <ScrollableContainer>
                 <h1>2222</h1>
                </ScrollableContainer>
            </Container>

        </>
    );
};

export default Photo;
