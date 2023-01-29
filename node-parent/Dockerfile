FROM node:14

WORKDIR /usr/src/app

ENV NODE_ENV production

# install openshift client on container
COPY openshift-client-linux-4.5.0-0.okd-2020-07-14-153706-ga.tar.gz ./
RUN tar -xvf openshift-client-linux-4.5.0-0.okd-2020-07-14-153706-ga.tar.gz
RUN mv oc kubectl /usr/local/bin/
#RUN rm openshift-client-linux-4.5.0-0.okd-2020-07-14-153706-ga.tar.gz

# Just copy the package.json...
COPY package*.json ./

# so we can cache this layer:
RUN npm install

COPY . .

EXPOSE 8080

# command to run on container start
CMD [ "node", "./bin/www" ]
