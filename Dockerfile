FROM node:14-alpine

RUN apk update && apk add python make g++
RUN apk add --update nodejs npm

COPY . .

EXPOSE 9000

CMD node eco-server && \
    node server