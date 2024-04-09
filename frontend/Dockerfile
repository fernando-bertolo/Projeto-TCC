FROM node:18.15.0

WORKDIR /app/frontend

COPY package*.json ./

RUN npm install styled-components axios react-icons react-router-dom react-toastify validator

COPY . .

EXPOSE 3000

CMD [ "npm", "start" ]