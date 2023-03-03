
const nsq = require('nsqjs');

// Crie um novo produtor NSQ que se conecta a um daemon NSQ em execução
const w = new nsq.Writer('127.0.0.1', 4150);

// Inicie a conexão do produtor com o daemon NSQ
w.connect();

// Envie uma mensagem para o tópico 'meu-topico'
w.publish('meu-topico', 'minha mensagem', err => {
  if (err) {
    console.error('Falha ao enviar mensagem:', err);
    return;
  }
  console.log('Mensagem enviada com sucesso!');
});
