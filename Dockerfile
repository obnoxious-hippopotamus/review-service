FROM node:latest

RUN mkdir /reviews

ADD . /reviews

WORKDIR /reviews

RUN npm install

EXPOSE 3000

CMD ["node", "server/server.js"]