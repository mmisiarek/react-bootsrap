const path = require('path');
const express = require('express');
const compression = require('compression');

const port = process.env.PORT || 8080;

const server = express();

server.use(compression());
server.use('/', express.static('./dist'));

server.use((req, res) => {
  res.sendFile(path.resolve(__dirname, '..', 'dist/index.html'));
});

console.log(`server listens on ${port}`);
server.listen(port);
