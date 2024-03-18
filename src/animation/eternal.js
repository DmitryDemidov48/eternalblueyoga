import React from 'react';
import styled, { keyframes } from 'styled-components';

const flicker = keyframes`
 
  20% {
    opacity: 1; // Начало мерцания через 4 секунды

  }
  50% {
    opacity: 1; // Конечное состояние с полной прозрачностью
  }
  80% {
    opacity: 0.7; // Конечное состояние с полной прозрачностью
  }
  
`;

// Создание стилизованного компонента для SVG
const Svg = styled.svg`
  width: 56px;
  height: 56px;
`;
// Создаем градиент
const Gradient = (
    <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#87ceeb" />
        <stop offset="100%" stopColor="#1e90ff" />
    </linearGradient>
);

// Создаем ключевую анимацию
const draw = keyframes`
  to {
    stroke-dashoffset: 0; // Устанавливаем значение смещения контура на 0
  }
`;

const Path = styled.path`
  stroke-width: 12;
  stroke-dasharray: 750;
  stroke-dashoffset: -700;
  animation: ${draw} 3s linear forwards , ${flicker} 4s ease-in-out infinite; // Применяем анимацию отрисовки и мерцания
`;

// Функциональный компонент, возвращающий SVG-элемент с контуром символа бесконечности
const InfinitySymbol = () => {
    return (
        <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256">
            {/* Добавляем градиент в SVG */}
            <defs>
                {Gradient}
            </defs>
            {/* Применяем градиент к контуру */}
            <Path d="M106.6,152.1l-8.7,10.8a47.9,47.9,0,1,1,0-67.8l60.2,67.8a47.9,47.9,0,1,0,0-67.8l-8.7,9.8Z"   stroke="url(#gradient)" stroke-width="12" stroke-linecap="round" stroke-linejoin="round" />
        </Svg>
    );
};


export default InfinitySymbol;
