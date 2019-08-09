import { publishToQueue } from './services/MQService';
import express from 'express';
import bodyParser from 'body-parser';
import http from 'http';

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post("/send", async function(req, res) {
    await publishToQueue(req.body.queue, JSON.stringify(req.body.payload));

    res.send(JSON.stringify({
        statusCode: 200,
        data: {"message-sent":true},
    }));
});

const port = process.env.PORT || 3000;
app.set('port', port);

const server = http.createServer(app);
server.listen(port);