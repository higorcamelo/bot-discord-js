module.exports = async(client, mensagem) => {
   const latencia = Date.now() - mensagem.createdTimestamp;
   mensagem.reply(`Pong! Minha latência está em ${latencia} ms!`);
};
