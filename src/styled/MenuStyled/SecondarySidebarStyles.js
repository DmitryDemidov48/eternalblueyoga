import styled, {css} from "styled-components";
import { Link } from "react-router-dom";

export const SidebarTitleContainer = styled.div `
  position: fixed;
  top: 0;
  left: 0;
  margin: auto;
  width: 100%;
  padding: 0 20px;
  height: 100px;
 
 
 
  z-index: 999;
  overflow: hidden; /* Предотвращает выход за границы */

  @media screen and (min-width: 1025px) {
    display: none;
  }
  
` ;

export const SidebarTitle = styled.div `
  padding: 25px;
  display: flex;
  justify-content: end;
  color: #ffffff;
  font-size: 24px;
  margin-left: 20px; /* Устанавливаем правый отступ */

  @media screen and (max-width: 1025px) {
    width: calc(100% - 40px); /* Устанавливаем ширину контейнера на всю доступную ширину с отступами */
  }
 
`
export const SidebarContainer = styled.div`
  width: ${props => (props.isOpen ? "200px" : "60px")};
  height: auto;
  margin: 0 auto;
  position: fixed;
  top: 80px;
  left: 0;
  padding: 10px;
  background: inherit;
  overflow-x: hidden;
  transition: width 1.2s;
  display: flex;
  flex-flow: row wrap;
  border: 1px solid #fff;
`;

export const SidebarContent = styled.nav`
  position: relative;
  color: #ffffff;
  text-decoration: none;
  font-size: 18px;
  width: 100%;
  
`;

export const SidebarLink = styled.div`
  display: flex;
  justify-content: flex-start;
  color: #0c0b0b;
  text-decoration: none;
  margin-bottom: 5px;
  position: relative;
`;

export const SidebarButton = styled(Link)`
  color: white;
  border: none;
  background-color: transparent;
  cursor: pointer;
  text-decoration: none;
  width: 100px;
  padding: 10px 10px;
  position: relative;
`;

export const SidebarIcon = styled.span`
  color: #737272;
  font-size: ${props => (props.isHovered ? "32px" : "24px")};
  transition: font-size 0.3s;
  margin-left: -20px;
`;




export const SideButton = styled.button`
  color: #737272;
  padding: 1px;
  font-size: 22px;
  transition: all 0.3s;
  cursor: pointer;
  z-index: 1000;
  background-color: transparent;
  border: none;
`;
