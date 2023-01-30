FROM node:14

RUN useradd -m tarefas
USER tarefas

RUN apt-get update 

WORKDIR /usr/src/app

ENV NODE_ENV production

# Just copy the package.json...
COPY package*.json ./

# so we can cache this layer:
RUN npm install

COPY . .

EXPOSE 8080

# command to run on container start
CMD [ "node", "./bin/www" ]
