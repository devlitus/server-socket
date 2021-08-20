const express = require("express");
require("dotenv").config();
const cors = require("cors");
const path = require("path");

const app = express();
//  middelware
app.use(express.json());
app.use(cors());

// Node Server
const server = require("http").createServer(app);
module.exports.io = require("socket.io")(server, {
  cors: { origin: true, credencials: true },
});
require("./sockets/socket");

// Path public
const publicPath = path.resolve(__dirname, "public");
app.use(express.static(publicPath));

// Active server
server.listen(process.env.PORT, (err) => {
  if (err) throw new Error(err);
  console.info(`Server up on port ${process.env.PORT}`);
});
