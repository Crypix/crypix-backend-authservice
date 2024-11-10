FROM node:18-alpine

ENV NODE_ENV production

WORKDIR /api

COPY ./package*.json ./

RUN npm install -g @nestjs/cli
RUN npm install

COPY . .

RUN npm run build 

USER node

CMD ["npm", "run", "start:prod"]