# Используем официальный образ Node.js с Alpine Linux
FROM node:21.6-alpine

# Копируем все файлы из текущего каталога в каталог /web внутри образа
COPY . /web

# Устанавливаем рабочую директорию
WORKDIR /web

# Устанавливаем зависимости через Yarn
RUN yarn install

# Собираем приложение
RUN yarn build

# Команда для запуска приложения
CMD ["yarn", "start"]
