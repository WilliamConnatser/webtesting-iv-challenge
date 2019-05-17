const express = require('express');
const routes = require('./routes');
const server = express();

server.use(express.json());
server.use('/',routes);

server.listen(5000, () => console.log('\n\n\u{1F680}\u{1F680}\u{1F680}\u{1F680}\u{1F680} PORT 5000 \n\n'));

module.exports = server;