module.exports = { 
    name: "teste-args",
    descricao: "testa a funcionalidade dos args",
    args: true,
    execute(mensagem, args){
        if(args[0] === 'foo'){
            return mensagem.channel.send("Bar!");
        }

        mensagem.channel.send(`Argumentos: ${args} \n Tamanho dos argumentos: ${args.length}`);
    }
}