import * as WebSocket from "ws";
import * as http from "http";

const createCTWServer = (server: http.Server, path: string) => {
  const wss = new WebSocket.Server({ server, path });

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

  return wss;
};

export default createCTWServer;
