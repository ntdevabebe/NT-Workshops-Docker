FROM node:14.2.0-alpine

RUN mkdir /app

WORKDIR /app

COPY ./package.json .

RUN yarn

COPY ./src /app/src

CMD [ "yarn", "run", "start" ]

EXPOSE 3000