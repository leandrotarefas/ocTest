const { Kafka } = require('kafkajs')

const kafka = new Kafka({
  clientId: 'my-app',
  brokers: ['localhost:9092'],
  connectionTimeout: 3000, // opcional, define o tempo de espera para se conectar ao Kafka
  requestTimeout: 25000 // opcional, define o tempo de espera para as operações com o Kafka
})

const consumer = kafka.consumer({ groupId: 'test-group' })

async function run() {
  await consumer.connect()
  await consumer.subscribe({ topic: 'test-topic' })

  await consumer.run({
    eachMessage: async ({ topic, partition, message }) => {
      console.log({
        value: message.value.toString(),
      })
    },
  })
}

run().catch(console.error)

const producer = kafka.producer()

async function sendMessages() {
  await producer.connect()
  await producer.send({
    topic: 'test-topic',
    messages: [
      { value: 'Hello Kafka!' },
    ],
  })

  await producer.disconnect()
}

sendMessages().catch(console.error)
