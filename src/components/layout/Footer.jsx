import React from "react";
import { Col, Container, Row } from "react-bootstrap";

export const Footer = () => {
  return (
    <Container fluid className="bg-dark p-5">
      <Row className="text-center">
        <Col>
          &copy; Copyright all reserved. || Developed by: <a href="">Sushil</a>
        </Col>
      </Row>
    </Container>
  );
};
