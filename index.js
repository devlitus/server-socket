const express = require('express')
const path = require('path');
require('dotenv').config()

const app = express();

app.use(express.json());

// Node Server
const server = require('http').createServer(app);

// Active server
server.listen(process.env.PORT, (err) => {
  if(err) throw new Error(err);
  console.info(`Server up on port ${process.env.PORT}`);
})

