import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';

const WebSocketComponent = () => {
    const [messages, setMessages] = useState([]);
    const socket = io('http://localhost:8080');

    useEffect(() => {
        socket.on('connect', () => {
            console.log('Подключено к WebSocket серверу');
        });

        socket.on('message', (data) => {
            console.log('Получено сообщение от сервера:', data);
            setMessages((prevMessages) => [...prevMessages, data]);
        });

        socket.on('disconnect', () => {
            console.log('Отключено от WebSocket сервера');
        });

        socket.on('test_connection_success', (message) => {
            console.log('Тест соединения успешен:', message);
        });

        return () => {
            socket.disconnect();
        };
    }, [socket]);

    const sendMessage = (message) => {
        if (message) {
            socket.emit('message', message);
        }
    };

    const testConnection = () => {
        socket.emit('test_connection');
    };

    return (
        <div>
            <h1>WebSocket Component</h1>
            <button onClick={() => sendMessage('Тестовое сообщение')}>Отправить сообщение</button>
            <button onClick={testConnection}>Проверить соединение</button>
            <ul>
                {messages.map((message, index) => (
                    <li key={index}>{message}</li>
                ))}
            </ul>
        </div>
    );
};

export default WebSocketComponent;
