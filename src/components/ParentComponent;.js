
import React from 'react';
import TimeTable from '../pages/TimeTable';


 const localEvents = [
    { place: "Мосйога", time: "19:00 – 20:30", date: "22.03" },
     { place: "Ресурс", time: "20:00 – 21:30", date: "23.03" },
    { place: "Мосйога", time: "19:00 – 20:30", date: "24.03" },
     { place: "Ресурс", time: "20:15 – 21:45", date: "25.03" },
    { place: "Мосйога", time: "19:00 – 20:30", date: "26.03" },


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
