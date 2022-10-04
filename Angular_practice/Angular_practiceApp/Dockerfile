FROM node:16.14.2-alpine AS build
WORKDIR /src/app
COPY package.json .

RUN npm install prettier -g

# If you are building your code for production
RUN npm config set fetch-retry-mintimeout 20000
RUN npm install


 # Bundle app source
COPY . .

RUN npm run build

EXPOSE 4200

CMD [ "node", "dist/server.js" ]