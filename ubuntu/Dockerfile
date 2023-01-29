FROM ubuntu:22.04

WORKDIR /usr/src/app

ENV NODE_ENV production

# install openshift client on container
COPY openshift-client-linux-4.5.0-0.okd-2020-07-14-153706-ga.tar.gz ./
RUN tar -xvf openshift-client-linux-4.5.0-0.okd-2020-07-14-153706-ga.tar.gz

# Just copy the package.json...
#COPY package*.json ./

COPY . .

ENV PATH="${PATH}:/usr/src/app"

RUN echo GIGAAAAAAAAAAAAAAAAAAAAAAAA
