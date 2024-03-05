import styled from 'styled-components';

export const HeaderWrapper = styled.header`
  display: flex;
  align-items: center;
  justify-content: center; /* Центрируем содержимое по горизонтали */
  height: 200px;
  margin: 100px auto;
  
`;

export const FormWrapper = styled.div`
  background: linear-gradient(to right, #1934c2, #673cd3, #b677bd, #83a8c4);
  padding: 20px;
  
  box-shadow: 8px 0 10px rgba(0, 0, 0, 0.1);
  width: 300px; /* Задаем фиксированную ширину формы */
  display: flex;
  flex-direction: column; /* Отображаем элементы вертикально */
  align-items: center; /* Центрируем элементы по горизонтали */
  margin: auto;
  border-radius:100% / 10em 20px 10px 10px;
`;

export const FormTitle = styled.h2`
  color: #fff;
  text-align: center;
  margin-bottom: 20px;
`;

export const FormGroup = styled.div`
  margin-bottom: 20px;
  width: 100%; /* Растягиваем элемент на всю доступную ширину */
`;

export const Label = styled.label`
  display: block;
  color: #fff;
  margin-bottom: 5px;
`;

export const Input = styled.input`
  width: 200px; /* Ширина инпута, учитывая отступы */
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #ccc;
  background-color: #fff; /* Фон поля ввода */
  color: #333; /* Цвет текста в поле ввода */
  outline: none;
  margin-top: 5px; /* Отступ сверху */
  &:focus {
    border-color: #1934c2;
  }
`;

export const Button = styled.button`
  width: 100%;
  padding: 10px;
  border-radius: 5px;
  border: none;
  background-color: #fff; /* Фон кнопки */
  color: #1934c2; /* Цвет текста на кнопке */
  cursor: pointer;
  outline: none;
  margin-top: 10px; /* Отступ сверху */

  &:hover {
    background-color: #969dc0; /* Изменение фона при наведении */
    color: #fff; /* Изменение цвета текста при наведении */
  }
`;