import React from "react";
import "./Service.css";

const Service = (props) => {
  const { course_title, image, lesson, rating, rating_number, pirce } =
    props.course;
  return (
    <>
      {/* single cart  */}

      <div className="col-xs-12 col-sm-4 col-md-3">
        <div className="card">
          <a className="img-card" href="/">
            <img src={image} alt="" />
          </a>
          <div className="card-content">
            <div className="d-flex justify-content-between lesson">
              <div>
                <p>
                  {" "}
                  <i className="fas fa-book-reader"></i> {lesson} Lesson
                </p>
              </div>
              <div>
                <p>
                  <i className="fa fa-star star-section"></i> {rating} (
                  {rating_number})
                </p>
              </div>
            </div>
            <h4 className="card-title">
              <a href="/"> {course_title}</a>
            </h4>
            <div className="text-danger pull-left">${pirce}</div>
            <div className="clearfix"></div>
          </div>
          <div className="card-read-more">
            <a href="/" className="btn btn-link btn-block">
              Add to Cart
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Service;
