import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-wrap: wrap; /* Позволяет элементам переноситься на следующую строку */
  padding: 0 160px 0 160px;
  
  @media screen and (max-width: 1060px) {
    padding: 0 80px 0 80px;

  }
  @media screen and (max-width: 700px) {
    padding: 0 10px 0 10px;

  }
`;

export const PosterContainer = styled.div`
  position: relative;
  background-color: #fff;
  padding: 20px;
  border-radius: 15px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  width: 300px;
  margin: 20px;
  overflow: hidden;
  transition: max-height 1s ease; /* Изменено на max-height */
  &:hover {
    max-height: 1000px; /* Изменено на максимальное значение */
  }
`;

export const PosterImage = styled.img`
  width: 100%;
  border-radius: 10px;
  margin-bottom: 10px;
`;

export const PosterTitle = styled.h2`
  color: #673ab7;
  font-size: 20px;
  margin-bottom: 5px;
`;

export const PosterDate = styled.p`
  color: #333;
  font-size: 14px;
  margin-bottom: 5px;
`;

export const PosterDescription = styled.p`
  color: #777;
  font-size: 16px;
  max-height: 0; /* Изначально скрываем текст */
  overflow: hidden;
  transition: max-height 1s ease; /* Плавное изменение max-height */
  ${PosterContainer}:hover & {
    max-height: 1000px; /* Изменяем на максимальное значение */
   
  }
  @media screen and (max-width: 1400px) {
    max-height: 1000px;
  }
`;
