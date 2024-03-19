import React from 'react';
import {
    Button,
    FormGroup,
    FormTitle,
    FormWrapper,
    HeaderWrapper,
    Input,
    Label
} from "../styled/LoginStyled/LoginStyles";


const LoginForm = () => {

    return (
        <HeaderWrapper>
            <FormWrapper>
                <FormTitle>Вход</FormTitle>
                    <FormGroup>
                        <Label htmlFor="username">Имя пользователя</Label>
                        <Input type="text" id="username" name="username" />
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor="password">Пароль</Label>
                        <Input type="password" id="password" name="password" />
                    </FormGroup>
                    <Button type="submit">Войти</Button>
            </FormWrapper>
        </HeaderWrapper>
    );
};

export default LoginForm;