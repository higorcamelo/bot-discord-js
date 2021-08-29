const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./config.json");
const prefix = '-';
const path = require('path');
const dirPath = path.resolve(__dirname, './comandos/');

const fs = require('fs');
client.commands = new Discord.Collection();
const arquivosComandos = fs.readdirSync(dirPath).filter(file => file.endsWith('.js'));
client.on("ready", () =>{
    console.log(`Estou online!`);
    client.user.setStatus("dnd");
    client.user.setActivity("Firme, forte e pronto para a ação!");
});

client.on("guildCreate", (guild) =>{
    console.log(`Bot entrou no servidor: ${guild.name} (id: ${guild.id}). População: ${guild.memberCount} habitantes! `);
}); 

client.on("guildDelete", (guild) =>{
    console.log(`O Bot foi removido do servidor ${guild.name} (id: ${guild.id}), pressione F para prestar condolencias`);
});

client.on("guildMemberAdd", (member) =>{
  const boasVindas = member.guild.channels.cache.find(channel => channel.id == config.geralID);
  boasVindas.send(`Ih ala, o ${member.displayName} entroukkkkkkkkkjjjkjkkkk`)
});

for(const file in arquivosComandos){
  const comando = require(`./comandos/${file}`);
  client.commands.set(comando.name, comando);
}

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
  if(!args.length()){
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