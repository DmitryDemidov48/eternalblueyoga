FROM --platform=linux/amd64 node:21.6-alpine

COPY . /web
WORKDIR /web

RUN yarn install
RUN yarn build

CMD ["yarn", "start"]

