import { useEffect, useState } from 'react';
import axios from 'axios';
import io from 'socket.io-client';

const useSocket = () => {
    const [socket, setSocket] = useState(null);
    const [events, setEvents] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const newSocket = io('http://localhost:4000');
        setSocket(newSocket);

        // Функция для обновления состояния событий при получении обновлений через сокет
        const handleEventsUpdate = (updatedEvents) => {
            setEvents(updatedEvents);
        };

        // Подписка на события обновления через сокет
        if (newSocket) {
            newSocket.on('eventsUpdate', handleEventsUpdate);
            newSocket.on('connect', () => {
                console.log('Successfully connected to the server');
                setError(null); // Сброс ошибки при успешном подключении
            });
            newSocket.on('connect_error', (err) => {
                setError(err.message); // Обработка ошибки подключения
            });
            newSocket.on('disconnect', () => {
                console.log('Disconnected from the server');
                setError('Disconnected from the server'); // Обработка отключения от сервера
            });
        }

        // Отписываемся от событий при размонтировании компонента
        return () => {
            if (newSocket) {
                newSocket.disconnect();
            }
        };
    }, []);

    // Пример использования Axios для обновления данных при каждом запросе
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:4000/api/events', {
                    headers: {
                        'Cache-Control': 'no-cache'
                    }
                });
                setEvents(response.data);
            } catch (error) {
                console.error('Ошибка при получении данных:', error);
            }
        };

        fetchData();
    }, [socket]);  // Вы можете использовать socket в зависимостях, чтобы обновлять данные при каждом подключении/отключении сокета

    return { socket, events, error };
};

export default useSocket;
