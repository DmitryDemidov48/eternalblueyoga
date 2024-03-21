import React from 'react';

import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead, TableImage,  TableImage1,
    TableRow
} from "../styled/TimeTabloStiles";
import imgL from '../img/LeftTable.png';
import imgR from '../img/RightTible.JPG';


import HeaderFooter from "../components/Menu/HeaderFooter";


const TimeTable = ({ events }) => {
    return (
        <>
           <HeaderFooter/>
        <TableContainer>

            <TableImage src={imgL} alt="My Photo"/>
            <TableImage1 src={imgR} alt="M Photo"/>

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
        </TableContainer>
            </>
    );
};

export default TimeTable;
