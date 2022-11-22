const Discord = require('discord.js');

module.exports = {
    name: "rps",
    aliases: ["ppt"],
    desc: "juega al piedra papel o tijera con el bot",
    usage: "!rps <piedra o papel o tijera>",
    run: async(client, message, args) => {

    if(!args[0]) return message.channel.send("Opciones: `piedra`, `papel` o `tijera`")
    let Options = ["piedra", "papel", "tijera", "tijeras"]
    if(!Options.includes(args[0].toLowerCase())) return message.channel.send(":x: Opcion incorrecta!", { ephemeral: true })
  
    if(args[0] == "piedra") {
  
      let random1 = ["He ganado! Elegi papel. El papel cubre a la roca.", 
                     "Has ganado! Elegi tijera. Las tijeras no pueden cortar rocas.", 
                     "Empate. Piedra vs piedra, gana... La piedra!"] 
  
     
      message.reply(" "+random1[Math.floor(Math.random() * random1.length)]+"")
      
      
    } else if(args[0] == "papel") {
  
      let random2 = ["He ganado! Elegi tijera. Las tijeras cortan el papel.", 
                     "Has ganado! Elegi piedra. El papel cubre a la roca.",  
                     "Empate."] 
  
      message.reply(" "+random2[Math.floor(Math.random() * random2.length)]+"")
      
    } else if(args[0] == "tijera" || "tijeras") {

        let random3 = ["He ganado! Eleji piedra. La piedra rompe tijeras.", 
                     "Has ganado! Elegi papel. Las tijeras cortan al papel", 
                     "Empate."] 
  
      message.reply(" "+random3[Math.floor(Math.random() * random3.length)]+"")
    } 
    
  
    
  }
    
}