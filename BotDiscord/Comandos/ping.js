module.exports = {
   name : "ping",
   descricao: "comando que responde com pong e exibe ms",

   execute(mensagem, args){
   const latencia = Date.now() - mensagem.createdTimestamp;
   mensagem.reply(`Pong! Minha latência está em ${latencia} ms!`);
   },
};
