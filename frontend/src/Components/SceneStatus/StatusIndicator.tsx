import React from "react";
import { SceneStatus, colorMap } from "../../Model/SceneStatuses";
import Card from "react-bootstrap/Card";
import "./SceneStatuses.css";

export interface IProps {
  scene: string;
  status: SceneStatus;
}

const SceneIndicator: React.FC<IProps> = (props: IProps) => {
  const { scene, status } = props;

  return (
    <Card
      className="SceneIndicator"
      style={{ backgroundColor: colorMap[status] }}
    >
      <Card.Text>{scene}</Card.Text>
    </Card>
  );
};

export default SceneIndicator;
