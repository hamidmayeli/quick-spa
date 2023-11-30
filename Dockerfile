FROM node:20.10.0-slim as build

RUN apt-get update && apt-get install libgtk2.0-0 libgtk-3-0 libgbm-dev libnotify-dev libgconf-2-4 libnss3 libxss1 libasound2 libxtst6 xauth xvfb jq -y

WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .
RUN npm run lint && npm run build

FROM build as test
RUN npm run test-component:headless && npm run test-e2e:headless

FROM scratch as test-result
COPY --from=test /app/coverage /

FROM nginx:1.25-alpine-slim as deployment
COPY ./nginx.conf /etc/nginx/conf.d/default.conf
CMD ["/bin/sh", "-c", "nginx -g 'daemon off;'"]
COPY --from=build /app/dist /usr/share/nginx/html
