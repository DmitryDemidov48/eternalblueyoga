import React from 'react';

import seminar from '../img/seminar.jpg';

import HeaderFooter from "../components/Menu/HeaderFooter";
import { styled } from "styled-components";
import {HomeContainer} from "./Home";

export const ContainerSeminars = styled.div`
  
  width: 100%;
  overflow: hidden;
/*  border: 2px solid red;*/
  
  @media screen and (max-width: 1250px) {
    width: 60%;
    height: auto;
   margin: 3% 10% 0 -5%;
    display: flex;
    align-content: center;
    justify-content: center;


  }
  @media screen and (max-width: 700px) {
    width: 100%;
    margin: 5% 0 7% 0;
    height: auto;
    overflow-y: auto;

  }

`;
export const PosterContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr; /* Одна равномерная колонка */
  margin-right: 0;
  background-color: white;
  width: 50%;
  height: auto;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  /*border: 2px solid #1482dc;*/
  overflow: hidden;
  transition: max-height 1s ease;
  padding-bottom: 3%;
  padding-top: 1%;
  padding-left: 1%;

  @media screen and (max-width: 1250px) {

    width: 100%;


  }
  @media screen and (max-width: 700px) {
    width: 100%;
    margin: 5% 0 7% 0;
    height: auto;
    overflow-y: auto;

  
`;
export const Poster = styled.div`
  display: flex;
  align-content: start;
 width: 100%;
  padding: 3px;
/*  border: 2px solid red;*/
  overflow: hidden;
  background-color: #fff;
 /* @media screen and (max-width: 1300px) {

    width: 50%;

    
  }
  @media screen and (max-width: 700px) {
    width: 100vw;

    margin-right: 0;
    margin-left: 0;
  }*/
`;

export const PosterImage = styled.img`
  width: 50%;
  border-radius: 5px;
  height: auto;
 /* border: 2px solid #dc1414;*/
  object-fit: cover;
 
`;

export const PosterTitle = styled.h2`
  color: #673ab7;
  font-size: 20px;
/*  border: 2px solid #dc1414;*/
  font-family: Georgia, serif;
  font-weight: 500;
  margin-top: 0;
  padding:5%;
  text-align: center;
  
 
`;

export const PosterDate = styled.p`
  font-family: Georgia, serif;
  font-weight: 600;
  color: #333;
  font-size: 12px;

 /* border: 2px solid #dc1414;*/
`;

export const PosterDescription = styled.p`
  background-color: #fff;
  color: #0c0c0c;
  font-size: 17px;
  overflow: hidden;
/*  border: 2px solid #dc1414;*/
  font-family: Georgia, serif;
  font-weight: 400;
  height: auto;
  padding-right: 2%;
  padding-left: 2%;

  @media screen and (max-width: 1250px) {

   font-size: 15.8px;


  }
  @media screen and (max-width: 700px) {
  font-size: 15px;


`;


export const SemImage = styled.img`
  position: fixed;
  width: 50vw; /* Ширина изображения равна ширине видимой области браузера */
  height: 100vh; /* Высота изображения равна высоте видимой области браузера */
  top: 0;
  left: 0;
  display: none;
  object-fit: cover; /* Масштабирование изображения так, чтобы оно полностью покрывало контейнер */
  z-index: -1;
  @media screen and (max-width: 1250px) {
    display: block; /* Показываем изображение при разрешении экрана меньше 1400px */

  }
  @media screen and (max-width: 700px) {
    display: none;
  }
`;
export const SemImage1 = styled.img`
  position: absolute;
  width: 60vh;
  height: auto;
  top: -10%;
  right: 0;
  object-fit: cover;


  @media screen and (max-width: 1250px) {
    display: none;
  }
`;
const EventCalendar = () => {
    const eventsData = [

        { title: 'Семинар ', date: '2024', image:`${seminar}`, description: 'Присоединяйтесь к нашему увлекательному семинару о йоге, где каждый момент наполнен гармонией и спокойствием. В этом путешествии мы вместе углубимся в изысканное искусство йоги, открывая для себя новые горизонты практики и самопознания.\n' +
                '\n' +
                'Наши опытные инструкторы, с мудростью и любовью к йоге, будут рядом с вами на каждом шагу этого увлекательного пути. Они поделятся своими знаниями и опытом, помогая вам понять тонкости асан и глубоких методов медитации.' },


    ];

    return (
<>
   <HeaderFooter/>
     <HomeContainer>
         {/*<SemImage1 src={imgR} alt="My Photo"/>
         <SemImage src={imgL} alt="My Photo"/>*/}
         <ContainerSeminars>
            {eventsData.map((event, index) => (
                <PosterContainer key={index}>
                    <Poster>
                        <PosterImage src={event.image} alt={event.title} />
                        <PosterDescription>
                            <PosterTitle>{event.title}{event.date}</PosterTitle>
                            {event.description}</PosterDescription>
                    </Poster>
                    <PosterDescription>В нашем уютном пространстве вы обретете внутреннюю силу и уверенность, научитесь слушать свое тело и ум, и обретете гармонию с окружающим миром. Здесь вы найдете поддержку и вдохновение для своего личного роста и развития.

                        Присоединяйтесь к нам и станьте частью нашего сообщества, где каждый человек уникален и ценен. Давайте вместе создадим пространство, наполненное светом, любовью и взаимопониманием. Добро пожаловать в мир йоги, где каждый день - новое открытие и новое возможность погрузиться в глубины своего собственного бытия.</PosterDescription>
                </PosterContainer>
            ))}
                </ContainerSeminars>
     </HomeContainer>
    </>
    );
};

export default EventCalendar;
