import styled from "styled-components";
import { NavLink } from "react-router-dom";

const HeaderWrapper = styled.header`
  position: relative;
  margin: auto;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  height: 100px;
  background: inherit;
  overflow: hidden; /* Предотвращает выход за границы */
`;

const Title = styled.h1`
  display: flex;
  align-content: center;
  margin: 0 10px; /* Перемещает заголовок влево */
  align-items: center;
  color: #ffffff;
  font-size: 34px;

  @media screen and (max-width: 768px) {
    font-size: 24px; /* Уменьшаем размер шрифта для мобильных устройств */
  }
`;

const Nav = styled.nav`
  position: absolute;
  display: flex;
  align-items: center;
  right: 50px; /* Перемещаем навигацию вправо */
  
  @media screen and (max-width: 768px) {
    position: static; /* Переключаем позиционирование для мобильных устройств */
    justify-content: flex-end; /* Выравниваем элементы по правому краю */
    width: 100%; /* Растягиваем навигацию на всю ширину */
    margin-top: 10px; /* Добавляем небольшой отступ сверху */
  }
`;

const Button = styled(NavLink)`
  display: flex;
  align-items: center;
  color: white;
  border: none;
  background-color: transparent;
  cursor: pointer;
  text-decoration: none;
  font-size: 16px;
  border-radius: 3px;
  border-bottom: 3px;
  margin-left: -15px; /* Уменьшаем расстояние между кнопками */
  

  &:first-child {
    margin-left: 0; /* Убираем отступ у первой кнопки */
  }
  
  @media screen and (max-width: 768px) {
    margin: 0 5px; /* Уменьшаем отступы для мобильных устройств */
  }
`;

const StyledLink = styled.div`
  align-items: center;
  display: flex;
  font-size: 10px;
  margin-left: -30px; /* Уменьшаем расстояние между иконками */

  @media screen and (max-width: 768px) {
    margin: 0 5px; /* Уменьшаем отступы для мобильных устройств */
  }
`;

const Icon = styled.span`
  color: #737272;
  font-size: 24px;
  transition: transform 0.3s;
  transform: scale(${props => props['data-isHovered'] ? '1.33' : '1'}); /* Используем data-isHovered */
  margin: 0 5px; /* Добавляем небольшое расстояние между иконками */

  @media screen and (max-width: 768px) {
    font-size: 20px; /* Уменьшаем размер иконок для мобильных устройств */
  }
`;

export { HeaderWrapper, Title, Nav, Button, StyledLink, Icon };
