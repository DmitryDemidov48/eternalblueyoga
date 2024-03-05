import styled, {css} from "styled-components";
import { Link } from "react-router-dom";

export const SidebarTitleContainer = styled.div `
  position: fixed;
  top: 0;
  left: 0;
  margin: auto;
  width: 100%;
  padding: 0 20px;
  height: 50px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  border-radius: 0 0 60% 20%;
  background: linear-gradient(to right, #1934c2, #673cd3, #b677bd, #83a8c4);
  z-index: 999;
  overflow: hidden; /* Предотвращает выход за границы */

  @media screen and (min-width: 1400px) {
    display: none;
  }
  
` ;

export const SidebarTitle = styled.div `
  padding-top: 10px;
  margin: 0; /* Перемещает заголовок влево */
  color: #ffffff;
  font-size: 24px;
  text-align: center; /* Выравнивает текст по центру */
`
export const SidebarContainer = styled.div`
  width: ${props => (props.isOpen ? "200px" : "60px")};
  height: auto;
  margin: 0 auto;
  position: fixed;
  top: 80px;
  left: 25px;
  border-radius: 15px;
  padding: 10px;
  background: linear-gradient(to right, #1934c2, #673cd3, #b677bd, #83a8c4);
  overflow-x: hidden;
  transition: width 0.5s;
  display: flex;
  flex-flow: row wrap;
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
  color: #131317;
  font-size: ${props => (props.isHovered ? "32px" : "24px")};
  transition: font-size 0.3s;
  margin-left: -20px;
`;




export const SideButton = styled.button`
  padding: 3px;
  font-size: 18px;
  transition: all 0.3s;
  cursor: pointer;
  z-index: 1000;
  background-color: transparent;
  border: none;


  

 
`;