import React from "react";
import { Col, Container, Nav, Row } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <>
      <Container className="header-container">
        <Row className="justify-content-between">
          <Col>
            <Link to="/">
              <img
                src="https://themepure.net/template/educal/educal/assets/img/logo/logo.png"
                alt="Logo"
              />
            </Link>
          </Col>
          <Col>
            <Nav className="justify-content-end nav-bar" activeKey="/home">
              <NavLink to="/home" className="nav-item">
                Home
              </NavLink>
              <NavLink to="/about" className="nav-item">
                About
              </NavLink>
              <NavLink to="/services" className="nav-item">
                services
              </NavLink>
              <NavLink to="/contact-us" className="nav-item">
                Contact Us
              </NavLink>
              <button type="button" class="btn btn-secondary">
                Sign UP
              </button>
            </Nav>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Header;
