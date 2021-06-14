FROM node:14

WORKDIR /IntelliScout

COPY package.json .

RUN npm install

COPY . .

EXPOSE 60000

VOLUME ["/IntelliScout/node_modules"]

CMD [ "npm", "run", "dev" ]