import React from 'react';

import {
    ScheduleHeading,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow
} from "../styled/TimeTabloStyled/TimeTabloStiles";

const TimeTable = ({ events }) => {
    return (
        <TableContainer>
            <ScheduleHeading>Расписание</ScheduleHeading>
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
    );
};

export default TimeTable;
