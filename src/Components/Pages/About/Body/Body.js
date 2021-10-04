import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const Body = () => {
  return (
    <div>
      <Container className="px-5 py-5 top-section">
        <Row>
          <Col>
            <img
              src="https://themepure.net/template/educal/educal/assets/img/about/about.jpg"
              width="400px"
              alt=""
            />
          </Col>
          <Col>
            <h1>
              Achieve Your <br />
              Goals With Educal
            </h1>
            <p>
              Lost the plot bobby such a fibber bleeding bits and bobs don't get
              shirty with me bugger all mate chinwag super pukka william barney,
              horse play buggered.
            </p>
            <div className="my-3">
              <h5>
                {" "}
                <i className="fas fa-arrow-right"> </i> Upskill your
                organization.
              </h5>
              <h5>
                {" "}
                <i className="fas fa-arrow-right"> </i> Access more then 100K
                online courses
              </h5>
              <h5>
                {" "}
                <i className="fas fa-arrow-right"> </i> Learn the latest skills
              </h5>
            </div>
            <button type="button" className="btn btn-secondary">
              Apply Now
            </button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Body;
