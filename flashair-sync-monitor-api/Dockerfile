FROM node:5

ENV WATCHDIR /files
ENV PORT 8080
EXPOSE 8080

RUN mkdir /app
WORKDIR /app

COPY . .
RUN npm install

CMD npm start