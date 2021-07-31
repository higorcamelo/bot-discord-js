const config = require ("../config.json");
const commands = require ("../leitor.js")(config.prefix);

const descricao = {
    "%ajuda": "Exibe a lista de comandos, tipo o que está acontecendo agora",

    "%ping": "O Hello World dos bots de Discord (mas agora mostrando seu ms!)",

    "%imagem": "O sonho de princesa do autor, exibe uma imagem baseada no que você escreve (um dia será real)",

    "%escolha": "Escolha uma classe dentre uma excentria e espetacular seleção que faria D&D chorar no banho"
}

module.exports = async (client, mensagem) =>{
    var lista = "Comandos:";
    Object.keys(commands).forEach(command =>{
        lista += `\n ${command}: ${descricao[command] ? descricao[command] : 'Sem descrição'}`
    });
    mensagem.reply(lista);
}