const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./config.json");
const prefix = '-';
const path = require('path');
const dirPath = path.join(__dirname, './comandos');

const fs = require('fs');
client.commands = new Discord.Collection();
const arquivosComandos = fs.readdirSync(dirPath).filter(file => file.endsWith('.js'));

for(const file of arquivosComandos){
  const comando = require(`./comandos/${file}`);
  client.commands.set(comando.name, comando);
}

client.on("ready", () =>{
    console.log(`Estou online!`);
    client.user.setStatus("dnd");
    client.user.setActivity("Firme, forte e pronto para a ação!");
});

client.on("guildMemberAdd", (member) =>{
  const boasVindas = member.guild.channels.cache.find(channel => channel.id == config.geralID);
  boasVindas.send(`Ih ala, o ${member.displayName} entrou!`)
});

client.on("message", mensagem =>{
  if(!mensagem.content.startsWith(prefix) || mensagem.author.bot){
    return;
  }
  const args = mensagem.content.slice(prefix.length).trim().split(/ +/);
  const nomeComando = args.shift().toLocaleLowerCase();

  if(!client.commands.has(nomeComando)){
    return;
  }
  const comando = client.commands.get(nomeComando);
  if(!args.length){
    return mensagem.channel.send("Não há argumentos!");
  }
  try{
    comando.execute(mensagem, args);
  }catch(erro){
    console.error(erro);
    mensagem.reply("Ih, erro!");
  }
});



client.login(config.token);