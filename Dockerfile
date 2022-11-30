FROM node:18.12.1-alpine

RUN mkdir /code/
WORKDIR /code/
COPY . /code/
RUN npm run build