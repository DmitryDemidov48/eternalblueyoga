FROM node:21.6-alpine

COPY . /web
WORKDIR /web
ENV NODE_OPTIONS="--max_old_space_size=4096"
RUN yarn install
RUN yarn build


CMD ["yarn", "start"]

