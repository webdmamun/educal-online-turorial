import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="py-5 footer-area">
      <Container>
        <Row className="justify-content-between">
          <Col>
            <div>
              <img
                src="https://themepure.net/template/educal/educal/assets/img/logo/logo-2.png"
                alt="Logo"
              />
              <p>
                Great lesson ideas and <br /> lesson plans for ESL teachers!{" "}
                <br /> Educators can customize lesson <br /> plans to best.
              </p>
              <a href="/#" target="_blank">
                <i className="fab fa-facebook-square"></i>
              </a>
              <a href="/#" target="_blank">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="/#" target="_blank">
                <i className="fab fa-twitter-square"></i>
              </a>
            </div>
          </Col>
          <Col className="d-flex justify-content-end">
            <div className="wrapper">
              <div className="bottom">
                <form action="#">
                  <div className="input-box">
                    <input
                      type="text"
                      name=""
                      value=""
                      placeholder="Enter your email"
                      required
                    />

                    <input type="submit" name="" value="Subscribe" />
                  </div>
                </form>
                <div className="info">
                  Get the latest news and updates right at your inbox.
                </div>
              </div>
            </div>
          </Col>
        </Row>
        <hr />
        <div className="text-center footer-copyright">
          {" "}
          &#169; 2022 Educal, All Rights Reserved. Design By{" "}
          <a href="webdmamun.com" target="_blank">
            Mamun Ahmed
          </a>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
