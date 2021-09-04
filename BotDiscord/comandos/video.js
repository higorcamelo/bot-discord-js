const videoYT = require('youtube-sr').default;
const { MessageEmbed, Message, Util } = require('discord.js');

module.exports = {
    name: 'video',
    descricao: 'pesquisa um video de acordo com parametro do usuario',
    args: true,
    async execute(mensagem, args){
        if(!args.length){
            mensagem.reply('Insira uma coisa para pesquisar');
        }else{
            const busca = args.join('');
            function achaVideo(title, url, duration, thumbnail, views, description){
                const resultado ={
                    'title':title,
                    'url':url,
                    'duration':duration,
                    'thumbnail':thumbnail,
                    'views':views,
                    'description':description
                }
                return resultado;
            }
        
            let infoVideo = await videoYT.searchOne(busca);
            if (!infoVideo){
                mensagem.reply('Nenhum video encontrado!');
            }
            videoDetalhe = achaVideo(Util.escapeMarkdown(infoVideo.title), infoVideo.url, infoVideo.durationFormatted, infoVideo.thumbnail.url, infoVideo.uploadedAt, infoVideo.views, infoVideo.description);

            const embed = new MessageEmbed()
            .setTitle(videoDetalhe.title)
            .setURL(videoDetalhe.url)
            .setThumbnail(videoDetalhe.thumbnail)
            .setColor('RANDOM')
            .setDescription(`
                Duração: ${videoDetalhe.duration}
                Visualizações: ${videoDetalhe.views}
                Postado em: ${videoDetalhe.uploadedAt}
            `)
            .setFooter(`Um oferecimento de ${mensagem.author.username}`)

            mensagem.reply(embed);
        }
    }
};