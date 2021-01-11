const Discord = require("discord.js");
const client = new Discord.Client();

function presence(){
    client.user.setPresence({
       status: "online",
       game: {
          name: "Utiliza %hola",
          type: "PLAYING"
       }
    });
 }

client.on("ready", () => {
    console.log("Andamos activos papi!");
 });
 
 client.on("message", (message) => {
   if(message.content.startsWith("%hola")) {
     message.channel.send("Holis hermos@ que tal tu día!?");
   }
 });

 client.on("message", (message) => {
   if(message.content.startsWith("%adios")) {
     message.channel.send("hmm, espero que pases un buen día...!?");
   }
 });
 
 client.on("guildMemberAdd", miembro =>{
    var Canal = client.channels.find(channel => channel.id === ("668529308838395907"));
    Canal.send("Bienvenido <@" + miembro.id + "> espero que pases una muuuuy buena estancia en el servidor lee el canal de reglas antes de nada nwn.\n\n https://i.imgur.com/NBl3auj.gif . ");
 });

 client.login("Nzk3OTkwMzI4MzMzMzY5MzU0.X_ugaA.pyJlbyQw8uVtaXMcU_0Nx_HsaX0");