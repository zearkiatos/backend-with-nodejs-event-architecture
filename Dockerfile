FROM node:14-alpine

RUN apk update && apk add python make g++
RUN apk add --update nodejs npm

COPY . .

EXPOSE 3000

CMD npm install && \
    npm run start:stream