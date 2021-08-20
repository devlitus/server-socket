const express = require('express')
const path = require('path');

require('dotenv').config()

const app = express();

app.use(express.json());
// Path public
const publicPath = path.resolve(__dirname, 'public');
app.use(express.static(publicPath));


// Node Server
const server = require('http').createServer(app);
module.exports.io = require('socket.io')(server);
require('./sockets/socket');

app.get('/', (res, req) => {})


// Active server
server.listen(process.env.PORT, (err) => {
  if(err) throw new Error(err);
  console.info(`Server up on port ${process.env.PORT}`);
})

