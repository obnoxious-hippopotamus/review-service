FROM node:latest

# ENV DB_PASS Skiclub0

RUN mkdir -p /src/reviews

WORKDIR /src/reviews

COPY . /src/reviews

# COPY package*.json /reviews

RUN npm install

EXPOSE 3000

CMD ["npm", "start"]