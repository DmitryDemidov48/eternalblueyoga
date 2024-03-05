import { render, fireEvent, screen } from '@testing-library/react';
import WebSocketComponent from '../components/WebSocketComponent';
import 'setimmediate';


describe('WebSocketComponent', () => {
    it('should render without crashing', () => {
        render(<WebSocketComponent />);
    });

    it('should send message when button is clicked', () => {
        render(<WebSocketComponent />);
        const sendMessageButton = screen.getByText('Отправить сообщение');
        fireEvent.click(sendMessageButton);
        // Ожидание отправки сообщения или изменения UI в соответствии с вашими ожиданиями
    });

    it('should test connection when button is clicked', () => {
        render(<WebSocketComponent />);
        const testConnectionButton = screen.getByText('Проверить соединение');
        fireEvent.click(testConnectionButton);
        // Ожидание проверки соединения или изменения UI в соответствии с вашими ожиданиями
    });
});
