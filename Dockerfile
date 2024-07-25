FROM node:20.14.0 

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 1008

CMD ["node", "index.js"]