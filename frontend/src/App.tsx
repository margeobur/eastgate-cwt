import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Row from "react-bootstrap/Row";
import "./App.css";

const App: React.FC = () => {
  return (
    <div className="App h-100">
      <Navbar sticky="top" expand="lg" className="TitleBar">
        <Navbar.Brand href="#home">Christmas Walkthrough</Navbar.Brand>
      </Navbar>
      <Container fluid className="MainContainer">
        <Row className="h-100">
          <Col as="nav" md={3} className="sidebar h-100">
            <div className="sidebar-sticky">
              <Button variant="primary">Start</Button>
            </div>
          </Col>
          <Col
            as="main"
            md={9}
            className="h-100"
            style={{ padding: "20px 50px 20px 50px" }}
          >
            <Row className="StatusIndicatorRow">
              <Col>
                <Card
                  className="scene-indicator"
                  style={{ backgroundColor: "#3EE03E" }}
                >
                  <Card.Text>1</Card.Text>
                </Card>
              </Col>
              <Col>
                <Card
                  className="scene-indicator"
                  style={{ backgroundColor: "#E03E3E" }}
                >
                  <Card.Text>2</Card.Text>
                </Card>
              </Col>
            </Row>
            <Row className="StatusIndicatorRow">
              <Col>
                <Card
                  className="scene-indicator"
                  style={{ backgroundColor: "#FAAC27" }}
                >
                  <Card.Text>4</Card.Text>
                </Card>
              </Col>
              <Col>
                <Card
                  className="scene-indicator"
                  style={{ backgroundColor: "#3EABE0" }}
                >
                  <Card.Text>3</Card.Text>
                </Card>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default App;
