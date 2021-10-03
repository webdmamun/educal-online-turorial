import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <>
      <Container>
        <Row className="justify-content-between">
          <Col>
            <h2>EduCal</h2>
          </Col>
          <Col>
            <nav>
              <Link to="/home">Home</Link>
              <Link to="/about">About</Link>
              <Link to="/services">services</Link>
              <Link to="/contact-us">Contact Us</Link>
            </nav>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Header;
