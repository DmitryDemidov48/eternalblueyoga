import styled from "styled-components";
import { Link } from "react-router-dom";

export const FooterContainer = styled.footer`
  width: 100%;
  position: fixed;
  bottom: 0;
  left: 0;
  background: linear-gradient(to right, #1934c2, #673cd3, #b677bd, #83a8c4);
  
  z-index: 999;
`;

export const FooterNav = styled.nav`
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.8em 0;
  flex-wrap: nowrap; /* Изменено на nowrap, чтобы предотвратить перенос элементов */
`;

export const FooterIcon = styled.div`
  color: inherit;
  margin: 0; /* Уменьшаем отступ между элементами */
  font-size: 1em; /* Уменьшаем размер иконок */
  cursor: pointer;
  transition: color 0.3s;

  &:hover {
    color: #b677bd;
  }

  @media screen and (max-width: 700px) {
    font-size: 0.8em; /* Дополнительно уменьшаем размер иконок на мобильных устройствах */
    margin: 0 auto; /* Центрируем элементы по горизонтали на экранах с шириной до 400px */
    display: block;
  }

  @media screen and (max-width: 400px) {
    font-size: 0.6em; /* Дополнительно уменьшаем размер иконок на экранах с шириной до 400px */
    margin: 0 auto; /* Центрируем элементы по горизонтали на экранах с шириной до 400px */
    display: block;
  }
`;

export const IconFooter = styled.span`
  font-size: 1.1em;
  margin: 0 auto;
  padding: 0;
`;

export const StyledLink = styled(Link)`
  text-decoration: none; /* Убираем стандартное подчеркивание ссылки */
  color: inherit; /* Наследуем цвет от родительского элемента */

  @media screen and (max-width: 700px) {
    font-size: 16px;
    margin: 0; /* Убираем отступы */
  }
`;
