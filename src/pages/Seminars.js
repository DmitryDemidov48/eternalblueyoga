
import React from 'react';



import {
    Container, Poster,
    PosterContainer,
    PosterDate, PosterDescription,
    PosterImage,
    PosterTitle, SemImage, SemImage1
} from "../styled/SeminarsStiles";
import imgR from '../img/semRight.JPG';
import seminar from '../img/seminar.jpg';
import imgL from '../img/semleft.png';




import HeaderFooter from "../components/Menu/HeaderFooter";



const EventCalendar = () => {
    const eventsData = [

        { title: 'Семинар ', date: '2024', image:`${seminar}`, description: 'Присоединяйтесь к нашему увлекательному семинару о йоге, где вы сможете погрузиться в атмосферу гармонии и внутреннего спокойствия. Получите знания и навыки от опытных инструкторов, научитесь новым асанам и методам медитации, и обретите внутреннюю силу и уверенность.' },


    ];

    return (
<>
   <HeaderFooter/>
     <Container>
         <SemImage1 src={imgR} alt="My Photo"/>
         <SemImage src={imgL} alt="My Photo"/>
            {eventsData.map((event, index) => (
                <PosterContainer key={index}>
                    <PosterImage src={event.image} alt={event.title} />
                    <Poster>
                    <PosterTitle>{event.title}</PosterTitle>
                    <PosterDate>{event.date}</PosterDate>
                    </Poster>
                    <PosterDescription>{event.description}</PosterDescription>
                </PosterContainer>
            ))}
     </Container>
    </>
    );
};

export default EventCalendar;
