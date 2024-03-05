import styled, { keyframes} from "styled-components";
import {Link, NavLink} from "react-router-dom";

// Анимация для пульсации заголовка
const pulseAnimation = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
`;

// Контейнер для хедера
export const HeaderWrapper = styled.header`
  position: relative;
  top: 0;
  left: 0;
  margin: auto;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  height: 150px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  border-radius: 0 0 60% 20%;
  background: linear-gradient(to right, #1934c2, #673cd3, #b677bd, #83a8c4);
  z-index: 999;
  overflow: hidden; /* Предотвращает выход за границы */
`;

// Заголовок с анимацией пульсации
export const Title = styled.h1`
  
  margin: 50px; /* Перемещает заголовок влево */
  align-items: center;
  color: #ffffff;
  font-size: 24px;
  animation: ${pulseAnimation} 2s infinite; /* Анимация пульсации */
 
`;

// Навигационное меню
export const Nav = styled.nav`
  position: absolute;
  display: flex;
  align-items: center;
  margin-left: 300px;
  
  
`;

// Стили для кнопок
export const Button = styled(NavLink)`
  display: flex;
  align-items: center;
  color: white;
  border: none;
  background-color: transparent;
  cursor: pointer;
  text-decoration: none;
  border-radius: 3px;
  border-bottom: 3px;
  margin-left: -10px;
 
`;

// Стили для обертки ссылок
export const StyledLink = styled.div`
  align-items: center;
  display: flex;
  font-size: 15px;
  
 
 
`;

// Стили для иконок
export const Icon = styled.span`
  color: #131317;
  font-size: 24px;
  transition: transform 0.3s;
  transform: scale(${props => props['data-isHovered'] ? '1.33' : '1'}); /* Используем data-isHovered */
  margin: 0 auto;
`;