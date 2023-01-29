FROM node:alpine

# define o mantenedor da imagem
LABEL maintainer="Leandro M Melo"

# Atualiza a imagem com os pacotes
RUN apt-get update && apt-get upgrade -y

WORKDIR /usr/src/app

#COPY openshift-client-linux-4.5.0-0.okd-2020-07-14-153706-ga.tar.gz ./
#RUN tar -xvf openshift-client-linux-4.5.0-0.okd-2020-07-14-153706-ga.tar.gz
#RUN mv oc kubectl /usr/local/bin/
ADD openshift-client-linux-4.5.0-0.okd-2020-07-14-153706-ga.tar.gz ./

RUN apt -y update
RUN apt -y install nodejs
RUN apt -y install npm

# Just copy the package.json...
COPY package*.json ./

# so we can cache this layer:
RUN npm install

COPY . .

RUN rm -rf openshift-client-linux-4.5.0-0.okd-2020-07-14-153706-ga.tar.gz

EXPOSE 8080

# command to run on container start
CMD [ "node", "./bin/www" ]
