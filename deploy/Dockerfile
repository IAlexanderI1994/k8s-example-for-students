FROM node:16.13.0
WORKDIR /app
COPY ./package*.json ./
RUN yarn
COPY ./ ./
ARG APP_NAME
ENV APP_NAME=$APP_NAME
RUN yarn build:$APP_NAME
CMD yarn start:$APP_NAME
