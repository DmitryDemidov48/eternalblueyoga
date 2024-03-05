import React from 'react';
import styled from 'styled-components';

const VideoContainer = styled.div`
  display: flex; /* Расположение элементов в ряд */
  flex-wrap: wrap; /* Перенос элементов на новую строку */
  justify-content: center; /* Выравнивание по центру */
`;

const VideoItemContainer = styled.div`
  position: relative;
  background-color: #fff;
  padding: 10px;
  border-radius: 15px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  width: 300px;
  margin: 20px;
  overflow: hidden;
  transition: height 0.3s ease; /* Плавное изменение высоты при наведении */
  &:hover {
    height: auto; /* Увеличение высоты при наведении для показа описания */
  }
`;

const VideoTitle = styled.h2`
  color: #673ab7;
  font-size: 20px;
  margin-bottom: 5px;
`;

const VideoDate = styled.p`
  color: #333;
  font-size: 14px;
  margin-bottom: 5px;
`;

const VideoDescription = styled.p`
  color: #777;
  font-size: 16px;
  height: 0; /* Исходно скрываем описание */
  overflow: hidden;
  transition: height 0.3s ease; /* Плавное изменение высоты при наведении */
  ${VideoItemContainer}:hover & {
    height: auto; /* Показываем описание при наведении */
    
  }
`;

const VideoItem = ({ video }) => {
    return (
        <VideoItemContainer>
            <iframe
                width="100%"
                height="200"
                src={video.url} /* Заменил src на URL видео */
                title={video.title}
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
            ></iframe>
            <VideoTitle>{video.title}</VideoTitle>
            <VideoDate>{video.date}</VideoDate>
            <VideoDescription>{video.description}</VideoDescription>
        </VideoItemContainer>
    );
};

const VideoPlayer = () => {
    const videos = [
        {
            title: 'Title of Video 1',
            date: 'Published on March 1, 2024',
            description: 'Description of Video 1',
            url: 'https://www.youtube.com/embed/5OE5nRYpM0s'
        },
        {
            title: 'Title of Video 2',
            date: 'Published on March 2, 2024',
            description: 'Description of Video 2',
            url: 'https://www.youtube.com/embed/355wL8rL0ag'
        },
        {
            title: 'Title of Video 3',
            date: 'Published on March 3, 2024',
            description: 'Description of Video 3',
            url: 'https://www.youtube.com/embed/AWQqR0pC_4o'
        }
    ];

    return (
        <VideoContainer>
            {videos.map((video, index) => (
                <VideoItem key={index} video={video} />
            ))}
        </VideoContainer>
    );
};

export default VideoPlayer;
