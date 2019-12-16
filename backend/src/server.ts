import * as WebSocket from "ws";
import { Server } from "http";
import { Logger } from "winston";

const sceneStates = {
  scene1: "idle",
  scene2: "idle",
  scene3: "idle",
  scene4: "idle"
};

const createCTWServer = (server: Server, path: string, wLogger: Logger) => {
  const wss = new WebSocket.Server({ server, path });

  wss.on("connection", (ws: WebSocket) => {
    ws.on("message", (data: string) => {
      const message = JSON.parse(data);

      if (message) {
        if (
          message.messageType === "status-update" &&
          (message.source === "scene1" ||
            message.source === "scene2" ||
            message.source === "scene3" ||
            message.source === "scene4")
        ) {
          wLogger.info(message.source + ": " + message.status);

          switch (message.source) {
            case "scene1":
              sceneStates.scene1 = message.status;
              break;
            case "scene2":
              sceneStates.scene2 = message.status;
              break;
            case "scene3":
              sceneStates.scene3 = message.status;
              break;
            case "scene4":
              sceneStates.scene4 = message.status;
              break;
          }

          wss.clients.forEach(client => {
            client.send(JSON.stringify(sceneStates));
          });
        }
      }
    });

    // When a client connects, send them the current sceneStates
    ws.send(
      JSON.stringify({
        scene1: sceneStates.scene1,
        scene2: sceneStates.scene2,
        scene3: sceneStates.scene3,
        scene4: sceneStates.scene4
      })
    );
  });

  return wss;
};

export default createCTWServer;
