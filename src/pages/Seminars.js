import React, { useState } from 'react';


import {
    Container,
    PosterContainer,
    PosterDate, PosterDescription,
    PosterImage,
    PosterTitle
} from "../styled/SeminarsStyled/SeminarsStiles";


const EventCalendar = () => {
    const eventsData = [
      /*  { title: 'Семинар о йоге', date: '2024-03-03', image: 'https://avatars.dzeninfra.ru/get-zen_doc/5295210/pub_61a655914e9da9745140fd87_61a655a59525f70aab6c2945/scale_1200', description: 'Присоединяйтесь к нашему увлекательному семинару о йоге, где вы сможете погрузиться в атмосферу гармонии и внутреннего спокойствия. Получите знания и навыки от опытных инструкторов, научитесь новым асанам и методам медитации, и обретите внутреннюю силу и уверенность.' },
        { title: 'Семинар о йоге', date: '2024-03-03', image: 'https://avatars.dzeninfra.ru/get-zen_doc/5295210/pub_61a655914e9da9745140fd87_61a655a59525f70aab6c2945/scale_1200', description: 'Присоединяйтесь к нашему увлекательному семинару о йоге, где вы сможете погрузиться в атмосферу гармонии и внутреннего спокойствия. Получите знания и навыки от опытных инструкторов, научитесь новым асанам и методам медитации, и обретите внутреннюю силу и уверенность.' },
        { title: 'Семинар о йоге', date: '2024-03-03', image: 'https://avatars.dzeninfra.ru/get-zen_doc/5295210/pub_61a655914e9da9745140fd87_61a655a59525f70aab6c2945/scale_1200', description: 'Присоединяйтесь к нашему увлекательному семинару о йоге, где вы сможете погрузиться в атмосферу гармонии и внутреннего спокойствия. Получите знания и навыки от опытных инструкторов, научитесь новым асанам и методам медитации, и обретите внутреннюю силу и уверенность.' },
        { title: 'Семинар о йоге', date: '2024-03-03', image: 'https://avatars.dzeninfra.ru/get-zen_doc/5295210/pub_61a655914e9da9745140fd87_61a655a59525f70aab6c2945/scale_1200', description: 'Присоединяйтесь к нашему увлекательному семинару о йоге, где вы сможете погрузиться в атмосферу гармонии и внутреннего спокойствия. Получите знания и навыки от опытных инструкторов, научитесь новым асанам и методам медитации, и обретите внутреннюю силу и уверенность.' },
        { title: 'Семинар о йоге', date: '2024-03-03', image: 'https://avatars.dzeninfra.ru/get-zen_doc/5295210/pub_61a655914e9da9745140fd87_61a655a59525f70aab6c2945/scale_1200', description: 'Присоединяйтесь к нашему увлекательному семинару о йоге, где вы сможете погрузиться в атмосферу гармонии и внутреннего спокойствия. Получите знания и навыки от опытных инструкторов, научитесь новым асанам и методам медитации, и обретите внутреннюю силу и уверенность.' },
        { title: 'Семинар о йоге', date: '2024-03-03', image: 'https://avatars.dzeninfra.ru/get-zen_doc/5295210/pub_61a655914e9da9745140fd87_61a655a59525f70aab6c2945/scale_1200', description: 'Присоединяйтесь к нашему увлекательному семинару о йоге, где вы сможете погрузиться в атмосферу гармонии и внутреннего спокойствия. Получите знания и навыки от опытных инструкторов, научитесь новым асанам и методам медитации, и обретите внутреннюю силу и уверенность.' },

*/

    ];

    return (

     <Container>
            {eventsData.map((event, index) => (
                <PosterContainer key={index}>
                    <PosterImage src={event.image} alt={event.title} />
                    <PosterTitle>{event.title}</PosterTitle>
                    <PosterDate>{event.date}</PosterDate>
                    <PosterDescription>{event.description}</PosterDescription>
                </PosterContainer>
            ))}
     </Container>
    );
};

export default EventCalendar;
