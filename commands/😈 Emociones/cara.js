const DIG = require("discord-image-generation");
const { AttachmentBuilder } = require("discord.js");

module.exports = {
  name: "cara",
  description: "OMG, youre so wrong! *facepalming* ",
  aliases: ["facep", "facepa", "facepal", "fp", "fpal"],
  run: async (client, message, args) => {
    let personFacePalmed = message.mentions.users.first();
    
  
    if (!personFacePalmed) {
      let authorsAvatar = message.author.displayAvatarURL({ dynamic: false, format: "png" });
      let facePalmedImage = await new DIG.Facepalm().getImage(authorsAvatar);
      let facePalmedFile = new AttachmentBuilder(facePalmedImage, "deleteAvatar.png");
      
      return message.reply({ files: [facePalmedFile] });
    };
    if (personFacePalmed) {
      let personFacePalmedAvatar = personFacePalmed.displayAvatarURL({ dynamic: false, format: "png" });
      let personFacePalmedImage = await new DIG.Facepalm().getImage(personFacePalmedAvatar);
      let personFacePalmedFile = new AttachmentBuilder(personFacePalmedImage, "deletedAvatar.png");
    
      return message.reply({ files: [personFacePalmedFile] });
    };
  }
};