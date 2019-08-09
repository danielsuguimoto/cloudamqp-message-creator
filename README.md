# cloudamqp-message-creator
Push RabbitMQ messages to cloudamqp server

## Installation
* Make a copy of the file ".env.dist" and rename it to ".env"
* Create an account on https://www.cloudamqp.com/
* Create an RabbitMQ instance
* On the instance details page, copy the AMQP URL
* Paste the AMQP URL to the .env variable 'CONNECTION_URL'

## Serving
Run the command `npm run start`

## Pushing a message
Post to `localhost:3000/send` with the following json request body:

| Parameter | Required           | Description                                                                                  |
|-----------|--------------------|----------------------------------------------------------------------------------------------|
| `queue`   | :white_check_mark: | The queue name to post the message into                                                      |
| `payload` | :white_check_mark: | The message to be sent to the queue                                                          |
