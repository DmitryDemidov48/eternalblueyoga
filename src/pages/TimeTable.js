import React from 'react';
import imgL from '../img/TimeTablo.jpg';
import imgR from '../img/TimeTablo.jpg';
import HeaderFooter from "../components/Menu/HeaderFooter";
import { styled } from "styled-components";
import {HomeContainer} from "./Home";

export const ContainerTable = styled.div `
  /*border: 2px solid #cb1c1c;*/ 
  margin-left: -2%;
  width: 50%;
  overflow: hidden;
  height: auto;
  padding-bottom: 30%;
  @media screen and (max-width: 1300px) {
    height: auto;
    margin-right: -1%;
    margin-top: 0;
  }
  @media screen and (max-width: 700px) {
    margin: 5% 0 7% 0;
    width: 100%;
    height: auto;
    overflow-y: auto;


  }
`
export const Table = styled.table`
  width: 100%;
 /* border: 2px solid #cb1c1c;*/
  overflow: hidden;
  height: 50%;
  @media screen and (max-width: 1300px) {
  
    height: auto;
  right: 0;
    margin-top: 10%;
  }
  @media screen and (max-width: 700px) {
    margin: 5% 0 7% 0;
    width: 100%;
    height: auto;
    overflow-y: auto;
  
  
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
  @media screen and (max-width: 1300px) {
    font-size: 18px;
  }
  @media screen and (max-width: 700px) {
    font-size: 15px;
  }
`;
export const TableImage = styled.img`
  position: absolute;
  width: 50%;
  height: auto;
  top: -30%;
  right: 0;
  object-fit: cover;

  @media screen and (max-width: 1300px) {
    display: none;
  }
`;
export const TableImage1 = styled.img`
  display: none; /* Изначально скрываем изображение */
  position: absolute;
  width: 50vw;
  height: 100vh;
  top: 0;
  left: 0;
  object-fit: cover;
  z-index: -1;
  @media screen and (max-width: 1300px) {
    display: block; /* Показываем изображение при разрешении экрана меньше 1400px */
  }
  @media screen and (max-width: 700px) {
    display: none; /* Показываем изображение при разрешении экрана меньше 1400px */
  }
`;
const TimeTable = ({ events }) => {
    return (
        <>
           <HeaderFooter/>
        <HomeContainer>

            <TableImage src={imgL} alt="My Photo"/>
            <TableImage1 src={imgR} alt="M Photo"/>
<ContainerTable>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Место</TableCell>
                        <TableCell>Время</TableCell>
                        <TableCell>Дата</TableCell>
                    </TableRow>
                </TableHead>

                <TableBody>
                    {events.map((event, index) => (
                        <TableRow key={index}>
                            <TableCell>{event.place}</TableCell>
                            <TableCell>{event.time}</TableCell>
                            <TableCell>{event.date}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>

            </Table>
</ContainerTable>
        </HomeContainer>
            </>
    );
};

export default TimeTable;
