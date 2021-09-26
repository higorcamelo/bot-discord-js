const { MessageEmbed } = require('discord.js');
module.exports = {
    name:'ajuda',
    description:'lista os comandos disponiveis',
    args:false,
    execute(mensagem){
        const mensagemEmbed = new MessageEmbed()
        .setColor('RANDON')
        .setTitle('Olha só o que eu sei fazer:')
        .addFields(
            {name:'-ajuda', value:'Bem, é o comando que você está, o qual exibe os comandos disponiveis.'},
            {name:'-ping', value:'Respondo "Pong!" e exibo a latencia que estou tendo.'},
            {name:'-escolha', value:'Exibo algumas opções para você reagir e falo coisas diferentes dependendo da resposta.'},
            {name:'-imagem', value:'Pesquiso uma imagem que você quiser. As vezes posso demorar um pouco, mas não desista de mim!'},
            {name:'-video', value:'Pesquiso no YouTube um video da sua preferencia.'}
        )
        mensagem.reply(mensagemEmbed);
    }
}