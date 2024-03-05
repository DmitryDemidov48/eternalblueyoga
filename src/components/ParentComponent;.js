import React, { useState, useEffect } from 'react';
import axios from 'axios';
import io from 'socket.io-client'; // Подключаем библиотеку для работы с веб-сокетами
import TimeTable from "../pages/TimeTable";

const ParentComponent = () => {
    /*const [events, setEvents] = useState([]); // Состояние для хранения данных о событиях*/

    const events = [
        { place: 'Зал №4', time: '1222:00', date: '03-01' },
        { place: 'Зал №2', time: '10:00', date: '03-01' },
        { place: 'Зал №3', time: '10:00', date: '03-01' },
        { place: 'Зал №3', time: '10:00', date: '03-01' },
        { place: 'Зал №3', time: '10:00', date: '03-01' },
        { place: 'Зал №3', time: '10:00', date: '03-01' },
        // Другие события...
    ];




    /* useEffect(() => {
         // Асинхронная функция для получения данных с сервера
         const fetchData = async () => {
             try {
                 const response = await axios.get('http://localhost:3000/api/events'); // Используем адрес сервера на localhost:3000
                 setEvents(response.data); // Установка полученных данных в состояние
             } catch (error) {
                 console.error('Ошибка при загрузке данных:', error);
             }
         };

         // Инициализация подключения к серверу веб-сокетов
         const socket = io('http://localhost:3000');

         // Обработка события при получении обновлений от сервера через веб-сокеты
         socket.on('eventsUpdate', updatedEvents => {
             setEvents(updatedEvents);
         });

         // Вызов функции загрузки данных при монтировании компонента
         fetchData();

         // Устанавливаем интервал для повторного запроса данных каждые 5 секунд (5000 миллисекунд)
         const intervalId = setInterval(fetchData, 5000);

         // Функция очистки интервала при размонтировании компонента
         return () => {
             clearInterval(intervalId);
             socket.disconnect(); // Отключение от сервера веб-сокетов при размонтировании компонента
         };

         // eslint-disable-next-line react-hooks/exhaustive-deps
     }, []); // Пустой массив зависимостей, чтобы эффект выполнился только один раз при монтировании компонента
 */
    return (
        <div>
            <TimeTable events={events} />
        </div>
    );
};

export default ParentComponent;