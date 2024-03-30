import React from 'react';
import styled from 'styled-components';
import HeaderFooter from "../components/Menu/HeaderFooter";

const Container = styled.div`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  width: 100%;
  height: 85vh; /* Максимальная высота контейнера */
  padding: 2%; /* Отступ внутри контейнера */
  overflow: hidden;
  /*border: 1px solid #0719da;*/

  @media screen and (max-width: 1250px) {

    height: 91vh;
    display: flex; /* Используем flexbox */
    align-items: center; /* Выравниваем контент по вертикали */
    justify-content: flex-end; /* Выравниваем контент по правому краю */
  }

  @media screen and (max-width: 700px) {
    margin-top: 9%;
    justify-content: center; /* Центрирование по горизонтали */
  }
`;

const VideoContainer = styled.div`
  width: 100%; /* Ширина контейнера с фотографиями */
  max-height: 100%; /* Максимальная высота контейнера */
  overflow-y: auto; /* Включаем вертикальную прокрутку */
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  @media screen and (max-width: 1250px) {
    padding-left: 20%;
    margin-left: 0; /* Убираем отрицательный отступ */
  }
  @media screen and (max-width: 700px) {
    width: 100vw;
    padding: 0;

  }
`;

const VideoWrapper = styled.div`
  width: 300px;
  height: 300px;
  margin: 10px;
`;

const Video = styled.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const video = [
    { id: 1, src: "https://yastatic.net/s3/psf/disk-public/_/public.ru.34aeac51e126127bc4d8.js", width: 200, height: 200 },

];

const VideoViewer = () => {
    return (
        <>
            <HeaderFooter></HeaderFooter>
        <Container>
            <h1 style={{color: 'white'}}>Скоро здесь будет видео <span style={{color: 'white'}}></span></h1>

            {/* <VideoContainer>
                {video.map((video) => (
                    <VideoWrapper key={video.id}>
                        <Video controls>

                            <source src={video.src} type="video/mp4" />
                            Ваш браузер не поддерживает видео в формате MP4.
                        </Video>
                    </VideoWrapper>
                ))}
            </VideoContainer>*/}
        </Container>
            </>
    );
};

export default VideoViewer;
