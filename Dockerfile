FROM node:19-alpine

RUN mkdir -p /app

VOLUME /app/web-build

WORKDIR /app

COPY . /app

RUN npm install -g npm@latest

RUN npm install --loglevel=error

CMD [ "npm", "run", "build:web" ]
