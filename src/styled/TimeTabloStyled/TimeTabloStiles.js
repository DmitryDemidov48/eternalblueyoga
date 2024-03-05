import styled from "styled-components";

export const TableContainer = styled.div`
  margin: 20px auto;
  font-family: 'Roboto', sans-serif;
  padding: 0 80px 0 80px;
  
  @media screen and (max-width: 1400px) {
    margin: 80px auto;
    padding: 0 100px 0 100px;

  }
  @media screen and (max-width: 700px) {
    margin: 80px auto;
    width: 100%;
    height:auto;
  
    padding: 0;

  }
`;

export const ScheduleHeading = styled.h2`
  text-align: center;
  font-size: 28px;
  color: #673ab7;
  text-transform: uppercase;
  margin-bottom: 20px;
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  @media screen and (max-width: 1400px) {
    max-width: calc(100% - 200px); /* Ширина таблицы будет меньше на 200px, чтобы учесть сайдбар */
  }
  @media screen and (max-width: 700px) {
    max-width: 100%;
  }
`;

export const TableHead = styled.thead`
  background-color: #673ab7;
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
  padding: 12px;
  border: 1px solid #dddddd;
  text-align: left;

  &:first-child {
    width: 250px; /* Уменьшаем ширину первой колонки */
  }

  &:nth-child(2), /* Дата */
  &:nth-child(3) { /* Время */
    width: 100px; /* Уменьшаем ширину колонок даты и времени */
  }
`;
