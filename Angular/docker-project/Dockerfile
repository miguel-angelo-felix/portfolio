FROM node:latest as node
WORKDIR /app
COPY . .
RUN npm install --silent
RUN npm run build

FROM nginx:alpine
COPY --from=node app/dist/docker-project /usr/share/nginx/html

EXPOSE 80

