import React from "react";
import { Col, Container, Nav, Row } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <div className="header-container sticky-top">
      <Container>
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
              <NavLink
                to="/home"
                className="nav-item"
                activeStyle={{
                  fontWeight: "bold",
                  color: "#419DE2",
                }}
              >
                Home
              </NavLink>
              <NavLink
                to="/about"
                className="nav-item"
                activeStyle={{
                  fontWeight: "bold",
                  color: "#419DE2",
                }}
              >
                About
              </NavLink>
              <NavLink
                to="/services"
                className="nav-item"
                activeStyle={{
                  fontWeight: "bold",
                  color: "#419DE2",
                }}
              >
                Services
              </NavLink>
              <NavLink
                to="/contact-us"
                className="nav-item"
                activeStyle={{
                  fontWeight: "bold",
                  color: "#419DE2",
                }}
              >
                Contact Us
              </NavLink>
              <button type="button" className="btn btn-secondary">
                Sign UP
              </button>
            </Nav>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Header;
