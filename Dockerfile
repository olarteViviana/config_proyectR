FROM node:12.22.9-alpine

WORKDIR /rappi

COPY package.json ./

RUN npm install

COPY . .

CMD ["npm", "start"]
