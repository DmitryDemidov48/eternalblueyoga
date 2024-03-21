import React from 'react';
import styled from 'styled-components';
import { Link } from "react-router-dom";

import { HomeHeader } from "../../styled/HomeStyles";

const Container = styled.div`
  position: fixed;
  margin: 0 auto;
  left: 0;
  width: 100%;
  height: calc(100% - 70px); /* Отнимаем высоту футера от высоты контейнера */
  background: #ffffff;
  overflow-y: auto; /* Добавляем вертикальный скроллинг при необходимости */

  @media screen and (min-width: 700px) and (max-width: 1400px) {
    max-width: 100%;
    margin-left: 200px;

  }
  @media screen and (max-width: 700px) {
    height: calc(100% - 50px); /* Отнимаем высоту футера от высоты контейнера */
  }
`;

const Title = styled.h2`
  margin-top: 50px;
  font-size: 24px;
  margin-bottom: 30px;

  @media screen and (min-width: 700px) and (max-width: 1400px) {
    margin-top: 40px;
    margin-right: 200px;
  }
  @media screen and (max-width: 700px){
    margin-top: 100px;
    margin-bottom: 30px;
  }
`;

const ParagraphContainer = styled.div`

`;

const ParagraphTitle = styled.span`
 
  margin: 20px;
  font-weight: bold;
  font-size: 15px;
  color: #333;
  text-transform: uppercase;
  border-bottom: 2px solid #333;
  padding-bottom: 5px;
  letter-spacing: 1px;
  text-align: left; /* Прижимаем текст к левому краю */

  @media screen and (max-width: 699px) {
    margin-left: 0;
  }

  @media screen and (min-width: 700px) and (max-width: 1400px) {
    margin-left: 0;
  }

  @media screen and (min-width: 1401px) {
    margin-left: 0;
  }
`;



const Paragraph = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #0e0e0e;
  font-size: 18px;
  line-height: 1.2;
  margin-top: 20px;

  @media screen and (min-width: 700px) and (max-width: 1400px) {
    margin-right: 200px;
    margin-bottom: 20px;
  }
  @media screen and (max-width: 700px){
    margin-top: 20px;
    margin-bottom: 20px;
  }
`;

const BackButton = styled(Link)`
  margin: 20px;
  display: inline-block;
  padding: 8px 16px;
  background-color: #f8f9fa;
  color: #0c0c0c;
  text-decoration: none;
  border-radius: 5px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0e60c5;
  }
`;

const SeminarsAndWorkshops = () => {
    return (
        <>
            <HomeHeader> <BackButton to="/about">Назад</BackButton> </HomeHeader>
            <Container>
                <Title>Семинары и мастер-классы</Title>
                <ParagraphContainer>
                    <ParagraphTitle>1<strong>Лекции</strong></ParagraphTitle>
                    <Paragraph>
                        Первым шагом в индивидуальном обучении является изучение ваших потребностей и целей. На основе этой информации я разрабатываю уникальную программу, которая наилучшим образом соответствует вашим запросам.
                    </Paragraph>
                    <ParagraphTitle>1<strong>Семинары</strong></ParagraphTitle>
                    <Paragraph>
                        Первым шагом в индивидуальном обучении является изучение ваших потребностей и целей. На основе этой информации я разрабатываю уникальную программу, которая наилучшим образом соответствует вашим запросам.
                    </Paragraph> <ParagraphTitle>1<strong>Мастер-классы</strong></ParagraphTitle>
                    <Paragraph>
                        Первым шагом в индивидуальном обучении является изучение ваших потребностей и целей. На основе этой информации я разрабатываю уникальную программу, которая наилучшим образом соответствует вашим запросам.
                    </Paragraph>
                    <ParagraphTitle>1<strong>Мастер-классы</strong></ParagraphTitle>
                    <Paragraph>
                        Первым шагом в индивидуальном обучении является изучение ваших потребностей и целей. На основе этой информации я разрабатываю уникальную программу, которая наилучшим образом соответствует вашим запросам.
                    </Paragraph>
                </ParagraphContainer>
            </Container>
        </>
    );
};

export default SeminarsAndWorkshops;
