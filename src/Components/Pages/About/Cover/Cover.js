import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./Cover.css";

const Cover = () => {
  return (
    <div className="full-width-about-container">
      <Container className="px-5 py-5 top-section">
        <Row>
          <Col>
            <h1>About Us</h1>
            <p>
              We will ensure our graduates are world-class web developer. We
              will ensure our graduates are world-class web developer.We will
              ensure our graduates are world-class web developer.We will ensure
              our graduates are world-class web developer.We will ensure our
              graduates are world-class web developer.We will ensure our
              graduates are world-class web developer.We will ensure our
              graduates are world-class web developer.
            </p>
            <button type="button" className="btn btn-secondary">
              Get Start
            </button>
          </Col>
          <Col>
            <img
              src="https://www.dreamhost.com/blog/wp-content/uploads/2020/11/310ad4be-c64b-40c2-af35-7aeaf85dcb96_Great-about-us-pages-opt.jpg"
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
