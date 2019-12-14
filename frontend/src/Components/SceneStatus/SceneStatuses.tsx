import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { SceneStatus, colorMap } from "../../Model/SceneStatuses";
import "./SceneStatuses.css";
import SceneIndicator from "./StatusIndicator";

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

  return (
    <div className="h-100">
      <Row className="StatusIndicatorRow">
        <Col>
          <SceneIndicator scene="1" status={sceneStatuses.scene1} />
        </Col>
        <Col>
          <SceneIndicator scene="2" status={sceneStatuses.scene2} />
        </Col>
      </Row>
      <Row className="StatusIndicatorRow">
        <Col>
          <SceneIndicator scene="4" status={sceneStatuses.scene4} />
        </Col>
        <Col>
          <SceneIndicator scene="3" status={sceneStatuses.scene3} />
        </Col>
      </Row>
    </div>
  );
};

export default SceneStatuses;
