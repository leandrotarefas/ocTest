FROM ubuntu:20.04

ENV BRANCH 2.2
ENV RSTUDIO 1.4.1103

ENV DEBIAN_FRONTEND noninteractive

# Install.
RUN \
  apt-get update && \
  apt-get -y dist-upgrade && \
  apt-get install -y software-properties-common && \
  add-apt-repository -y ppa:opencpu/opencpu-2.2 && \
  apt-get update && \
  apt-get install -y wget make devscripts apache2-dev apache2 libapreq2-dev r-base r-base-dev libapparmor-dev libcurl4-openssl-dev libprotobuf-dev protobuf-compiler libcairo2-dev xvfb xauth xfonts-base curl libssl-dev libxml2-dev libicu-dev pkg-config libssh2-1-dev locales apt-utils && \
  useradd -ms /bin/bash builder

# Different from debian
RUN apt-get install -y language-pack-en-base

USER builder

RUN \
  cd ~ && \
  wget --quiet https://github.com/opencpu/opencpu-server/archive/v${BRANCH}.tar.gz && \
  tar xzf v${BRANCH}.tar.gz && \
  cd opencpu-server-${BRANCH} && \
  dpkg-buildpackage -us -uc

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

