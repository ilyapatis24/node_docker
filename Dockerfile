FROM node:latest

WORKDIR /app

ARG NODE_ENV=production

COPY ./package*.json .

COPY ./app .

RUN npm install

CMD ["npm", "run", "start"]