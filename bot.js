var Discordie = require('discordie')

const Events = Discordie.Events;
const client = new Discordie();

client.connect({
  token: 'MjkzNjM5OTQ1OTg4NjAzOTA1.C7OijA.xKmjJ3HmC5dMJHAJFDBzS0-mq1w'
});


clients.Events.on(Events.GATEWAY_READY, e => {
  console.log('Connected as; ' + client.User.Username);

});

client.Dispatcher.on(Events.MESSAGE_CREATE, e => {
  if(e.message.content == 'PING') {
    e.message.channel.sendMessage('PONG');


  }


})
