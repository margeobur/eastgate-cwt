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
    <div className="App">
      <Navbar sticky="top" bg="primary" variant="dark" expand="lg">
        <Navbar.Brand href="#home">Christmas Walkthrough</Navbar.Brand>
      </Navbar>
      <Container fluid>
        <Row>
          <Col as="nav" md={3} sm={5} className="sidebar">
            <div className="sidebar-sticky">
              <Button variant="outline-primary">Start This Scene</Button>
            </div>
          </Col>
          <Col as="main" md={8} sm={6}>
            <Container fluid className="indicator-area">
              <Row>
                <Col lg={true} sm={6}>
                  <Card className="scene-indicator">
                    <Card.Text>1</Card.Text>
                  </Card>
                </Col>
                <Col lg={true} sm={6}>
                  <Card className="scene-indicator">
                    <Card.Text>2</Card.Text>
                  </Card>
                </Col>
              </Row>
              <Row>
                <Col lg={true} sm={6}>
                  <Card className="scene-indicator">
                    <Card.Text>3</Card.Text>
                  </Card>
                </Col>
                <Col lg={true} sm={6}>
                  <Card className="scene-indicator">
                    <Card.Text>4</Card.Text>
                  </Card>
                </Col>
              </Row>
            </Container>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default App;
