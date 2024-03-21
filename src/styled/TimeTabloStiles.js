import { styled } from "styled-components";

export const TableContainer = styled.div`

  position: fixed;
  text-align: start;
  margin: 0 auto;
  left: 0;
  width: 100%;
  height: 100%;
  background: #090909;
  z-index: -1;

  @media screen and (max-width: 1400px) {
    background: #000000;
    display: flex;
    justify-content: end;
    margin-right: 5px; /* Устанавливаем правый отступ */
    padding-top: 40px;
    width: 100%;
    height: auto;

  }
  @media screen and (max-width: 700px) {
    margin: auto ;
    text-align: center;
    padding-top: 200px;
    width: 100%;
    height: 100%;
   
    display: flex;
    justify-content: center;
    align-items: center;
    background: #f3f3f3;
  }
`;



export const Table = styled.table`
  width: 45vw;
  
  overflow: hidden;
  margin: 30px;

  @media screen and (max-width: 1400px) {
    max-width: 85vw;
    height: auto;
  }
  @media screen and (max-width: 700px) {
    width: 85vw;
    margin-top: -300px;
  }
`;

export const TableHead = styled.thead`
  background-color: #0a0a0a;
  color: white;
`;

export const TableBody = styled.tbody`
  background-color: #f5f5f5;
`;

export const TableRow = styled.tr`
  &:nth-child(even) {
    background-color: #e0e0e0;
  }
`;

export const TableCell = styled.td`
  padding: 1rem; /* Используем rem */
  border: 1px solid #dddddd;
  text-align: center;

  &:first-child {
    text-align: left;
    width: 15.625rem; /* Используем rem */
  }

  &:nth-child(2),
  &:nth-child(3) {
    width: 6.25rem; /* Используем rem */
  }
`;



export const TableImage = styled.img`
  position: absolute;
  width: 50vw; /* Ширина изображения равна ширине видимой области браузера */
  height: 100%; /* Высота изображения равна высоте видимой области браузера */
  top: -100px;
  right: -10px;
  object-fit: cover; /* Масштабирование изображения так, чтобы оно полностью покрывало контейнер */
 

  @media screen and (max-width: 1400px) {
    display: none;
  }
`;
export const TableImage1 = styled.img`
  display: none; /* Изначально скрываем изображение */
  position: absolute;
  width: 50vw;
  height: 100vh;
  top: 0;
  left: -10px;
  object-fit: cover;
  z-index: -1;
  
  
  @media screen and (max-width: 1400px) {
    display: block; /* Показываем изображение при разрешении экрана меньше 1400px */
   
  }
  @media screen and (max-width: 700px) {
    display: none; /* Показываем изображение при разрешении экрана меньше 1400px */

  }
`;