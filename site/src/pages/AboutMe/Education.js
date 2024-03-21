import React from 'react';
import styled from 'styled-components';
import { Link } from "react-router-dom";

import {HomeHeader} from "../../styled/HomeStyles";

// Стили для контейнера с образованием
const EducationContainer = styled.div`
  position: fixed;
  margin: 0 auto;
  left: 0;
  width: 100%;
  height: 100%;
  background: #ffffff;


  @media screen and (min-width: 700px) and (max-width: 1400px) {
    max-width: 100%; /* Максимальная ширина контейнера */
    margin-left: 200px; /* Отступ слева на 20% при ширине экрана от 700px до 1400px */
  }
`;

// Стили для заголовка образования
const EducationTitle = styled.h2`
  margin-top: 50px;
  font-size: 24px;
  margin-bottom: 20px; /* Отступ снизу */

  @media screen and (min-width: 700px) and (max-width: 1400px) {
    margin-top: 40px;
    margin-right: 200px;
  }
  @media screen and (max-width: 700px){
    margin-top: 100px;
    margin-bottom: 10px; /* Отступ снизу */
  }
`;

// Стили для текста об образовании
const EducationText = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #0e0e0e;
  font-size: 18px;
  line-height: 1.2;
  margin-top: 50px;
  @media screen and (min-width: 700px) and (max-width: 1400px) {
    margin-top: 40px;
    margin-right: 200px;
  }
  @media screen and (max-width: 700px){
    margin-top: 40px;
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
  }
`;

const Education = () => {
    return (
        <>
            <HomeHeader>

                <BackButton to="/about">Назад</BackButton>
            </HomeHeader>
            <EducationContainer>
                <EducationTitle>Моё образование</EducationTitle>
                <EducationText>
                    Приветствую вас на странице, где я подробно расскажу о своем учебном пути в области йоги и хатха йоги. Учение и практика хатха йоги стали неотъемлемой частью моей жизни более 12 лет. В этом времени я прошел через различные этапы учебы и практики, каждый из которых принес мне новые знания, опыт и глубокое понимание мира йоги.
                    Мое образование включает в себя:
                    Учебные заведения: Я начал свой путь в мире йоги в известной йога-школе "Шри Шри Йога". Здесь я получил фундаментальные знания о философии йоги, асанах, дыхательных практиках и медитации.
                    Степени и сертификаты: В процессе моего обучения я получил сертификаты от йога-школы "Шри Шри Йога" и других аккредитованных учебных заведений. Эти сертификаты подтверждают мои знания и квалификацию в области хатха йоги.
                    Академические достижения: Моя постоянная практика и стремление к совершенству привели к множеству достижений в области йоги. Я активно участвую в различных йога-семинарах, мастер-классах и тренингах, что помогает мне постоянно совершенствоваться и расширять свои знания.
                    На этой странице вы найдете подробную информацию о моем образовании в области хатха йоги, а также о том, как это образование отразилось на моей практике и на моей жизни в целом.
                </EducationText>
            </EducationContainer>
        </>
    );
};

export default Education;
