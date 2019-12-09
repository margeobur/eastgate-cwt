import * as express from "express";
import * as http from "http";
import * as WebSocket from "ws";
import { AddressInfo } from "net";

// Using https://medium.com/factory-mind/websocket-node-js-express-step-by-step-using-typescript-725114ad5fe4
// as a guide

const app = express();

const server = http.createServer(app);

const wss = new WebSocket.Server({ server });

wss.on("connection", (ws: WebSocket) => {
  ws.on("message", (message: string) => {
    console.log("received: ", message);

    const broadcastRegex = /^broadcast\:/;

    if (broadcastRegex.test(message)) {
      message = message.replace(broadcastRegex, "");

      //send back the message to the other clients
      wss.clients.forEach(client => {
        if (client != ws) {
          client.send(`Hello, broadcast message -> ${message}`);
        }
      });
    } else {
      ws.send(`Hello, you sent -> ${message}`);
    }
  });
});

server.listen(process.env.PORT || 8999, () => {
  const address = server.address();

  if ((address as AddressInfo).address) {
    console.log(`Server started on port ${(address as AddressInfo).port} :)`);
  }
});
