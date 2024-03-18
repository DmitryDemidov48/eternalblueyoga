import createSocket from '../hook/useSocket';

// Mock socket.io-client before importing createSocket
jest.mock('socket.io-client', () => {
    const mockSocket = {
        on: jest.fn(),
        disconnect: jest.fn(),
    };
    const mockIo = jest.fn(() => mockSocket);
    mockIo.connect = mockSocket.connect;
    return mockIo;
});

describe('createSocket', () => {
    let socket;

    beforeEach(() => {
        socket = createSocket();
    });

    test('устанавливает обработчик события eventsUpdate', () => {
        const callback = jest.fn();
        socket.onEventsUpdate(callback);
        expect(socket.on).toHaveBeenCalledWith('eventsUpdate', callback);
    });

    test('создает сокет и подключается к серверу', () => {
        // Make sure socket is defined
        expect(socket).toBeDefined();
        // Check if the 'on' method was called with 'connect' event
        expect(socket.on).toHaveBeenCalledWith('connect', expect.any(Function));
    });

    test('отключает сокет при вызове метода disconnect', () => {
        socket.disconnect();
        expect(socket.disconnect).toHaveBeenCalled();
    });
});
