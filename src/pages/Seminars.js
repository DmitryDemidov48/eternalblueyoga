import React from 'react';
import imgR from '../img/semRight.JPG';
import seminar from '../img/seminar.jpg';
import imgL from '../img/semleft.png';
import HeaderFooter from "../components/Menu/HeaderFooter";
import { styled } from "styled-components";
import {HomeContainer} from "./Home";

export const ContainerSeminars = styled.div`
/*border: 2px solid red;*/
  padding-bottom: 30%;
`;
export const PosterContainer = styled.div`
  display: block;
  grid-template-columns: 1fr; /* Одна равномерная колонка */
  margin-left: 7%;
  background-color: white;
  width: 35%;
  height: auto;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  /*border: 2px solid #dc1414;*/
  overflow: hidden;
  transition: max-height 1s ease;
  border-radius: 2px;
  
  &:hover {
    max-height: none; /* Убираем ограничение высоты при наведении */
  }
  @media screen and (max-width: 1300px) {
    margin-right: 0;
    width: 48%;
    height: auto;
    margin-top: -5%;
    
 
  }
  @media screen and (max-width: 700px) {
    width: 100%;
    margin: 5% 0 7% 0;
    height: auto;
    overflow-y: auto;
   
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
  @media screen and (max-width: 1300px) {

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
  @media screen and (max-width: 1300px) {
   
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
 
  padding: 10px;
  margin-top: 1%;
`;


export const SemImage = styled.img`
  position: absolute;
  width: 50vw; /* Ширина изображения равна ширине видимой области браузера */
  height: 100vh; /* Высота изображения равна высоте видимой области браузера */
  top: 0;
  left: 0;
  display: none;
  object-fit: cover; /* Масштабирование изображения так, чтобы оно полностью покрывало контейнер */
  z-index: -1;
  @media screen and (max-width: 1300px) {
    display: block; /* Показываем изображение при разрешении экрана меньше 1400px */

  }
  @media screen and (max-width: 700px) {
    display: none;
  }
`;
export const SemImage1 = styled.img`
  position: absolute;
  width: 50%;
  height: auto;
  top: 0;
  right: 0;
  object-fit: cover;


  @media screen and (max-width: 1300px) {
    display: none;
  }

 
`;

const EventCalendar = () => {
    const eventsData = [

        { title: 'Семинар ', date: '2024', image:`${seminar}`, description: 'Присоединяйтесь к нашему увлекательному семинару о йоге, где вы сможете погрузиться в атмосферу гармонии и внутреннего спокойствия. Получите знания и навыки от опытных инструкторов, научитесь новым асанам и методам медитации, и обретите внутреннюю силу и уверенность.' },


    ];

    return (
<>
   <HeaderFooter/>
     <HomeContainer>
         <SemImage1 src={imgR} alt="My Photo"/>
         <SemImage src={imgL} alt="My Photo"/>
         <ContainerSeminars>
            {eventsData.map((event, index) => (
                <PosterContainer key={index}>
                    <PosterImage src={event.image} alt={event.title} />
                    <Poster>
                    <PosterTitle>{event.title}</PosterTitle>
                    <PosterDate>{event.date}</PosterDate>
                    </Poster>
                    <PosterDescription>{event.description}</PosterDescription>
                </PosterContainer>
            ))}
                </ContainerSeminars>
     </HomeContainer>
    </>
    );
};

export default EventCalendar;
