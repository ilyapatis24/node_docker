FROM node:latest

WORKDIR /app

COPY ./package*.json .

COPY ./app .

RUN npm install

CMD ["npm", "run", "start"]