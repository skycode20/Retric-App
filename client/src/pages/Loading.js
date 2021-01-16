import React from "react";
import { Col, Row, Container } from "../components/Grid";

function Loading() {
  return (
    <Container fluid>
      <Row>
        <Col size="md-12">
            <h1>Loading...</h1>
        </Col>
      </Row>
    </Container>
  );
}

export default Loading;