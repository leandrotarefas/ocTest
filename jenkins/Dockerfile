FROM ubuntu:20.04

ENV BRANCH 2.2
ENV RSTUDIO 1.4.1103

ENV DEBIAN_FRONTEND noninteractive

# Install.
RUN \
  apt-get update && \
  apt-get -y dist-upgrade && \
  apt-get install -y software-properties-common && \

USER root

RUN apt-get update
RUN apt-get install -y maven
RUN apt-get install -y wget
RUN rm -rf /var/lib/apt/lists/*
RUN wget https://github.com/openshift/origin/releases/download/v1.5.0/openshift-origin-client-tools-v1.5.0-031cbe4-linux-64bit.tar.gz
RUN mv openshift-origin-client-tools-v1.5.0-031cbe4-linux-64bit.tar.gz /opt/
RUN tar -zxvf /opt/openshift-origin-client-tools-v1.5.0-031cbe4-linux-64bit.tar.gz -C /opt/
RUN rm /opt/openshift-origin-client-tools-v1.5.0-031cbe4-linux-64bit.tar.gz
RUN echo 'export OC_CLIENT=/opt/openshift-origin-client-tools-v1.5.0-031cbe4-linux-64bit\nexport PATH=$OC_CLIENT:$PATH\n' >> /etc/bash.bashrc

