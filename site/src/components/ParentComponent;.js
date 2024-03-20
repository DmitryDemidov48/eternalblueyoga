
import React from 'react';
import TimeTable from '../pages/TimeTable';
import useSocket from '../hook/useSocket';

const ParentComponent = () => {
    const { events } = useSocket();

    return (
        <div>
            <TimeTable events={events} />
        </div>
    );
};

export default ParentComponent;
