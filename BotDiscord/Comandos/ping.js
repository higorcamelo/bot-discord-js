module.exports = {
   name : "ping",
   descricao: "comando que responde com pong e exibe ms",
   args: false,
   execute(mensagem, args){
   const latencia = mensagem.createdTimestamp - Date.now();
   mensagem.reply(`Pong! Minha latência está em ${latencia} ms!`);
   },
};
