module.exports = { 
    name: "teste",
    descricao: "testa a funcionalidade dos args",
    args: true,
    
    execute(mensagem, args){
        mensagem.channel.send(`Argumentos: ${args} \n Tamanho dos argumentos: ${args.length}`);
    },
};