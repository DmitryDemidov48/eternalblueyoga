import React from 'react';
import styled from 'styled-components';

// Styled компоненты для формы оплаты
const PaymentFormContainer = styled.div`
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const FormGroup = styled.div`
  margin-bottom: 20px;
`;

const Label = styled.label`
  display: block;
  font-weight: bold;
  margin-bottom: 5px;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
  
  &:hover {
    background-color: #0056b3;
  }
`;

// Компонент формы оплаты
const PaymentForm = () => {
    return (
        <PaymentFormContainer>
            <h2>Оплата через Robokassa</h2>
            <form>
                <FormGroup>
                    <Label>Сумма оплаты:</Label>
                    <Input type="text" name="amount" placeholder="Введите сумму" />
                </FormGroup>
                <FormGroup>
                    <Label>Описание заказа:</Label>
                    <Input type="text" name="description" placeholder="Введите описание" />
                </FormGroup>
                <Button type="submit">Оплатить</Button>
            </form>
        </PaymentFormContainer>
    );
};

export default PaymentForm;
