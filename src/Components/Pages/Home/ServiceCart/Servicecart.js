import React from "react";
import { Col, Container, FormControl, InputGroup, Row } from "react-bootstrap";
import "./Servicecart.css";

const Servicecart = () => {
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

        {/* cart area  */}
        <div className="row">
          {/* cart one  */}
          <div className="col-xs-12 col-sm-4 col-md-3">
            <div className="card">
              <a className="img-card" href="/">
                <img
                  src="https://themepure.net/template/educal/educal/assets/img/course/course-2.jpg"
                  alt=""
                />
              </a>
              <div className="card-content">
                <div className="d-flex justify-content-between lesson">
                  <div>
                    <p>
                      {" "}
                      <i className="fas fa-book-reader"></i> 43 Lesson
                    </p>
                  </div>
                  <div>
                    <p>
                      <i className="fa fa-star star-section"></i> 4.5 (44)
                    </p>
                  </div>
                </div>
                <h4 className="card-title">
                  <a href="/">
                    {" "}
                    Become a product Manager learn the skills & job.
                  </a>
                </h4>
                <div className="text-danger pull-left">$32.00</div>
                <div className="clearfix"></div>
              </div>
              <div className="card-read-more">
                <a href="/" className="btn btn-link btn-block">
                  Add to Cart
                </a>
              </div>
            </div>
          </div>

          {/* cart two  */}
          <div className="col-xs-12 col-sm-4 col-md-3">
            <div className="card">
              <a className="img-card" href="/">
                <img
                  src="https://themepure.net/template/educal/educal/assets/img/course/course-1.jpg"
                  alt=""
                />
              </a>
              <div className="card-content">
                <div className="d-flex justify-content-between lesson">
                  <div>
                    <p>
                      {" "}
                      <i className="fas fa-book-reader"></i> 43 Lesson
                    </p>
                  </div>
                  <div>
                    <p>
                      <i className="fa fa-star star-section"></i> 4.5 (44)
                    </p>
                  </div>
                </div>
                <h4 className="card-title">
                  <a href="/">
                    {" "}
                    Become a product Manager learn the skills & job.
                  </a>
                </h4>
                <div className="text-danger pull-left">$32.00</div>
                <div className="clearfix"></div>
              </div>
              <div className="card-read-more">
                <a href="/" className="btn btn-link btn-block">
                  Add to Cart
                </a>
              </div>
            </div>
          </div>

          {/* cart three  */}
          <div className="col-xs-12 col-sm-4 col-md-3">
            <div className="card">
              <a className="img-card" href="/">
                <img
                  src="https://themepure.net/template/educal/educal/assets/img/course/course-3.jpg"
                  alt=""
                />
              </a>
              <div className="card-content">
                <div className="d-flex justify-content-between lesson">
                  <div>
                    <p>
                      {" "}
                      <i className="fas fa-book-reader"></i> 43 Lesson
                    </p>
                  </div>
                  <div>
                    <p>
                      <i className="fa fa-star star-section"></i> 4.5 (44)
                    </p>
                  </div>
                </div>
                <h4 className="card-title">
                  <a href="/">
                    {" "}
                    Become a product Manager learn the skills & job.
                  </a>
                </h4>
                <div className="text-danger pull-left">$32.00</div>
                <div className="clearfix"></div>
              </div>
              <div className="card-read-more">
                <a href="/" className="btn btn-link btn-block">
                  Add to Cart
                </a>
              </div>
            </div>
          </div>

          {/* cart four  */}
          <div className="col-xs-12 col-sm-4 col-md-3">
            <div className="card">
              <a className="img-card" href="/">
                <img
                  src="https://themepure.net/template/educal/educal/assets/img/course/course-4.jpg"
                  alt=""
                />
              </a>
              <div className="card-content">
                <div className="d-flex justify-content-between lesson">
                  <div>
                    <p>
                      {" "}
                      <i className="fas fa-book-reader"></i> 43 Lesson
                    </p>
                  </div>
                  <div>
                    <p>
                      <i className="fa fa-star star-section"></i> 4.5 (44)
                    </p>
                  </div>
                </div>
                <h4 className="card-title">
                  <a href="/">
                    {" "}
                    Become a product Manager learn the skills & job.
                  </a>
                </h4>
                <div className="text-danger pull-left">$32.00</div>
                <div className="clearfix"></div>
              </div>
              <div className="card-read-more">
                <a href="/" className="btn btn-link btn-block">
                  Add to Cart
                </a>
              </div>
            </div>
          </div>

          {/* cart five  */}
          <div className="col-xs-12 col-sm-4 col-md-3">
            <div className="card">
              <a className="img-card" href="/">
                <img
                  src="https://themepure.net/template/educal/educal/assets/img/course/course-5.jpg"
                  alt=""
                />
              </a>
              <div className="card-content">
                <div className="d-flex justify-content-between lesson">
                  <div>
                    <p>
                      {" "}
                      <i className="fas fa-book-reader"></i> 43 Lesson
                    </p>
                  </div>
                  <div>
                    <p>
                      <i className="fa fa-star star-section"></i> 4.5 (44)
                    </p>
                  </div>
                </div>
                <h4 className="card-title">
                  <a href="/">
                    {" "}
                    Become a product Manager learn the skills & job.
                  </a>
                </h4>
                <div className="text-danger pull-left">$32.00</div>
                <div className="clearfix"></div>
              </div>
              <div className="card-read-more">
                <a href="/" className="btn btn-link btn-block">
                  Add to Cart
                </a>
              </div>
            </div>
          </div>

          {/* cart six  */}
          <div className="col-xs-12 col-sm-4 col-md-3">
            <div className="card">
              <a className="img-card" href="/">
                <img
                  src="https://themepure.net/template/educal/educal/assets/img/course/course-6.jpg"
                  alt=""
                />
              </a>
              <div className="card-content">
                <div className="d-flex justify-content-between lesson">
                  <div>
                    <p>
                      {" "}
                      <i className="fas fa-book-reader"></i> 43 Lesson
                    </p>
                  </div>
                  <div>
                    <p>
                      <i className="fa fa-star star-section"></i> 4.5 (44)
                    </p>
                  </div>
                </div>
                <h4 className="card-title">
                  <a href="/">
                    {" "}
                    Become a product Manager learn the skills & job.
                  </a>
                </h4>
                <div className="text-danger pull-left">$32.00</div>
                <div className="clearfix"></div>
              </div>
              <div className="card-read-more">
                <a href="/" className="btn btn-link btn-block">
                  Add to Cart
                </a>
              </div>
            </div>
          </div>

          {/* cart seven  */}
          <div className="col-xs-12 col-sm-4 col-md-3">
            <div className="card">
              <a className="img-card" href="/">
                <img
                  src="https://themepure.net/template/educal/educal/assets/img/course/course-7.jpg"
                  alt=""
                />
              </a>
              <div className="card-content">
                <div className="d-flex justify-content-between lesson">
                  <div>
                    <p>
                      {" "}
                      <i className="fas fa-book-reader"></i> 43 Lesson
                    </p>
                  </div>
                  <div>
                    <p>
                      <i className="fa fa-star star-section"></i> 4.5 (44)
                    </p>
                  </div>
                </div>
                <h4 className="card-title">
                  <a href="/">
                    {" "}
                    Become a product Manager learn the skills & job.
                  </a>
                </h4>
                <div className="text-danger pull-left">$32.00</div>
                <div className="clearfix"></div>
              </div>
              <div className="card-read-more">
                <a href="/" className="btn btn-link btn-block">
                  Add to Cart
                </a>
              </div>
            </div>
          </div>

          {/* cart eight  */}
          <div className="col-xs-12 col-sm-4 col-md-3">
            <div className="card">
              <a className="img-card" href="/">
                <img
                  src="https://themepure.net/template/educal/educal/assets/img/course/course-8.jpg"
                  alt=""
                />
              </a>
              <div className="card-content">
                <div className="d-flex justify-content-between lesson">
                  <div>
                    <p>
                      {" "}
                      <i className="fas fa-book-reader"></i> 43 Lesson
                    </p>
                  </div>
                  <div>
                    <p>
                      <i className="fa fa-star star-section"></i> 4.5 (44)
                    </p>
                  </div>
                </div>
                <h4 className="card-title">
                  <a href="/">
                    {" "}
                    Become a product Manager learn the skills & job.
                  </a>
                </h4>
                <div className="text-danger pull-left">$32.00</div>
                <div className="clearfix"></div>
              </div>
              <div className="card-read-more">
                <a href="/" className="btn btn-link btn-block">
                  Add to Cart
                </a>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Servicecart;
