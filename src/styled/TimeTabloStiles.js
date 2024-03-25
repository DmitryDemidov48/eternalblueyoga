import { styled } from "styled-components";

export const TableContainer = styled.div`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  width: 100%;
  height: 100vh; /* Максимальная высота контейнера */
  padding: 2%; /* Отступ внутри контейнера */
  overflow: hidden;
/*  border: 1px solid #0719da;*/

  @media screen and (max-width: 1400px) {

    height: 91vh;
    display: flex; /* Используем flexbox */
    align-items: center; /* Выравниваем контент по вертикали */
    justify-content: flex-end; /* Выравниваем контент по правому краю */
  }

  @media screen and (max-width: 700px) {
    margin-top: 80px;
    justify-content: center; /* Центрирование по горизонтали */
  }
`;



export const Table = styled.table`
  width: 45%;
  border: 2px solid #faf8f8;
  overflow: hidden;
  margin-top: 60px;
  margin-left: 3%;
  height: 50%;
  
 

  @media screen and (max-width: 1400px) {
    width: 50%;
    height: auto;
    margin-right: -1%;
    margin-top: -5%;
  }
  @media screen and (max-width: 700px) {
    width: 100vw;
    margin-top: -50%;
    margin-right: 0;
    margin-left: 0;

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
  font-size: 18px;
  font-family: Georgia, serif;
  font-weight: 500;
  

  &:first-child {
    text-align: left;
    width: 4.625rem; /* Используем rem */
  }

  &:nth-child(2),
  &:nth-child(3) {
    width: 6.25rem; /* Используем rem */
  }

  @media screen and (max-width: 1400px) {
    font-size: 11px;

  }
  @media screen and (max-width: 700px) {
    font-size: 10px;

  }
`;



export const TableImage = styled.img`
  position: absolute;
  width: 50%;
  height: 90vh;
  top: 0;
  right: 0;
  object-fit: cover;
  
 

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