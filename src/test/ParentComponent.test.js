import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // Добавлен этот импорт
import ParentComponent from "../components/ParentComponent;";

test('renders time table with correct data', async () => {
    render(<ParentComponent />);

    // Ждем, пока загрузится и отобразится таблица
    const table = await screen.findByRole('table');

    // Теперь можно проверить наличие ожидаемых данных в таблице
    expect(table).toBeInTheDocument();
});
