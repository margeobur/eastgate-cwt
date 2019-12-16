import React, { useEffect } from "react";
import "./SceneControls.css";
import Button from "react-bootstrap/Button";
import { colorMap } from "../../Model/SceneStatuses";
import config from "../../config.json";

interface IProps {
  scene: string;
}

const SceneControls: React.FC<IProps> = (props: IProps) => {
  let wsClient: WebSocket | null = null;

  useEffect(() => {
    try {
      wsClient = new WebSocket(config.WebsocketURL);
    } catch (e) {
      alert(e);
    }

    return function cleanup() {
      if (wsClient !== null) {
        wsClient.close();
      }
    };
  });

  function handleClick(status: string) {
    if (wsClient !== null) {
      wsClient.send(
        JSON.stringify({
          messageType: "status-update",
          source: `scene${props.scene}`,
          status: status
        })
      );
    }
  }

  return (
    <div className="StatusButtonContainer">
      <Button
        variant="primary"
        name="filling"
        size="lg"
        style={{ backgroundColor: colorMap["filling"] }}
        onClick={() => handleClick("filling")}
        className="StatusButton"
      >
        FILLING
      </Button>
      <Button
        variant="primary"
        name="live"
        size="lg"
        style={{ backgroundColor: colorMap["live"] }}
        onClick={() => handleClick("live")}
        className="StatusButton"
      >
        START
      </Button>
      <Button
        variant="primary"
        name="emptying"
        size="lg"
        style={{ backgroundColor: colorMap["emptying"] }}
        onClick={() => handleClick("emptying")}
        className="StatusButton"
      >
        EMPTYING
      </Button>
      <Button
        variant="primary"
        name="idle"
        size="lg"
        style={{ backgroundColor: colorMap["idle"] }}
        onClick={() => handleClick("idle")}
        className="StatusButton"
      >
        FINISHED
      </Button>
    </div>
  );
};

export default SceneControls;
