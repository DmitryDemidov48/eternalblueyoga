FROM --platform=linux/amd64 node:21.6-alpine

COPY . /web
WORKDIR /web

CMD ["yarn", "start"]

