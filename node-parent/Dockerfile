FROM node:14

USER root

RUN apt-get update
RUN apt-get install -y maven
RUN apt-get install -y wget
RUN rm -rf /var/lib/apt/lists/*
RUN wget https://github.com/openshift/origin/releases/download/v1.5.0/openshift-origin-client-tools-v1.5.0-031cbe4-linux-64bit.tar.gz
RUN mv openshift-origin-client-tools-v1.5.0-031cbe4-linux-64bit.tar.gz /opt/
RUN tar -zxvf /opt/openshift-origin-client-tools-v1.5.0-031cbe4-linux-64bit.tar.gz -C /opt/
RUN rm /opt/openshift-origin-client-tools-v1.5.0-031cbe4-linux-64bit.tar.gz

#RUN echo 'export OC_CLIENT=/opt/openshift-origin-client-tools-v1.5.0-031cbe4-linux-64bit\nexport PATH=$OC_CLIENT:$PATH\n' >> /etc/bash.bashrc

RUN useradd -m tarefas

RUN apt-get update 

WORKDIR /usr/src/app

ENV NODE_ENV production

# Just copy the package.json...
COPY package*.json ./

# so we can cache this layer:
RUN npm install

COPY . .

EXPOSE 8080

user tarefas

# command to run on container start
CMD [ "node", "./bin/www" ]

ENV PATH="$PATH:/opt/openshift-origin-client-tools-v1.5.0-031cbe4-linux-64bit"
RUN echo $PATH

RUN echo finish
