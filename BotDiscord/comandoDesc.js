module.exports = (client, mensagem) =>{
    var message = mensagem.content.split(" ");
    message = message[0];
    mensagem.reply(`Comando '${message}' inexistente! \n Voce pode utilizar %ajuda se quiser saber quais comandos existem`);
}