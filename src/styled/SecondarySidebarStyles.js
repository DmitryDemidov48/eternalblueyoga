
import styled from "styled-components";

import { Link } from "react-router-dom";

export const SidebarTitleContainer = styled.div `
  position: fixed;
  align-content: center;
  justify-content: start;
  top: 0;
  
  width: 100%;
  margin-left: 0;
  height: 100px;

  overflow: hidden; /* Предотвращает выход за границы */

  @media screen and (min-width: 1025px) {
    display: none;
  }
  
` ;


export const SidebarContainer = styled.div`
  width: ${props => (props.isOpen ? "200px" : "60px")};
  height: auto;
  position: fixed;
  top: 30px;
  margin-left: 0;
  padding: 15px;
  background: inherit;
  overflow-x: hidden;
  transition: width 1.2s;
  display: flex;
  flex-flow: row wrap;
 z-index: 1;
  
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
  display: flex;
  justify-content: start;
  color: white;
  font-family: Georgia, serif;
  font-weight: 200;
 
  cursor: pointer;
  text-decoration: none;
  width: 100px;
  padding: 10px 6px;
  position: relative;

`;

export const SidebarIcon = styled.span`
  color: #f8f6f6;
  font-size: ${props => (props.isHovered ? "32px" : "24px")};
  transition: font-size 0.3s;
  margin-left: 10px;
  padding-right: 5px;

`;




export const SideButton = styled.button`
  color: #faf9f9;
  padding: 1px;
  margin-left: 10px;
  font-size: 22px;
  transition: all 0.3s;
  cursor: pointer;
  z-index: 1000;
  background-color: transparent;
  border: none;

`;
