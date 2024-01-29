FROM node:18-alpine

WORKDIR /app

COPY package.json  ./

RUN npm install

COPY . .

COPY .next ./.next

CMD [ "npm", 'start' ]