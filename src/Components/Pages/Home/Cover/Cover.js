import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Cover.css";

const Cover = () => {
  return (
    <div className="full-width-home-container">
      <Container className="px-5 py-5 top-section">
        <Row>
          <Col>
            <p className="fw-bold">Access 2700+</p>
            <h1 className="fw-bold">Online Tutorial From Top Instructor.</h1>
            <p>
              Meet university,and cultural institutions, who'll share their
              experience.
            </p>
            <button type="button" className="btn btn-secondary">
              <Link to="/services" className="view-courses-btn">
                View All Courses
              </Link>
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
