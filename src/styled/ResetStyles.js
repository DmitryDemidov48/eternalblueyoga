import { createGlobalStyle } from "styled-components";

export const ResetStyles = createGlobalStyle`
  /* Сброс стилей */
  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed,
  figure, figcaption, footer, header, hgroup,
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0 auto;
    width: auto;

    max-width: 1400px; /* Устанавливаем максимальную ширину */
    font-size: 100%;
    padding-left: 0; /* Отступ слева */
    padding-right: 0; /* Отступ справа */
    vertical-align: baseline;
    box-sizing: border-box;

  }

  /* Улучшение семантики HTML5 */
  article, aside, details, figcaption, figure,
  footer, header, hgroup, menu, nav, section {
    display: block;
  }

  #root {
    padding: 0;
    margin: 0;
  }

  body {
    line-height: 1;
    background-color: #000000;
    font-family: 'Libre Baskerville', 'Public Sans', serif;
    /*border: 2px solid #11ff00;*/
    overflow-x: hidden; /* Запретить горизонтальную прокрутку */
    overflow-y: auto;
    max-width: 1400px;
    height: 100vh;
    margin: 0; /* Убираем внешние отступы у body */
    padding: 0; /* Обнуляем внутренние отступы, если они есть */

  }

  ol, ul {
    list-style: none;
  }

  blockquote, q {
    quotes: none;
  }

  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';


  }

  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
`;
