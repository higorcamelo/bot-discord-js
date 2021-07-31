const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./config.json");
const prefix = '-';

const leitorComandos = require("./leitor.js")(prefix);
const comandoDesconhecido = require("./comandoDesc.js");

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

client.on("message",(mensagem) =>{
  if(!mensagem.author.bot){
    console.log(`${mensagem.author.username} : ${mensagem.content}`);

    const args = mensagem.content.split(" ");
    if(leitorComandos[args[0]]){
      leitorComandos[args[0]](client,mensagem);
    }else if(args[0].split("")[0] == config.prefix){
      comandoDesconhecido(client,mensagem);
    } 
  }
});



client.login(config.token);