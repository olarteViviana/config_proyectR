FROM node:12.22.9-alpine

WORKDIR /server

COPY ./server/api-rest-rappi

RUN npm install

COPY . .

CMD ["npm", "start"]
