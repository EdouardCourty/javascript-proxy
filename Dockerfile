FROM node:19.9-alpine3.17

COPY package.json .

RUN npm install

COPY . .

CMD ["npm", "start"]
