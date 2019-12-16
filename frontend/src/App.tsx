import React from "react";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import "./App.css";
import SceneStatuses from "./Components/SceneStatus/SceneStatuses";
import SceneControls from "./Components/SceneControls/SceneControls";
import { useParams } from "react-router-dom";

const App: React.FC = () => {
  const { scene } = useParams();

  function isValidSceneNum(scene: string | undefined): boolean {
    if (!scene) {
      return false;
    }
    const num = Number(scene);
    if (num !== NaN) {
      if (num === 1 || num === 2 || num === 3 || num === 4) {
        return true;
      }
    }
    return false;
  }

  return (
    <Container fluid className="MainContainer">
      <Row className="h-100">
        {isValidSceneNum(scene) && (
          <Col
            as="nav"
            md={3}
            className="sidebar fullHeight-Medium-Up .d-none .d-sm-block"
          >
            <h1 className="SceneHeader">Scene {scene}</h1>
            <div style={{ flexGrow: 1 }}></div>
            <SceneControls scene={scene || ""} />
          </Col>
        )}
        <Col
          as="main"
          md={isValidSceneNum(scene) ? 9 : 12}
          className="h-100"
          style={{ padding: "20px 70px 20px 70px" }}
        >
          <SceneStatuses />
        </Col>
      </Row>
    </Container>
  );
};

export default App;
