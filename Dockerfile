FROM node:latest

ARG MYSQL_DATABASE
ARG MYSQL_USER
ARG MYSQL_ROOT_PASSWORD

RUN mkdir -p /src/reviews

WORKDIR /src/reviews

COPY . /src/reviews

RUN npm install

EXPOSE 3005

ENV MYSQL_DATABASE="${MYSQL_DATABASE}"
ENV MYSQL_USER="${MYSQL_USERNAME}"
ENV MYSQL_ROOT_PASSWORD="${MYSQL_ROOT_PASSWORD}"
ENV MYSQL_HOST="database"

CMD ["npm", "start"]