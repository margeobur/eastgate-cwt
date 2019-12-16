import * as express from "express";
import { createServer } from "http";
import * as path from "path";
import { AddressInfo } from "net";
import createCWTServer from "./server";
import { createLogger, format, transports } from "winston";
import "winston-daily-rotate-file";

const port = process.env.PORT || "50000";
const websocketPath = "/socket";

const app = express();
const server = createServer(app);

const myFormat = format.printf(input => {
  const { level, message, label, timestamp } = input;
  return `[${timestamp}]${level}: ${message}`;
});

const wLogger = createLogger({
  level: "info",
  format: format.combine(
    format.timestamp({
      format: "YYYY-MM-DDTHH:mm:ss.SSS"
    }),
    myFormat
  ),
  defaultMeta: { server: "cwt-server" },
  transports: [
    new transports.Console(),
    new transports.DailyRotateFile({
      filename: "eastgateCWT_%DATE%.log",
      dirname: "./logs"
    })
  ]
});

const wss = createCWTServer(server, websocketPath, wLogger);

const router = express.Router();

app.use("/", router);
app.use(express.static(path.join(__dirname, "build")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname + "/build/index.html"));
});

server.listen(port, () => {
  const address = server.address();

  if ((address as AddressInfo).address) {
    wLogger.info(`Server started on port ${(address as AddressInfo).port} :)`);
  }
});
