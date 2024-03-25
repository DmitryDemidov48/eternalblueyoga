import styled from "styled-components";
import { NavLink } from "react-router-dom";

const HeaderWrapper = styled.header`
  position: relative;
  margin: 0; /* Убираем внешние отступы, чтобы контейнер прилегал к краям <body> */
  width: 100%; /* Занимает всю доступную ширину */
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100px;
  background: inherit;
  overflow: hidden; /* Предотвращает выход за границы */
  z-index: 999;
  
 
  max-width: 100%; /* Обеспечивает, чтобы максимальная ширина была равна ширине родительского элемента */

`;

const HeaderMenu = styled.div `
  display: flex;
  align-items: center; /* Центрируем по вертикали */
  justify-content: center; /* Центрируем по горизонтали */
  width: 50%;
  margin-right: 0;
  height: 100%;
  background: white;
 
 
`;


const Title = styled.h1`
  font-family: Georgia, serif;
font-weight: 400;
  display: flex;
  align-content: center;
  
  align-items: center;
  color: #ffffff;
  font-size: 24px;
margin-left: 17%;

  background-position: 0 100%;
  background-size: 100% 2px; /* Ширина и высота подчеркивания */
  background-repeat: no-repeat;


  @media screen and (max-width: 700px) {
    font-size: 24px; /* Уменьшаем размер шрифта для мобильных устройств */
  }
`;

const Nav = styled.nav`
  position: absolute;
  display: flex;
  align-items: center;
  font-family: Georgia, serif;
  font-weight: 200;
  right: 40px; /* Перемещаем навигацию вправо */
  @media screen and (max-width: 700px) {
    position: static; /* Переключаем позиционирование для мобильных устройств */
    justify-content: flex-end; /* Выравниваем элементы по правому краю */
    width: 100%; /* Растягиваем навигацию на всю ширину */
    margin-top: 10px; /* Добавляем небольшой отступ сверху */
  }
`;

const Button = styled(NavLink)`
  display: flex;
  align-items: center;
  font-family: Georgia, serif;
  font-weight: 200;
  color: #050505;
  border: none;
  background-color: transparent;
  cursor: pointer;
  text-decoration: none;
  font-size: 16px;
 
 
 

  &:first-child {
    margin-left: 0; /* Убираем отступ у первой кнопки */
  }

  @media screen and (max-width: 700px) {
    margin: 0 5px; /* Уменьшаем отступы для мобильных устройств */
  }
`;

const StyledLink = styled.div`

  display: flex;


  border: 14px solid white;

  @media screen and (max-width: 700px) {
    margin: 0 5px; /* Уменьшаем отступы для мобильных устройств */
  }
`;

const Icon = styled.span`
  color: #0e0e0e;
  font-size: 24px;
  transition: transform 0.3s;
  transform: scale(${props => props['data-isHovered'] ? '1.33' : '1'}); /* Используем data-isHovered */
  margin: 0 5px; /* Добавляем небольшое расстояние между иконками */
  @media screen and (max-width: 700px) {
    font-size: 20px; /* Уменьшаем размер иконок для мобильных устройств */
  }
`;

export { HeaderWrapper, Title, Nav, Button, StyledLink, Icon,HeaderMenu };
