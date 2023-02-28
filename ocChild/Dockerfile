FROM node:latest

#wget
RUN apt-get update
RUN apt-get install -y wget
RUN rm -rf /var/lib/apt/lists/*

#oc cli
RUN wget https://mirror.openshift.com/pub/openshift-v4/clients/ocp/stable-4.6/openshift-client-linux.tar.gz
RUN wget https://mirror.openshift.com/pub/openshift-v4/clients/ocp/stable-4.6/openshift-install-linux.tar.gz

RUN mv openshift-client-linux.tar.gz /opt/
RUN mv openshift-install-linux.tar.gz /opt/

RUN tar -zxvf /opt/openshift-client-linux.tar.gz -C /opt/
RUN tar -zxvf /opt/openshift-install-linux.tar.gz -C /opt/

RUN rm /opt/openshift-client-linux.tar.gz
RUN rm /opt/openshift-install-linux.tar.gz


WORKDIR /usr/src/app

ENV NODE_ENV production

# Just copy the package.json...
COPY package*.json ./

# so we can cache this layer:
RUN npm install

COPY . .

#kube config
RUN touch /usr/src/app/.kube
RUN chmod -R 777 /usr/src/app/.kube
ENV KUBECONFIG="/usr/src/app/.kube"

# command to run on container start
CMD [ "node", "app.js" ]

#add oc cli to path
ENV PATH="$PATH:/opt"
