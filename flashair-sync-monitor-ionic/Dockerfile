FROM node:5
RUN apt-get update; apt-get install -y nginx

RUN mkdir /app
WORKDIR /app

COPY . .
RUN npm install
RUN npm run build

CMD npm start
