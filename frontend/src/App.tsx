import React from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Row from "react-bootstrap/Row";
import "./App.css";
import SceneStatuses from "./Components/SceneStatus/SceneStatuses";

const App: React.FC = () => {
  return (
    <div className="App h-100">
      <Navbar sticky="top" expand="lg" className="TitleBar">
        <Navbar.Brand href="#home">Christmas Walkthrough</Navbar.Brand>
      </Navbar>
      <Container fluid className="MainContainer">
        <Row className="h-100">
          <Col as="nav" md={3} className="sidebar fullHeight-Medium-Up">
            <h1 className="SceneHeader">Scene 1</h1>
            <div style={{ flexGrow: 1 }}></div>
            <div className="StatusButtonContainer">
              <Button
                variant="primary"
                size="lg"
                block
                style={{ backgroundColor: "#FAAC27" }}
              >
                FILLING
              </Button>
              <Button
                variant="primary"
                size="lg"
                block
                style={{ backgroundColor: "#E03E3E" }}
              >
                START
              </Button>
              <Button
                variant="primary"
                size="lg"
                block
                style={{ backgroundColor: "#3EABE0" }}
              >
                EMPTYING
              </Button>
              <Button
                variant="primary"
                size="lg"
                block
                style={{ backgroundColor: "#3EE03E" }}
              >
                FINISHED
              </Button>
            </div>
          </Col>
          <Col
            as="main"
            md={9}
            className="h-100"
            style={{ padding: "20px 70px 20px 70px" }}
          >
            <SceneStatuses />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default App;
