import React from 'react';
import {
    Button,
    FormGroup,
    FormTitle,
    FormWrapper,
    HeaderWrapper,
    Input,
    Label
} from "../styled/RegistratinStyled/RegistrStyles";


const RegistrationForm = () => {
    return (
        <HeaderWrapper>
            <FormWrapper>
                <FormTitle>Регистрация</FormTitle>
                <form>
                    <FormGroup>
                        <Label htmlFor="username">Имя пользователя</Label>
                        <Input type="text" id="username" name="username" />
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor="email">Email</Label>
                        <Input type="email" id="email" name="email" />
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor="password">Пароль</Label>
                        <Input type="password" id="password" name="password" />
                    </FormGroup>
                    <Button type="submit">Зарегистрироваться</Button>
                </form>
            </FormWrapper>
        </HeaderWrapper>
    );
};

export default RegistrationForm;
