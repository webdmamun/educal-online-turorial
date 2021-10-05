import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Col, Container, FormControl, InputGroup, Row } from "react-bootstrap";
import Service from "./Service/Service";
import "./Services.css";

const Services = () => {
  const [courses, setCourses] = useState([]);
  useEffect(() => {
    fetch("./fakedb.json")
      .then((res) => res.json())
      .then((data) => setCourses(data));
  }, []);
  return (
    <div className="full-cart-area">
      <Container>
        {/* cart area header */}

        <Row className="cart-heading">
          <Col>
            <h2 className="cart-heading-title">
              Find The Right <br />
              Online Course For You
            </h2>
            <p>
              You don't have to struggle alone, you've got our assistance and
              help.
            </p>
          </Col>
          <Col className="search-box">
            <InputGroup className="mb-3">
              <FormControl
                placeholder="What do you want to learn?"
                aria-label="What do you want to learn?"
                aria-describedby="basic-addon2"
              />
              <button className="btn btn-secondary">Search</button>
            </InputGroup>
          </Col>
        </Row>

        {/* Load course data  */}
        <div className="row">
          {courses.map((course) => (
            <Service course={course} key={course.id}></Service>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Services;
