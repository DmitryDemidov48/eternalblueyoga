FROM --platform=linux/amd64 node:21.6-alpine

COPY . /web
WORKDIR /web

RUN yarn global add create-react-app

CMD ["yarn", "start"]

