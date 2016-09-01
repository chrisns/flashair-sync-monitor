FROM node:5

ENV WATCHDIR ./
ENV PORT 8080

RUN mkdir /app
WORKDIR /app

COPY . .
RUN npm install

CMD npm start