import React from 'react';
import styled, { keyframes } from 'styled-components';





// Ключевая анимация для смены кадров спрайта
const spriteAnimation = keyframes`
  0% { background-position: 0 0; }
  100% { background-position: -700px 0; } /* Предполагаем, что ваш спрайт имеет ширину 800px */
 /* 0% { left: 0; }
  100% { left: calc(100% - 80px); }*/
`;

// Стили для контейнера спрайта
const SpriteContainer = styled.div`
  position: fixed; /* Позиционируем абсолютно */
  top: 78.5%; /* Размещаем по вертикали по центру */
  left: 10%; /* Размещаем по горизонтали в левом краю */

  width: 80px; /* Ширина спрайта */
  height: 100px; /* Высота спрайта */
  background-image: url(${sprite});
  background-size: cover; /* Растягиваем спрайт на весь размер контейнера */
  animation: ${spriteAnimation} 1s steps(7) infinite;

  @media screen and (max-width: 375px) and (orientation: portrait) { /* Portrait mode for iPhone SE, 5, 5S, 5C */
    top: 77.5%; /* Размещаем по вертикали по центру */
    left: 25%; /* Размещаем по горизонтали по центру */
  }
`;

const SpriteAnimation = () => {
    return (
        <SpriteContainer />

    );
};

export default SpriteAnimation;
