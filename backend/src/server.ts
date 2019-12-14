import * as WebSocket from "ws";
import { Server } from "http";

const sceneStates = {
  scene1: "idle",
  scene2: "idle",
  scene3: "idle",
  scene4: "idle"
};

const createCTWServer = (server: Server, path: string) => {
  const wss = new WebSocket.Server({ server, path });

  wss.on("connection", (ws: WebSocket) => {
    ws.on("message", (message: string) => {
      const data = JSON.parse(message);

      if (data) {
        if (
          data.messageType === "status-update" &&
          (data.source === "scene1" ||
            data.source === "scene2" ||
            data.source === "scene3" ||
            data.source === "scene4")
        ) {
          switch (data.source) {
            case "scene1":
              sceneStates.scene1 = data.status;
              break;
            case "scene2":
              sceneStates.scene2 = data.status;
              break;
            case "scene3":
              sceneStates.scene3 = data.status;
              break;
            case "scene4":
              sceneStates.scene4 = data.status;
              break;
          }

          wss.clients.forEach(client => {
            client.send(message);
          });
        }
      }
    });

    // When a client connects, send them the current sceneStates
    ws.send({
      scene1: sceneStates.scene1,
      scene2: sceneStates.scene2,
      scene3: sceneStates.scene3,
      scene4: sceneStates.scene4
    });
  });

  return wss;
};

export default createCTWServer;
