import React from 'react';
import { MenuData } from "../add/MenuData";
import {useHover} from "../../hook/useHover";
import InfinityAnimation from "../../animation/eternal";
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
  max-width: 100%; /* Обеспечивает, чтобы максимальная ширина была равна ширине родительского элемента */
 /* border: 2px solid red;*/
`;
const HeaderMenu = styled.div `
  display: flex;
  align-items: center; /* Центрируем по вертикали */
  justify-content: center; /* Центрируем по горизонтали */
  width: 50%;
  margin-right: 0;
  height: 100%;
  background: white;
 /* border: 2px solid red;*/
 
`;
const Title = styled.h1`
  font-family: Georgia, serif;
  font-weight: 400;
  display: flex;
  align-items: center;
  color: #ffffff;
  font-size: 24px;
/*  border: 2px solid red;*/
  @media screen and (max-width: 700px) {
    font-size: 24px; /* Уменьшаем размер шрифта для мобильных устройств */
  }
`;
const Nav = styled.nav`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: Georgia, serif;
  font-weight: 200;
 
/*  border: 2px solid red;*/
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

const MainHeader = () => {
    const [hoveredIcons, handleMouseEnter, handleMouseLeave] = useHover();

    return (
        <HeaderWrapper>
            <Title> Eternal Blue Yoga<InfinityAnimation/></Title>
        <HeaderMenu>
            <Nav >
                {MenuData.map(({ title, path, icon }) => (
                    <StyledLink key={title} onMouseEnter={() => handleMouseEnter(title)} onMouseLeave={() => handleMouseLeave(title)}>
                        <Icon data-isHovered={hoveredIcons[title]}>{icon}</Icon>
                        <Button to={path}>{title}</Button>
                    </StyledLink>
                ))}
            </Nav>
        </HeaderMenu>
        </HeaderWrapper>
    );
};

export default MainHeader;