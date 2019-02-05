const Discord = require('discord.js');
const bot = new Discord.Client();

var prefix = ("/")

bot.on('ready', function(){
    bot.user.setGame("v0.0.82 OPEN-BETA | /help ! ");
    console.log(">>>connected bot.on true");
});

bot.login("NTIxMDcxOTEzNDEwNDk0NDg0.DzSYdg.FPEZ5kchL2RV84cx4roEOiMarew");


bot.on('message', message => {
    let command = message.content.split(" ")[0];
    const args = message.content.slice(prefix.length).split(/ +/);
    command = args.shift().toLowerCase();

    if (command === "kick") {
        let modRole = message.guild.roles.find("name", "GGDiams Staff");
        if(!message.member.roles.has(modRole.id)) {
            return message.reply("Tu n'as pas la permission d'utiliser cett commande.").catch(console.error);
        }
        if(message.mentions.users.size === 0) {
            return message.reply("Merci de mentionner l'utilisateur que je dois expulser.").catch(console.error);
        }
        let kickMember = message.guild.member(message.mentions.users.first())
        if(!kickMember) {
            return message.reply("Cet utilisateur est introuvable ou impossible à expulser.")
        }
        if(!message.guild.member(bot.user).hasPermission("KICK_MEMBERS")) {
            return message.reply("Je n'ai pas la permission ``KICK_MEMBERS`` pour faire ceci.").catch(console.error)
        }
        kickMember.kick().then(member => {
            message.reply(`${member.user.username} a été expulsé avec exploit !`).catch(console.error);
            message.guild.channels.find("name", "command-staff").send(`**${member.user.username}** a été expulsé par **${message.author.username}**`)
        }).catch(console.error)
    }

    if (command === "ban") {
        let modRole = message.guild.roles.find("name", "GGDiams Staff")
        if(!message.member.roles.has(modRole.id)) {
            return message.reply("Tu n'as pas la persmission d'exécuter cette commande.").catch(console.error);
        }
        const member = message.mentions.members.first();
        if (!member) return message.reply("Merci de mentionner l'utilisateur à bannir.")
        member.ban().then(member => {
            message.reply(`${member.user.username} a été banni avec exploit`).catch(console.error);
            message.guild.channels.find("name", "command-staff").send(`**${member.user.username}** a été banni par **${message.author.username}**`)
        }).catch(console.error)
    }

    if (message.content === prefix + "help"){
        message.channel.sendMessage("Liste des commandes :```\n /help 🆘 \n /ip 🕹 \n /news 📰 \n /infodiscord \n /lastversion 📤 \n /update 📥 \n /site 🔗 \n /joke 🤣 \n /staff 👑 \n /msgprivehelp 🛠 \n /connectaccount 📡 \n /ats.setup.exe 📥 \n /youtube 🎥 \n /twitter 🐤 \n /demande.event 📢 \n /boutique_<ggc,ggd> \n /codelines 💻 \n /commandsnumb 🔢 \n /invite 📩📨 \n /binfo (infos basiques) \n /ainfo (infos avancées)``` **MODERATION** : ``` /kick 🚪 \n /ban 🚨 ``` \n**PLUSIEURS COMMANDES SERONT AJOUTEES :) **");
        console.log("Commande /help effectué");
    }

    if (message.content === prefix + "ip"){
        message.channel.sendMessage("L'IP de GGDiams & GoodGame Craft est **GoodGameCraft.lcmc.pro**");
        console.log("Commande /ip effectué");
    }

    if (message.content === prefix + "news"){
        message.channel.sendMessage("Nouveauté : Nous avons des problèmes avec le serveur, Nous avons perdu les Maps, Maintenance. Temps de maintenance éstimée à {2} {semaines}");
        console.log("Commande /news effectué");
    }

    if (message.content === prefix + "lastversion"){
        message.channel.sendMessage("Dernière version du bot : **0.0.82 OPEN-BETA** \nCurrent version : **0.0.82 CLOSED-BETA** / **0.0.82 OPEN-BETA**");
        console.log("Commande /lastversion effectué");
    }

    if (message.content === prefix + "update"){
        message.channel.sendMessage("Le bot va être mit à jour...");
        console.log("Commande /update effectué");
    }

    if (message.content === prefix + "site"){
        message.channel.sendMessage("Site de GGDiams : __**https://evanrobin073.wixsite.com/accueil**__ \nSite des créateurs : __**https://alterratechspace.wixsite.com/alterra-tech-space**__ \nSite pour ajouter le bot à **VOTRE** serveur : __**https://ggdiamss5.wixsite.com/ggdiamsbot**__");
        console.log("Commande /site effectué");
    }

    if (message.content === prefix + "joke"){
        message.channel.sendMessage("Senzahiii aujourd'hui à 17H04 à posté :\n TARTE PURE \n CACA PURE \n P*TE PURE \n VA TE FAIRE PURE \n \n XGS aujourd'hui à 17H05 à posté :\n https://cdn.discordapp.com/attachments/536688572598714368/537002563988357141/Maskey-1_2.mp4");
        console.log("Commande /joke effectué");
    }

    if (message.content === prefix + "update"){
        message.channel.sendMessage("Aucune MAJ n'est disponible.");
        console.log("Commande /update effectué");
    }

    if (message.content === prefix + "offbot"){
        message.channel.sendMessage("Le bot va être arrêté.");
        console.log("Disable");
    }

    if (message.content === prefix + "staff"){
        message.channel.sendMessage("**STAFF** \n```\nFONDATEURS-CREATEURS : \n eXtra Geek Style \n Inspecteur Fury \n Maelstjeoire \n \nCO-FONDATEURS : \n Slaaaze \n \nRESPONSABLES : \n TRIPAA (LeFrenchtacos) \n GlinkTV \n lσl σσf man \n joue a tout \n TGameR \n \nADMINISTRATEURS : \n Monster Val \n Px_Tiago511 \n Azu Gameur \n \nDEVELOPPEURS \n Oatox_38 \n- \n- \n \nSUPER-MODO : \n- \n- \n- \n \nMODERATEURS : \n- \n- \n- \n \nHELPERS : \n ⎝\ WarFord /⎠\n- \n- \nBUILDER : \n- \n- \n- \n \nMODERATEUR de DISCORD : \n qokor_gaming \n<infinity places> \n \nGGDIAMS BOTS : \n Moi !! \n- \n- ```");
        console.log("Commande /staff effectué");
    }

    if (message.content === prefix + "msgprivehelp"){
        message.channel.sendMessage(`Le message d'aide à bien été envoyé au nom de **${message.author.username}**!`);
        message.react("👍");
        console.log("Hey ! Un joueur à besoins de TOI !!! VITE !!!");
    }

    if (message.content === prefix + "connectaccount"){
        message.channel.sendMessage("Connexion...");
        message.react("🔧")
        console.log("Commande /connectaccount effectué");
    }

    if (message.content === prefix + "connectaccount"){
        message.channel.sendMessage("**FATAL ERROR** : Aucun compte GGDiams détécté ! (Site en construction)");
        message.react("❌");
        console.log("Commande /connectaccount effectué");
    }

    if (message.content === prefix + "ats.setup.exe"){
        message.channel.sendMessage("📥 __**SETUP GGC&GGD Launcher**__ 📥: \n __**http://www.mediafire.com/file/xqoncfbqi6w1zjq/setup.exe/file**__");
        message.react("📥");
        console.log("Commande /ats.setup.exe effectué");
    }

    if (message.content === prefix + "youtube"){
        message.channel.sendMessage("**Chaînes Youtubes : \n``eXtra Geek Style : https://www.youtube.com/channel/UCvC8RNZ94wDDcJWXrUFr_qA \nInspecteur Fury : https://www.youtube.com/channel/UCudiE0t3fJZ9iKi82CkznTQ \nMaelstjeoire :  https://www.youtube.com/channel/UCoz7KtOa_9pC8Ur5jxuaYkg \nMrSlaze : https://www.youtube.com/channel/UCjrTfFeYs4XmBq-0TwdXlHQ \nWarFordYT : https://www.youtube.com/channel/UC9J-tRrtAuREaoslp8ibAtw%60%60%60 \nAzu Gameur : https://www.youtube.com/channel/UCSHS3fdwFnIuRlhywrX_ybw``")
        console.log("Commande /youtube effectué")
    }

    if (message.content === prefix + "twitter"){
        message.channel.sendMessage("Tweeter Officiels : \n``\nGGDiams : https://twitter.com/OfficielFury?lang=fr & https://twitter.com/geek_extra?lang=fr \nCraftMine MC : https://twitter.com/CraftMineMC1?lang=fr \nAlterra Tech Space/XGS : https://twitter.com/Alterrateam1?lang=fr & https://twitter.com/geek_extra?lang=fr \nInspecteur Fury : https://twitter.com/OfficielFury?lang=fr``")
        console.log("Commande /twitter effectué")
    }

    if (message.content === prefix + "demande.event"){
        message.channel.sendMessage(`Envoi d'une demande... \n**Nom de code ${message.author.id}**`);
        console.log("Commande /demande.event effectué.");
    }

    if (message.content === prefix + "demande.event"){
        message.reply("(membre serveur), demande un évènement !");
        console.log("Commande /demande.event (2) effectué");
    }

    if (message.content === prefix + "createdateggd"){
        message.channel.sendMessage("Le projet **GGDiams** à été créé le ``5 Mai 2015``.")
        console.log("Commande /createdate effectué")
    }

    if (message.content ===  prefix + "boutiqueggd"){
        message.channel.sendMessage("**BOUTIQUE** : __**https://ggdiamsstore.buycraft.net/**__")
        console.log("Commande /boutiqueggd effectué")
    }

    if (message.content === prefix + "boutiqueggc"){
        message.channel.sendMessage("**BOUTIQUE** : __**https://ggdiamsstore.buycraft.net/**__")
        console.log("Commande /boutiqueggc effectué")
    }

    if (message.content === prefix + "createdateggc"){
        message.channel.sendMessage("**Attente d'une réponse au serveur ``goodgamecraftdata.html/create_date_ggc.dat``...**")
        console.log("Commande /createdateggc effectué")
    }

    if (message.content === prefix + "codelines"){
        message.channel.sendMessage(`Le code du bot contient **278** lignes`)
        console.log("Commande /codelines effectué")
    }

    if (message.content === prefix + "commandsnumb"){
        message.channel.sendMessage("Le bot comporte **{28}** commandes.")
        console.log("Commande /commandsnumb effectué")
    }

    if (message.content === prefix + "invite"){
        message.channel.sendMessage("GGDiams \nC'est quoi ?\n C'est un serveur Minecraft/Discord très sympa et qui accepte tout le monde :)\n \nDe quoi est-il composé ?\n ► D'une multitude de salons pour discuter comme un #discussion, #commandes et biens d'autre \n ► D'un salon coquin pour les coquins :p (#nsfw) \n ► De 2 bots personnalisés ! par exemple le GGC&GGD Bot ou le GoodGame Craft ! \n ► De grades spéciaux qui vous seront alloués sur le Discord et sur le Serveur Minecraft et peut-être même sur le site non-officiel (https://evanrobin07.wixsite.com/ggdiamswebsite) \n ► Quand vous serez sur le serveur, le préfixe des 2 bots sont [/] !\n ► Vous serez obligés de lire les règles et de rejoindre le serveur partenaire.\n ► Créateur du bot : Alterra Tech Space (https://discord.gg/emsq4MM)\n◘LIEN◘ : https://discord.gg/dnzTQww")
        message.react("📩")
        message.react("📨")
        console.log("Commande /invite effectué")
    }

    if (message.content === prefix + "annoncekickall"){
        message.channel.sendMessage("@everyone :arrow_down: \n ```Un KickAll va être effectué\nRaison : Inactivité des membres \n conséquences : Toutes personnes non connectées ne seront pas kick. Toutes personnes connectées mais n'ayant pas coché la réaction seront kick. Toutes personnes ayant coché la réaction ne seront pas kick. \n  Pour l'en emêcher : Cocher la réaction ci-dessous\n``` Cocher : ✔");
        message.react("✔")
        console.log("Kick All Annoncé. /annoncekickall effectued");
    }

    if (message.content === prefix + "binfo"){
        var embed = new Discord.RichEmbed()
            .setTitle("VOS INFORMATIONS")
            .setDescription("Informations d'un joueur")
            .addField(`PEUDONYME 🗨 : **${message.author.username}**     DISCRI. 🌐 : **#${message.author.discriminator}**`)
            .addField("Commande en développement, en cas de problèmes, contactez eXtra Geek Style#7070")
            .addField("By Alterra Tech Space")
            .setColor("0x27AE60")
            .setFooter("Powered by Alterra Tech Space©, (https://alterratechspace.wixsite.com/alterra-tech-space) | eXtra Geek Style#7070")
        message.channel.sendEmbed(embed);
        console.log("Commande /binfo effectué.");
    }

    if (message.content === prefix + "ainfo"){
        var embed = new Discord.RichEmbed()
            .setTitle("VOS INFORMATIONS")
            .setDescription("Informations d'un joueur")
            .addField(`PEUDONYME 🗨 : **${message.author.username}**     DISCRI. 🌐 : **#${message.author.discriminator}**\n\nID 🆔 : **${message.author.id}**`)
            .addField("Commande en développement, en cas de problèmes, contactez eXtra Geek Style#7070")
            .addField("By Alterra Tech Space")
            .setColor("0x27AE60")
            .setFooter("Powered by Alterra Tech Space©, (https://alterratechspace.wixsite.com/alterra-tech-space) | eXtra Geek Style#7070")
        message.channel.sendEmbed(embed);
        console.log("Commande /ainfo effectué.");
    }

    if (message.content === prefix + "infodiscord"){
        var embed = new Discord.RichEmbed()
            .setDescription("Informations du Discord")
            .addField("Nom du discord : ", message.guild.name)
            .addField("Créé le ", message.guild.createdAt)
            .addField("Tu as rejoin le ", message.member.joinedAt)
            .addField("Nombre d'utilisateurs sur le Discord : ", message.guild.memberCount)
            .setColor("0x27AE60")
            .setFooter("Powered by Alterra Tech Space©, (https://alterratechspace.wixsite.com/alterra-tech-space) | eXtra Geek Style#7070")
        message.channel.sendEmbed(embed)
        console.log("Commande /infodiscord effectué")
    }

});