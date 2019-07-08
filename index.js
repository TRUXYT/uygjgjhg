const { Client, RichEmbed } = require('discord.js');

const client = new Client();

client.on('ready', () => {
    console.log('Bot ON');
    console.log('Logged In as', client.user.tag)
    client.user.setStatus('dnd'); // online, idle, invisible, dnd

    console.log('Bot status: ', client.user.presence.status);

    // Bot sending a Message to a text channel called test
    const testChannel = client.channels.find(x => x.name === 'test')
    console.log(testChannel)
    // client.channels.find(c => c.name === 'test').send('Hello Server!')

});

// Bot listenning messages
client.on('message', msg => {
    console.log(msg.content)
    if (msg.content === '!!twitter') {
        msg.reply('►https://twitter.com/RandreasSan')
    }

    if (msg.content === '!!facebook') {
        msg.channel.send('►https://www.facebook.com/san.randreas');
    }

    if (msg.content.includes('!!test')) {
        msg.channel.send('►El bot esta funcionando correctamente');
    }

    if (msg.content === '!!yt') {
        msg.channel.send('►https://www.youtube.com/channel/UC3wkqZ4q0fxwZU-OtzRGPWg?view_as=subscriber');
    }

    if (msg.content === '!!help') {
        msg.channel.send('►COMANDOS: !!help !!clear !!info !!foro !!ip !!yt !!twitter !!facebook !!donar');
    }

    if (msg.content === '!!ip') {
        msg.channel.send('►IP: 192.99.69.37:3239 [NUEVA IP]');
    }

    if (msg.content === '!!foro') {
        msg.channel.send('►FORO: www.san-randreas.tk');
    }

    if (msg.content === '!!info') {
        msg.channel.send('►INFORMACIÓN: contacta con un desarrollador para mas información');
    }

    if (msg.content === '!!donar') {
        msg.channel.send('►DONACIÓN: https://paypal.me/SanRandreas');
    }

    //MAYUSCULA AL PRINCIPIO

    if (msg.content === '!!Twitter') {
        msg.reply('►https://twitter.com/RandreasSan')
    }

    if (msg.content === '!!Facebook') {
        msg.channel.send('►https://www.facebook.com/san.randreas');
    }

    if (msg.content.includes('!!Test')) {
        msg.channel.send('►El bot esta funcionando correctamente');
    }

    if (msg.content === '!!Yt') {
        msg.channel.send('►https://www.youtube.com/channel/UC3wkqZ4q0fxwZU-OtzRGPWg?view_as=subscriber');
    }

    if (msg.content === '!!Help') {
        msg.channel.send('►COMANDOS: !!help !!clear !!info !!foro !!ip !!yt !!twitter !!facebook !!donar');
    }

    if (msg.content === '!!Ip') {
        msg.channel.send('►IP: 192.99.69.37:3239 [NUEVA IP]');
    }

    if (msg.content === '!!Foro') {
        msg.channel.send('►FORO: www.san-randreas.tk');
    }

    if (msg.content === '!!Info') {
        msg.channel.send('►INFORMACIÓN: contacta con un desarrollador para mas información');
    }

    if (msg.content === '!!Donar') {
        msg.channel.send('►DONACIÓN: https://paypal.me/SanRandreas');
    }

    //Mayusculas

    if (msg.content === '!!TWITTER') {
        msg.reply('►https://twitter.com/RandreasSan')
    }

    if (msg.content === '!!FACEBOOK') {
        msg.channel.send('►https://www.facebook.com/san.randreas');
    }

    if (msg.content.includes('!!TEST')) {
        msg.channel.send('►El bot esta funcionando correctamente');
    }

    if (msg.content === '!!YT') {
        msg.channel.send('►https://www.youtube.com/channel/UC3wkqZ4q0fxwZU-OtzRGPWg?view_as=subscriber');
    }

    if (msg.content === '!!HELP') {
        msg.channel.send('►COMANDOS: !!help !!clear !!info !!foro !!ip !!yt !!twitter !!facebook !!donar');
    }

    if (msg.content === '!!IP') {
        msg.channel.send('►IP: 192.99.69.37:3239 [NUEVA IP]');
    }

    if (msg.content === '!!FORO') {
        msg.channel.send('►FORO: www.san-randreas.tk');
    }

    if (msg.content === '!!INFO') {
        msg.channel.send('►INFORMACIÓN: contacta con un desarrollador para mas información');
    }

    if (msg.content === '!!DONAR') {
        msg.channel.send('►DONACIÓN: https://paypal.me/SanRandreas');
    }

    // Deleting 100 messages
    if (msg.content.startsWith('!!clear')) {
        async function clear() {
            try {
                // await msg.delete();
                const fetched = await msg.channel.fetchMessages({limit: 500});
                msg.channel.bulkDelete(fetched);;
                msg.channel.send(`Mensajes borrados por ${msg.author}`);
            }
            catch (e) {
                console.log(e);
            }
        }
        clear();
    }
});


const token = 'NTk0OTMxMzMzODUyMTY4MTkz.XSLgLA._q3ezASXVYbwtHPuQB2O3N4Aw_U';
client.login(token);