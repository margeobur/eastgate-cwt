"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const http = require("http");
const WebSocket = require("ws");
const app = express();
const server = http.createServer(app);
const wss = new WebSocket.Server({ server });
wss.on("connection", (ws) => {
    ws.on("message", (message) => {
        console.log("received: ", message);
        ws.send(`Hello, you sent -> ${message}`);
    });
});
server.listen(process.env.PORT || 8999, () => {
    const address = server.address();
    if (address.address) {
        console.log(`Server started on port ${address.port} :)`);
    }
});
//# sourceMappingURL=server.js.map