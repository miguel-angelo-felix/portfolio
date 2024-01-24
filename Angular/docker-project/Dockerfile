FROM node:latest as node
WORKDIR /app

COPY package.json .
RUN npm install --silent

COPY . .
RUN npm run build

FROM nginx:alpine
COPY --from=node app/dist/docker-project /usr/share/nginx/html

EXPOSE 80


# docker build -t minha-app-angular:v1 . (cria uma imagem)
# docker ps -a (lista todos os containers docker)
# docker rm (docker ps -a -f status=exited -q) (remover todos os containers)
# docker run -it -p 4200:80 minha-app-angular:v1 (executa um container)

