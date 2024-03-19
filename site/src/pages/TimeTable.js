import React from 'react';

import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead, TableImage, TableImage$,
    TableRow
} from "../styled/TimeTabloStyled/TimeTabloStiles";
import imgL from '../img/LeftTable.png';
import imgR from '../img/RightTible.JPG';
import HeaderFooter from "../components/Menu/HeaderFooter";


const TimeTable = ({ events }) => {
    return (
        <>
           <HeaderFooter/>
        <TableContainer>

            <TableImage src={imgL} alt="My Photo"/>
            <TableImage$ src={imgR} alt="My Photo"/>

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
