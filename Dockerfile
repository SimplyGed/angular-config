FROM nginx:alpine as base

ENV APP_TITLE="docker var"
ENV HOST_API="https://local-docker"

FROM node:12-alpine as build

WORKDIR /app
COPY package.json package-lock.json ./

RUN npm install
COPY . .
RUN npm run build

FROM base

COPY --from=build /app/nginx/nginx.conf /etc/nginx/conf.d/default.conf

COPY --from=build /app/dist/angular-config /usr/share/nginx/html
COPY --from=build /app/startup.sh /docker-entrypoint.d/
