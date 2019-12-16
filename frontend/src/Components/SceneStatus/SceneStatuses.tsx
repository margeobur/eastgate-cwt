import React, { useState, useEffect } from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { SceneStatus } from "../../Model/SceneStatuses";
import "./SceneStatuses.css";
import SceneIndicator from "./StatusIndicator";
import * as config from "../../config.json";

interface ISceneStatuses {
  scene1: SceneStatus;
  scene2: SceneStatus;
  scene3: SceneStatus;
  scene4: SceneStatus;
}

const SceneStatuses: React.FC = () => {
  const [sceneStatuses, setSceneStatuses] = useState<ISceneStatuses>({
    scene1: "idle",
    scene2: "filling",
    scene3: "live",
    scene4: "emptying"
  });
  const [haveMounted, setHaveMounted] = useState(false);

  useEffect(() => {
    let wsClient: WebSocket | null = null;
    try {
      wsClient = new WebSocket(config.WebsocketURL);

      wsClient.onmessage = (event: MessageEvent) => {
        const message = JSON.parse(event.data);

        if (message.scene1) {
          setSceneStatuses({
            scene1: message.scene1,
            scene2: message.scene2,
            scene3: message.scene3,
            scene4: message.scene4
          });
        } else if (
          message.messageType &&
          message.messageType === "status-update"
        ) {
          const sceneStats = sceneStatuses;
          switch (message.source) {
            case "scene1":
              sceneStats.scene1 = message.status;
              break;
            case "scene2":
              sceneStats.scene2 = message.status;
              break;
            case "scene3":
              sceneStats.scene3 = message.status;
              break;
            case "scene4":
              sceneStats.scene4 = message.status;
              break;
          }

          setSceneStatuses(sceneStats);
        }
      };
    } catch (e) {
      alert(e);
    }

    setHaveMounted(true);

    return function cleanup() {
      if (wsClient !== null) {
        wsClient.close();
      }
    };
  }, [haveMounted]);

  return (
    <div className="h-100">
      <Row className="StatusIndicatorRow">
        <Col xs={12} md={6}>
          <SceneIndicator scene="1" status={sceneStatuses.scene1} />
        </Col>
        <Col xs={12} md={6}>
          <SceneIndicator scene="2" status={sceneStatuses.scene2} />
        </Col>
      </Row>
      <Row className="StatusIndicatorRow">
        <Col xs={12} md={6}>
          <SceneIndicator scene="4" status={sceneStatuses.scene4} />
        </Col>
        <Col xs={12} md={6}>
          <SceneIndicator scene="3" status={sceneStatuses.scene3} />
        </Col>
      </Row>
    </div>
  );
};

export default SceneStatuses;
