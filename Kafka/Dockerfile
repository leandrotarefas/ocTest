FROM openjdk:8-jre-alpine

ENV KAFKA_VERSION=2.9.2
ENV SCALA_VERSION=2.13

RUN wget https://downloads.apache.org/kafka/${KAFKA_VERSION}/kafka_${SCALA_VERSION}-${KAFKA_VERSION}.tgz && \
    tar -xzf kafka_${SCALA_VERSION}-${KAFKA_VERSION}.tgz && \
    rm kafka_${SCALA_VERSION}-${KAFKA_VERSION}.tgz

WORKDIR /kafka_${SCALA_VERSION}-${KAFKA_VERSION}

COPY server.properties config/
RUN echo "listeners=PLAINTEXT://0.0.0.0:9092" >> config/server.properties

EXPOSE 9092

CMD ["bin/kafka-server-start.sh", "config/server.properties"]
