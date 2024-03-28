import React from 'react';
import styled from 'styled-components';
import { photos } from '../components/add/PhotoData';

import HeaderFooter from "../components/Menu/HeaderFooter";

const Container = styled.div`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  width: 100%;
  height: 85vh; /* Максимальная высота контейнера */
  padding: 2%; /* Отступ внутри контейнера */
  overflow: hidden;
/*  border: 1px solid #0719da;*/

  @media screen and (max-width: 1300px) {

    height: 91vh;
    display: flex; /* Используем flexbox */
    align-items: center; /* Выравниваем контент по вертикали */
    justify-content: flex-end; /* Выравниваем контент по правому краю */
  }

  @media screen and (max-width: 700px) {
    margin-top: 10%;
   
    justify-content: center; /* Центрирование по горизонтали */
  }
`;


const ScrollableContainer = styled.div`
  width: 100%; /* Ширина контейнера с фотографиями */
  max-height: 100%; /* Максимальная высота контейнера */
  overflow-y: auto; /* Включаем вертикальную прокрутку */
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  @media screen and (max-width: 1300px) {
padding-left: 20%;
    margin-left: 0; /* Убираем отрицательный отступ */
  }

  @media screen and (max-width: 700px) {
    width: 100vw;
padding: 0;
   
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
                    {photos.map((photo) => (
                        <ImageWrapper key={photo.id}>
                            <Image src={photo.src} alt={`Photo ${photo.id}`} />
                        </ImageWrapper>
                    ))}
                </ScrollableContainer>
            </Container>

        </>
    );
};

export default Photo;
