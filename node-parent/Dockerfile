FROM node:14

USER root

RUN apt-get update
RUN apt-get install -y maven
RUN apt-get install -y wget
RUN rm -rf /var/lib/apt/lists/*

#??
RUN wget https://mirror.openshift.com/pub/openshift-v4/clients/ocp/stable-4.6/openshift-client-linux.tar.gz -P /opt
RUN wget https://mirror.openshift.com/pub/openshift-v4/clients/ocp/stable-4.6/openshift-install-linux.tar.gz -P /opt
RUN chmod 777 -R /opt

RUN tar -zxvf /opt/openshift-install-linux.tar.gz openshift-install -C /opt/
RUN tar -zxvf /opt/openshift-client-linux.tar.gz oc kubectl -C /opt/

RUN rm /opt/openshift-client-linux.tar.gz
RUN rm /opt/openshift-install-linux.tar.gz
#??

#RUN wget https://github.com/openshift/origin/releases/download/v1.5.0/openshift-origin-client-tools-v1.5.0-031cbe4-linux-64bit.tar.gz
#RUN mv openshift-origin-client-tools-v1.5.0-031cbe4-linux-64bit.tar.gz /opt/
#RUN tar -zxvf /opt/openshift-origin-client-tools-v1.5.0-031cbe4-linux-64bit.tar.gz -C /opt/
#RUN rm /opt/openshift-origin-client-tools-v1.5.0-031cbe4-linux-64bit.tar.gz

#RUN echo 'export OC_CLIENT=/opt/openshift-origin-client-tools-v1.5.0-031cbe4-linux-64bit\nexport PATH=$OC_CLIENT:$PATH\n' >> /etc/bash.bashrc

RUN useradd -m tarefas

WORKDIR /usr/src/app

ENV NODE_ENV production

# Just copy the package.json...
COPY package*.json ./

# so we can cache this layer:
RUN npm install

COPY . .

EXPOSE 8080

RUN touch /usr/src/app/.kube
RUN chmod -R 777 /usr/src/app/.kube
ENV KUBECONFIG="/usr/src/app/.kube"

user tarefas

# command to run on container start
CMD [ "node", "./bin/www" ]

#?
#ENV PATH="$PATH:/opt/openshift-origin-client-tools-v1.5.0-031cbe4-linux-64bit"
#?

RUN echo $PATH


RUN echo finish
