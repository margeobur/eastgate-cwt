import * as express from "express";
import { createServer } from "http";
import * as path from "path";
import { AddressInfo } from "net";
import createCWTServer from "./server";

const port = process.env.PORT || "50000";
const websocketPath = "/socket";

const app = express();
const server = createServer(app);

const wss = createCWTServer(server, websocketPath);

const router = express.Router();

app.use("/", router);
app.use(express.static(path.join(__dirname, "build")));

app.get('*', (req,res) =>{
  res.sendFile(path.join(__dirname+'/build/index.html'));
});

server.listen(port, () => {
  const address = server.address();

  if ((address as AddressInfo).address) {
    console.log(`Server started on port ${(address as AddressInfo).port} :)`);
  }
});
