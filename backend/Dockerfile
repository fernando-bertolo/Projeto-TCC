FROM node:18-alpine3.19

WORKDIR /app/backend

COPY package*.json ./
RUN npm install

COPY . .

EXPOSE 3010

CMD [ "node", "api/server.js" ]