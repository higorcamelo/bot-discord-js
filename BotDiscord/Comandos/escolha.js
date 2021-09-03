module.exports = {
    name: "escolha",
    descricao: "aplica reações baseadas em repostas do usuario a emotes",
    args: false,
    async execute(mensagem){

    const escolha = await mensagem.reply("Escolha uma classe para o RPG!");
    escolha.react('🐵');
    escolha.react('💃');
    escolha.react('🔮');
    escolha.react('🔞');
    escolha.react('🚁');

    const filtro = (reaction, user) =>{
        return['🐵','💃','🔮','🔞','🚁'].includes(reaction.emoji.name) && user.id == mensagem.author.id;
    }

    escolha.awaitReactions(filtro, {max: 1, time: 10000, errors:['time']})
        .then(collected =>{
            const reacao = collected.first();

            switch(reacao.emoji.name){
                case '🐵':
                    mensagem.reply("Você escolheu o macaco, a classe mais nobre para um homem. Parabéns");
                    break;
                case '🔮':
                    mensagem.reply("A intenção original era exibir classes comuns de RPGs, mas por falta de icones que lembrem elas, imagine essa bola de cristal como se fosse o mago. Obrigado.");
                    break;
                case '💃':
                    mensagem.reply("Bardos e dançarinos nunca são boas classes, em Final Fantasy V, apenas uma habilidade do Dançarino prestava, e olhe lá, pois mais pro final do jogo, ela não dava tanto dano.");
                    break;
                case '🔞':
                    mensagem.reply("O servidor de baixaria é pra lá, mais respeito, por favor.");
                    break;
                case '🚁':
                    mensagem.reply("Então você se identifica como um helicoptero de combate... isso muda fala sobre a sociedade.");
                    break;
            }
            escolha.delete()
        })
        .catch(collected =>{
            escolha.delete();
            mensagem.reply("Demorou muito, amigão")
        })

    },
};