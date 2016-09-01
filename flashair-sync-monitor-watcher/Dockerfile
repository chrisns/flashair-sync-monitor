FROM node:5

ENV WATCHDIR /files
ENV FLASH_AIR_IP=10.0.0.1

RUN mkdir /app
WORKDIR /app

COPY . .
RUN npm install

CMD npm start