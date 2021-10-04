import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./Cover.css";

const Cover = () => {
  return (
    <div className="full-width-home-container">
      <Container className="px-5 py-5 top-section">
        <Row>
          <Col>
            <h1> Became a Full Stack Web Developer</h1>
            <p>We will ensure our graduates are world-class web developer.</p>
            <button type="button" class="btn btn-secondary">
              Sign UP
            </button>
          </Col>
          <Col>
            <img
              src="https://www.kindpng.com/picc/m/124-1247377_website-development-auckland-web-development-png-images-hd.png"
              width="500px"
              alt=""
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Cover;
