const express = require('express');
const server = express();
server.use(express.json());

server.get('/', (req, res) => {
    res.statusCode(200).send({ api: "up" });
});

server.listen(5000, () => console.log('\n\n\u{1F680}\u{1F680}\u{1F680}\u{1F680}\u{1F680} PORT 5000 \n\n'));

module.exports = server;