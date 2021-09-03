var Scraper = require('images-scraper');
const google = new Scraper({
    puppeteer: {
    headless: true,
    },
  });
  
module.exports = {
    name: 'imagem',
    descricao: 'pesquisa por uma imagem de acordo com parametro do usuario',
    args: true,
    async execute(mensagem, args){
        if(!args.length){
            mensagem.reply('Insira uma coisa para eu pesquisar');
        }else{
            const consulta_imagem = args.join('');
            const resultado_imagem = await google.scrape(consulta_imagem, 1);
            mensagem.reply(resultado_imagem[0].url);
        }

    }
}