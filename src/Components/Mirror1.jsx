import React from "react";
import Button from "react-bootstrap/Button";
import { Card, Nav, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Mirror1 = () => {
  const navigate = useNavigate();
  const toMirror1 = () => {
    navigate("/nerinyan")
  }
  const toMirror2 = () => {
    navigate("/ppy")
  }
  
  return (
    <div>
      <Container>
        <Card>
          <Card.Header>
            <Nav variant="tabs" defaultActiveKey="#first">
              <Nav.Item>
                <Nav.Link onClick={toMirror1}>Mirror 1</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link onClick={toMirror2}>Mirror 2</Nav.Link>
              </Nav.Item>
            </Nav>
          </Card.Header>
          <Card.Body>
            <Card.Title>Special title treatment</Card.Title>
            <Card.Text>With supporting text below as a natural lead-in to additional content.</Card.Text>
            <Button variant="primary">Nerinyan</Button>
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
};

export default Mirror1;
