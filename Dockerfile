FROM node:latest

WORKDIR /IntelliScout

COPY package.json .

RUN npm install -g npm@7.17.0

RUN npm install -g npm

COPY . .

EXPOSE 60000

VOLUME ["/IntelliScout/node_modules"]

CMD [ "npm", "run", "devStart"]