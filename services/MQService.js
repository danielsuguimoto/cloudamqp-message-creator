import amqp from 'amqplib/callback_api';

const CONN_URL = process.env.CONNECTION_URL;

let ch = null;
amqp.connect(CONN_URL, function (err, conn) {
   conn.createChannel(function (err, channel) {
      ch = channel;
   });
});

export const publishToQueue = async function (queueName, data) {
    ch.assertQueue(queueName, {persistent: true});
    ch.sendToQueue(queueName, Buffer.from(data), {persistent: true});
}
process.on('exit', (code) => {
   ch.close();
   console.log(`Closing rabbitmq channel`);
});