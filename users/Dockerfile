FROM node:22

RUN mkdir -p /teste/users

COPY ["package*.json", "/teste/users"]

WORKDIR /teste/users

EXPOSE 8080

RUN npm install

COPY . .

CMD ["npm", "run", "start"]