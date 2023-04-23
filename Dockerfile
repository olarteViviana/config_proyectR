FROM node:12.22.9-alpine

WORKDIR /server/api-rest-rappi/package.json

COPY package.json ./

RUN npm install

COPY . .

CMD ["npm", "start"]
