FROM node:12.22.9-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

ENV PORT=3000
CMD ["npm", "start"]