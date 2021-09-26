const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./config.json");
const prefix = '-';
const path = require('path');
const dirPath = path.join(__dirname, './comandos');

const fs = require('fs');
client.commands = new Discord.Collection();
const arquivosComandos = fs.readdirSync(dirPath).filter(file => file.endsWith('.js'));
//Leitor de comandos

for(const file of arquivosComandos){
  const comando = require(`./comandos/${file}`);
  client.commands.set(comando.name, comando);
}
//Identifica e cataloga os comandos existentes na pasta /comandos

client.on("ready", () =>{
    console.log(`Estou online!`);
    client.user.setActivity("Firme, forte e pronto para a ação!");
});
//Exibe uma mensagem no terminal e no próprio Discord quando o bot é inicializado

client.on("guildMemberAdd", (member) =>{
  const boasVindas = member.guild.channels.cache.find(channel => channel.id == config.geralID);
  boasVindas.send(`Ih ala, o ${member.displayName} entrou!`)
});
//Define uma mensagem de boas vindas a um usuario novo no servidor

client.on("message", mensagem =>{
  if(!mensagem.content.startsWith(prefix) || mensagem.author.bot){
    return;
    //Se o prefixo não existir ou o autor da mensagem for um bot, nada é feito
  }
  const args = mensagem.content.slice(prefix.length).trim().split(/ +/);
  const nomeComando = args.shift().toLocaleLowerCase();
  //Separa o prefixo do nome do comando e o padroniza, evitando case sensitive
  if(!client.commands.has(nomeComando)){
    mensagem.reply("Não entendi, se não souber os comandos, pode digitar '-ajuda'");
  }
  const comando = client.commands.get(nomeComando);
  try{
    comando.execute(mensagem, args);
  }catch(erro){
    console.error(erro);
    mensagem.reply("Ih, erro!");
  }
});



client.login(config.token);