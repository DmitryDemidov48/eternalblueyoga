import React from 'react';
import TimeTable from '../pages/TimeTable';

 const localEvents = [
    { place: "Мосйога", time: "19:00 – 20:30", date: "Понедельник" },
     { place: "Ресурс", time: "20:00 – 21:30", date: "Вторник" },
    { place: "Мосйога", time: "19:00 – 20:30", date: "Среда" },
     { place: "Ресурс", time: "20:15 – 21:45", date: "Четверг" },
    { place: "Мосйога", time: "19:00 – 20:30", date: "Пятница" },
];
const ParentComponent = () => {
    const events = localEvents;

    return (
        <div>
            <TimeTable events={events} />
        </div>
    );
};

export default ParentComponent;
