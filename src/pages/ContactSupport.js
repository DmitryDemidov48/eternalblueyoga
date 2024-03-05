import React from 'react';
import styled from 'styled-components';

// Контейнер для контактов
const ContactContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f9f9f9;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

// Заголовок контактов
const ContactTitle = styled.h2`
  color: #333;
  margin-bottom: 10px;
`;

// Контейнер для иконок
const IconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

// Стили для иконок
const Icon = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
`;

const ContactSupport = () => {
    return (
        <ContactContainer>
            <ContactTitle>Поддержка</ContactTitle>
            <IconContainer>
                {/* Иконка для Telegram */}
                <a href="https://t.me/your_telegram_username" target="_blank" rel="noopener noreferrer">
                    <Icon src="telegram_icon.png" alt="Telegram" />
                </a>
                {/* Иконка для WhatsApp */}
                <a href="https://wa.me/your_phone_number" target="_blank" rel="noopener noreferrer">
                    <Icon src="whatsapp_icon.png" alt="WhatsApp" />
                </a>
            </IconContainer>
        </ContactContainer>
    );
};

export default ContactSupport;
