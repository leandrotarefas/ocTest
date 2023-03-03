const nsq = require('nsqjs');

// Crie um novo consumidor NSQ que se inscreve no tópico 'meu-topico' e canal 'meu-canal'
const r = new nsq.Reader('meu-topico', 'meu-canal', {
  nsqdTCPAddresses: '127.0.0.1:4150'
});

// Defina a função de retorno de chamada a ser executada quando uma mensagem for recebida
r.on('message', msg => {
  console.log(`Mensagem recebida: ${msg.body.toString()}`);

  // Indique ao daemon NSQ que a mensagem foi processada com sucesso
  msg.finish();
});

// Inicie a conexão do consumidor com o daemon NSQ
r.connect();
